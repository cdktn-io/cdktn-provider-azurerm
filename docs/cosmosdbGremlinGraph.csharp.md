# `cosmosdbGremlinGraph` Submodule <a name="`cosmosdbGremlinGraph` Submodule" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbGremlinGraph <a name="CosmosdbGremlinGraph" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph azurerm_cosmosdb_gremlin_graph}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraph(Construct Scope, string Id, CosmosdbGremlinGraphConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig">CosmosdbGremlinGraphConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig">CosmosdbGremlinGraphConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putAutoscaleSettings">PutAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putConflictResolutionPolicy">PutConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putIndexPolicy">PutIndexPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putUniqueKey">PutUniqueKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetAnalyticalStorageTtl">ResetAnalyticalStorageTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetAutoscaleSettings">ResetAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetConflictResolutionPolicy">ResetConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetIndexPolicy">ResetIndexPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetPartitionKeyVersion">ResetPartitionKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetUniqueKey">ResetUniqueKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscaleSettings` <a name="PutAutoscaleSettings" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putAutoscaleSettings"></a>

```csharp
private void PutAutoscaleSettings(CosmosdbGremlinGraphAutoscaleSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putAutoscaleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a>

---

##### `PutConflictResolutionPolicy` <a name="PutConflictResolutionPolicy" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putConflictResolutionPolicy"></a>

```csharp
private void PutConflictResolutionPolicy(CosmosdbGremlinGraphConflictResolutionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putConflictResolutionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a>

---

##### `PutIndexPolicy` <a name="PutIndexPolicy" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putIndexPolicy"></a>

```csharp
private void PutIndexPolicy(CosmosdbGremlinGraphIndexPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putIndexPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putTimeouts"></a>

```csharp
private void PutTimeouts(CosmosdbGremlinGraphTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a>

---

##### `PutUniqueKey` <a name="PutUniqueKey" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putUniqueKey"></a>

```csharp
private void PutUniqueKey(IResolvable|CosmosdbGremlinGraphUniqueKey[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.putUniqueKey.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]

---

##### `ResetAnalyticalStorageTtl` <a name="ResetAnalyticalStorageTtl" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetAnalyticalStorageTtl"></a>

```csharp
private void ResetAnalyticalStorageTtl()
```

##### `ResetAutoscaleSettings` <a name="ResetAutoscaleSettings" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetAutoscaleSettings"></a>

```csharp
private void ResetAutoscaleSettings()
```

##### `ResetConflictResolutionPolicy` <a name="ResetConflictResolutionPolicy" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetConflictResolutionPolicy"></a>

```csharp
private void ResetConflictResolutionPolicy()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndexPolicy` <a name="ResetIndexPolicy" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetIndexPolicy"></a>

```csharp
private void ResetIndexPolicy()
```

##### `ResetPartitionKeyVersion` <a name="ResetPartitionKeyVersion" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetPartitionKeyVersion"></a>

```csharp
private void ResetPartitionKeyVersion()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUniqueKey` <a name="ResetUniqueKey" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.resetUniqueKey"></a>

```csharp
private void ResetUniqueKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CosmosdbGremlinGraph resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CosmosdbGremlinGraph.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CosmosdbGremlinGraph.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CosmosdbGremlinGraph.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CosmosdbGremlinGraph.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CosmosdbGremlinGraph resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CosmosdbGremlinGraph to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CosmosdbGremlinGraph that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CosmosdbGremlinGraph to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.autoscaleSettings">AutoscaleSettings</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference">CosmosdbGremlinGraphAutoscaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.conflictResolutionPolicy">ConflictResolutionPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference">CosmosdbGremlinGraphConflictResolutionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.indexPolicy">IndexPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference">CosmosdbGremlinGraphIndexPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference">CosmosdbGremlinGraphTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.uniqueKey">UniqueKey</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList">CosmosdbGremlinGraphUniqueKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.analyticalStorageTtlInput">AnalyticalStorageTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.autoscaleSettingsInput">AutoscaleSettingsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.conflictResolutionPolicyInput">ConflictResolutionPolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.indexPolicyInput">IndexPolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyPathInput">PartitionKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyVersionInput">PartitionKeyVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.uniqueKeyInput">UniqueKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.analyticalStorageTtl">AnalyticalStorageTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyPath">PartitionKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyVersion">PartitionKeyVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoscaleSettings`<sup>Required</sup> <a name="AutoscaleSettings" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.autoscaleSettings"></a>

```csharp
public CosmosdbGremlinGraphAutoscaleSettingsOutputReference AutoscaleSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference">CosmosdbGremlinGraphAutoscaleSettingsOutputReference</a>

---

##### `ConflictResolutionPolicy`<sup>Required</sup> <a name="ConflictResolutionPolicy" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.conflictResolutionPolicy"></a>

```csharp
public CosmosdbGremlinGraphConflictResolutionPolicyOutputReference ConflictResolutionPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference">CosmosdbGremlinGraphConflictResolutionPolicyOutputReference</a>

---

##### `IndexPolicy`<sup>Required</sup> <a name="IndexPolicy" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.indexPolicy"></a>

```csharp
public CosmosdbGremlinGraphIndexPolicyOutputReference IndexPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference">CosmosdbGremlinGraphIndexPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.timeouts"></a>

```csharp
public CosmosdbGremlinGraphTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference">CosmosdbGremlinGraphTimeoutsOutputReference</a>

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.uniqueKey"></a>

```csharp
public CosmosdbGremlinGraphUniqueKeyList UniqueKey { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList">CosmosdbGremlinGraphUniqueKeyList</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `AnalyticalStorageTtlInput`<sup>Optional</sup> <a name="AnalyticalStorageTtlInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.analyticalStorageTtlInput"></a>

```csharp
public double AnalyticalStorageTtlInput { get; }
```

- *Type:* double

---

##### `AutoscaleSettingsInput`<sup>Optional</sup> <a name="AutoscaleSettingsInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.autoscaleSettingsInput"></a>

```csharp
public CosmosdbGremlinGraphAutoscaleSettings AutoscaleSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a>

---

##### `ConflictResolutionPolicyInput`<sup>Optional</sup> <a name="ConflictResolutionPolicyInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.conflictResolutionPolicyInput"></a>

```csharp
public CosmosdbGremlinGraphConflictResolutionPolicy ConflictResolutionPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a>

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.defaultTtlInput"></a>

```csharp
public double DefaultTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexPolicyInput`<sup>Optional</sup> <a name="IndexPolicyInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.indexPolicyInput"></a>

```csharp
public CosmosdbGremlinGraphIndexPolicy IndexPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartitionKeyPathInput`<sup>Optional</sup> <a name="PartitionKeyPathInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyPathInput"></a>

```csharp
public string PartitionKeyPathInput { get; }
```

- *Type:* string

---

##### `PartitionKeyVersionInput`<sup>Optional</sup> <a name="PartitionKeyVersionInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyVersionInput"></a>

```csharp
public double PartitionKeyVersionInput { get; }
```

- *Type:* double

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.timeoutsInput"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a>

---

##### `UniqueKeyInput`<sup>Optional</sup> <a name="UniqueKeyInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.uniqueKeyInput"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphUniqueKey[] UniqueKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `AnalyticalStorageTtl`<sup>Required</sup> <a name="AnalyticalStorageTtl" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.analyticalStorageTtl"></a>

```csharp
public double AnalyticalStorageTtl { get; }
```

- *Type:* double

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartitionKeyPath`<sup>Required</sup> <a name="PartitionKeyPath" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyPath"></a>

```csharp
public string PartitionKeyPath { get; }
```

- *Type:* string

---

##### `PartitionKeyVersion`<sup>Required</sup> <a name="PartitionKeyVersion" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.partitionKeyVersion"></a>

```csharp
public double PartitionKeyVersion { get; }
```

- *Type:* double

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraph.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbGremlinGraphAutoscaleSettings <a name="CosmosdbGremlinGraphAutoscaleSettings" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphAutoscaleSettings {
    double MaxThroughput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings.property.maxThroughput">MaxThroughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#max_throughput CosmosdbGremlinGraph#max_throughput}. |

---

##### `MaxThroughput`<sup>Optional</sup> <a name="MaxThroughput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings.property.maxThroughput"></a>

```csharp
public double MaxThroughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#max_throughput CosmosdbGremlinGraph#max_throughput}.

---

### CosmosdbGremlinGraphConfig <a name="CosmosdbGremlinGraphConfig" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountName,
    string DatabaseName,
    string Name,
    string PartitionKeyPath,
    string ResourceGroupName,
    double AnalyticalStorageTtl = null,
    CosmosdbGremlinGraphAutoscaleSettings AutoscaleSettings = null,
    CosmosdbGremlinGraphConflictResolutionPolicy ConflictResolutionPolicy = null,
    double DefaultTtl = null,
    string Id = null,
    CosmosdbGremlinGraphIndexPolicy IndexPolicy = null,
    double PartitionKeyVersion = null,
    double Throughput = null,
    CosmosdbGremlinGraphTimeouts Timeouts = null,
    IResolvable|CosmosdbGremlinGraphUniqueKey[] UniqueKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#account_name CosmosdbGremlinGraph#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#database_name CosmosdbGremlinGraph#database_name}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#name CosmosdbGremlinGraph#name}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.partitionKeyPath">PartitionKeyPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#partition_key_path CosmosdbGremlinGraph#partition_key_path}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#resource_group_name CosmosdbGremlinGraph#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.analyticalStorageTtl">AnalyticalStorageTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#analytical_storage_ttl CosmosdbGremlinGraph#analytical_storage_ttl}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.autoscaleSettings">AutoscaleSettings</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.conflictResolutionPolicy">ConflictResolutionPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a></code> | conflict_resolution_policy block. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#default_ttl CosmosdbGremlinGraph#default_ttl}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#id CosmosdbGremlinGraph#id}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.indexPolicy">IndexPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a></code> | index_policy block. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.partitionKeyVersion">PartitionKeyVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#partition_key_version CosmosdbGremlinGraph#partition_key_version}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#throughput CosmosdbGremlinGraph#throughput}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.uniqueKey">UniqueKey</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]</code> | unique_key block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#account_name CosmosdbGremlinGraph#account_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#database_name CosmosdbGremlinGraph#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#name CosmosdbGremlinGraph#name}.

---

##### `PartitionKeyPath`<sup>Required</sup> <a name="PartitionKeyPath" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.partitionKeyPath"></a>

```csharp
public string PartitionKeyPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#partition_key_path CosmosdbGremlinGraph#partition_key_path}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#resource_group_name CosmosdbGremlinGraph#resource_group_name}.

---

##### `AnalyticalStorageTtl`<sup>Optional</sup> <a name="AnalyticalStorageTtl" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.analyticalStorageTtl"></a>

```csharp
public double AnalyticalStorageTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#analytical_storage_ttl CosmosdbGremlinGraph#analytical_storage_ttl}.

---

##### `AutoscaleSettings`<sup>Optional</sup> <a name="AutoscaleSettings" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.autoscaleSettings"></a>

```csharp
public CosmosdbGremlinGraphAutoscaleSettings AutoscaleSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#autoscale_settings CosmosdbGremlinGraph#autoscale_settings}

---

##### `ConflictResolutionPolicy`<sup>Optional</sup> <a name="ConflictResolutionPolicy" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.conflictResolutionPolicy"></a>

```csharp
public CosmosdbGremlinGraphConflictResolutionPolicy ConflictResolutionPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a>

conflict_resolution_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_policy CosmosdbGremlinGraph#conflict_resolution_policy}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#default_ttl CosmosdbGremlinGraph#default_ttl}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#id CosmosdbGremlinGraph#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexPolicy`<sup>Optional</sup> <a name="IndexPolicy" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.indexPolicy"></a>

```csharp
public CosmosdbGremlinGraphIndexPolicy IndexPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a>

index_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#index_policy CosmosdbGremlinGraph#index_policy}

---

##### `PartitionKeyVersion`<sup>Optional</sup> <a name="PartitionKeyVersion" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.partitionKeyVersion"></a>

```csharp
public double PartitionKeyVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#partition_key_version CosmosdbGremlinGraph#partition_key_version}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#throughput CosmosdbGremlinGraph#throughput}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.timeouts"></a>

```csharp
public CosmosdbGremlinGraphTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#timeouts CosmosdbGremlinGraph#timeouts}

---

##### `UniqueKey`<sup>Optional</sup> <a name="UniqueKey" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConfig.property.uniqueKey"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphUniqueKey[] UniqueKey { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]

unique_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#unique_key CosmosdbGremlinGraph#unique_key}

---

### CosmosdbGremlinGraphConflictResolutionPolicy <a name="CosmosdbGremlinGraphConflictResolutionPolicy" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphConflictResolutionPolicy {
    string Mode,
    string ConflictResolutionPath = null,
    string ConflictResolutionProcedure = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#mode CosmosdbGremlinGraph#mode}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.conflictResolutionPath">ConflictResolutionPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_path CosmosdbGremlinGraph#conflict_resolution_path}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.conflictResolutionProcedure">ConflictResolutionProcedure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_procedure CosmosdbGremlinGraph#conflict_resolution_procedure}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#mode CosmosdbGremlinGraph#mode}.

---

##### `ConflictResolutionPath`<sup>Optional</sup> <a name="ConflictResolutionPath" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.conflictResolutionPath"></a>

```csharp
public string ConflictResolutionPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_path CosmosdbGremlinGraph#conflict_resolution_path}.

---

##### `ConflictResolutionProcedure`<sup>Optional</sup> <a name="ConflictResolutionProcedure" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy.property.conflictResolutionProcedure"></a>

```csharp
public string ConflictResolutionProcedure { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#conflict_resolution_procedure CosmosdbGremlinGraph#conflict_resolution_procedure}.

---

### CosmosdbGremlinGraphIndexPolicy <a name="CosmosdbGremlinGraphIndexPolicy" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphIndexPolicy {
    string IndexingMode,
    bool|IResolvable Automatic = null,
    IResolvable|CosmosdbGremlinGraphIndexPolicyCompositeIndex[] CompositeIndex = null,
    string[] ExcludedPaths = null,
    string[] IncludedPaths = null,
    IResolvable|CosmosdbGremlinGraphIndexPolicySpatialIndex[] SpatialIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.indexingMode">IndexingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#indexing_mode CosmosdbGremlinGraph#indexing_mode}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.automatic">Automatic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#automatic CosmosdbGremlinGraph#automatic}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.compositeIndex">CompositeIndex</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]</code> | composite_index block. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.excludedPaths">ExcludedPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#excluded_paths CosmosdbGremlinGraph#excluded_paths}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.includedPaths">IncludedPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#included_paths CosmosdbGremlinGraph#included_paths}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.spatialIndex">SpatialIndex</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]</code> | spatial_index block. |

---

##### `IndexingMode`<sup>Required</sup> <a name="IndexingMode" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.indexingMode"></a>

```csharp
public string IndexingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#indexing_mode CosmosdbGremlinGraph#indexing_mode}.

---

##### `Automatic`<sup>Optional</sup> <a name="Automatic" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.automatic"></a>

```csharp
public bool|IResolvable Automatic { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#automatic CosmosdbGremlinGraph#automatic}.

---

##### `CompositeIndex`<sup>Optional</sup> <a name="CompositeIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.compositeIndex"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphIndexPolicyCompositeIndex[] CompositeIndex { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]

composite_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#composite_index CosmosdbGremlinGraph#composite_index}

---

##### `ExcludedPaths`<sup>Optional</sup> <a name="ExcludedPaths" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.excludedPaths"></a>

```csharp
public string[] ExcludedPaths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#excluded_paths CosmosdbGremlinGraph#excluded_paths}.

---

##### `IncludedPaths`<sup>Optional</sup> <a name="IncludedPaths" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.includedPaths"></a>

```csharp
public string[] IncludedPaths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#included_paths CosmosdbGremlinGraph#included_paths}.

---

##### `SpatialIndex`<sup>Optional</sup> <a name="SpatialIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy.property.spatialIndex"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphIndexPolicySpatialIndex[] SpatialIndex { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]

spatial_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#spatial_index CosmosdbGremlinGraph#spatial_index}

---

### CosmosdbGremlinGraphIndexPolicyCompositeIndex <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphIndexPolicyCompositeIndex {
    IResolvable|CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[] Index
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex.property.index">Index</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]</code> | index block. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex.property.index"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[] Index { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#index CosmosdbGremlinGraph#index}

---

### CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex {
    string Order,
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.property.order">Order</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#order CosmosdbGremlinGraph#order}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}. |

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#order CosmosdbGremlinGraph#order}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}.

---

### CosmosdbGremlinGraphIndexPolicySpatialIndex <a name="CosmosdbGremlinGraphIndexPolicySpatialIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphIndexPolicySpatialIndex {
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#path CosmosdbGremlinGraph#path}.

---

### CosmosdbGremlinGraphTimeouts <a name="CosmosdbGremlinGraphTimeouts" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#create CosmosdbGremlinGraph#create}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#delete CosmosdbGremlinGraph#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#read CosmosdbGremlinGraph#read}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#update CosmosdbGremlinGraph#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#create CosmosdbGremlinGraph#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#delete CosmosdbGremlinGraph#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#read CosmosdbGremlinGraph#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#update CosmosdbGremlinGraph#update}.

---

### CosmosdbGremlinGraphUniqueKey <a name="CosmosdbGremlinGraphUniqueKey" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphUniqueKey {
    string[] Paths
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey.property.paths">Paths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#paths CosmosdbGremlinGraph#paths}. |

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cosmosdb_gremlin_graph#paths CosmosdbGremlinGraph#paths}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbGremlinGraphAutoscaleSettingsOutputReference <a name="CosmosdbGremlinGraphAutoscaleSettingsOutputReference" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphAutoscaleSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resetMaxThroughput">ResetMaxThroughput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxThroughput` <a name="ResetMaxThroughput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.resetMaxThroughput"></a>

```csharp
private void ResetMaxThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.maxThroughputInput">MaxThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.maxThroughput">MaxThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxThroughputInput`<sup>Optional</sup> <a name="MaxThroughputInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.maxThroughputInput"></a>

```csharp
public double MaxThroughputInput { get; }
```

- *Type:* double

---

##### `MaxThroughput`<sup>Required</sup> <a name="MaxThroughput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.maxThroughput"></a>

```csharp
public double MaxThroughput { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettingsOutputReference.property.internalValue"></a>

```csharp
public CosmosdbGremlinGraphAutoscaleSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphAutoscaleSettings">CosmosdbGremlinGraphAutoscaleSettings</a>

---


### CosmosdbGremlinGraphConflictResolutionPolicyOutputReference <a name="CosmosdbGremlinGraphConflictResolutionPolicyOutputReference" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphConflictResolutionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resetConflictResolutionPath">ResetConflictResolutionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resetConflictResolutionProcedure">ResetConflictResolutionProcedure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConflictResolutionPath` <a name="ResetConflictResolutionPath" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resetConflictResolutionPath"></a>

```csharp
private void ResetConflictResolutionPath()
```

##### `ResetConflictResolutionProcedure` <a name="ResetConflictResolutionProcedure" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.resetConflictResolutionProcedure"></a>

```csharp
private void ResetConflictResolutionProcedure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionPathInput">ConflictResolutionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionProcedureInput">ConflictResolutionProcedureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionPath">ConflictResolutionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionProcedure">ConflictResolutionProcedure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConflictResolutionPathInput`<sup>Optional</sup> <a name="ConflictResolutionPathInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionPathInput"></a>

```csharp
public string ConflictResolutionPathInput { get; }
```

- *Type:* string

---

##### `ConflictResolutionProcedureInput`<sup>Optional</sup> <a name="ConflictResolutionProcedureInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionProcedureInput"></a>

```csharp
public string ConflictResolutionProcedureInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ConflictResolutionPath`<sup>Required</sup> <a name="ConflictResolutionPath" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionPath"></a>

```csharp
public string ConflictResolutionPath { get; }
```

- *Type:* string

---

##### `ConflictResolutionProcedure`<sup>Required</sup> <a name="ConflictResolutionProcedure" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.conflictResolutionProcedure"></a>

```csharp
public string ConflictResolutionProcedure { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicyOutputReference.property.internalValue"></a>

```csharp
public CosmosdbGremlinGraphConflictResolutionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphConflictResolutionPolicy">CosmosdbGremlinGraphConflictResolutionPolicy</a>

---


### CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.get"></a>

```csharp
private CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList.property.internalValue"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]

---


### CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>

---


### CosmosdbGremlinGraphIndexPolicyCompositeIndexList <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexList" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphIndexPolicyCompositeIndexList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.get"></a>

```csharp
private CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList.property.internalValue"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphIndexPolicyCompositeIndex[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]

---


### CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference <a name="CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.putIndex">PutIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIndex` <a name="PutIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.putIndex"></a>

```csharp
private void PutIndex(IResolvable|CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.putIndex.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.index">Index</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.indexInput">IndexInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.index"></a>

```csharp
public CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList Index { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndexList</a>

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.indexInput"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex[] IndexInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndexIndex</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphIndexPolicyCompositeIndex InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>

---


### CosmosdbGremlinGraphIndexPolicyOutputReference <a name="CosmosdbGremlinGraphIndexPolicyOutputReference" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphIndexPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putCompositeIndex">PutCompositeIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putSpatialIndex">PutSpatialIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetAutomatic">ResetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetCompositeIndex">ResetCompositeIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetExcludedPaths">ResetExcludedPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetIncludedPaths">ResetIncludedPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetSpatialIndex">ResetSpatialIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompositeIndex` <a name="PutCompositeIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putCompositeIndex"></a>

```csharp
private void PutCompositeIndex(IResolvable|CosmosdbGremlinGraphIndexPolicyCompositeIndex[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putCompositeIndex.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]

---

##### `PutSpatialIndex` <a name="PutSpatialIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putSpatialIndex"></a>

```csharp
private void PutSpatialIndex(IResolvable|CosmosdbGremlinGraphIndexPolicySpatialIndex[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.putSpatialIndex.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]

---

##### `ResetAutomatic` <a name="ResetAutomatic" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetAutomatic"></a>

```csharp
private void ResetAutomatic()
```

##### `ResetCompositeIndex` <a name="ResetCompositeIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetCompositeIndex"></a>

```csharp
private void ResetCompositeIndex()
```

##### `ResetExcludedPaths` <a name="ResetExcludedPaths" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetExcludedPaths"></a>

```csharp
private void ResetExcludedPaths()
```

##### `ResetIncludedPaths` <a name="ResetIncludedPaths" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetIncludedPaths"></a>

```csharp
private void ResetIncludedPaths()
```

##### `ResetSpatialIndex` <a name="ResetSpatialIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.resetSpatialIndex"></a>

```csharp
private void ResetSpatialIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.compositeIndex">CompositeIndex</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList">CosmosdbGremlinGraphIndexPolicyCompositeIndexList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.spatialIndex">SpatialIndex</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList">CosmosdbGremlinGraphIndexPolicySpatialIndexList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.automaticInput">AutomaticInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.compositeIndexInput">CompositeIndexInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.excludedPathsInput">ExcludedPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.includedPathsInput">IncludedPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.indexingModeInput">IndexingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.spatialIndexInput">SpatialIndexInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.automatic">Automatic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.excludedPaths">ExcludedPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.includedPaths">IncludedPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.indexingMode">IndexingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompositeIndex`<sup>Required</sup> <a name="CompositeIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.compositeIndex"></a>

```csharp
public CosmosdbGremlinGraphIndexPolicyCompositeIndexList CompositeIndex { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndexList">CosmosdbGremlinGraphIndexPolicyCompositeIndexList</a>

---

##### `SpatialIndex`<sup>Required</sup> <a name="SpatialIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.spatialIndex"></a>

```csharp
public CosmosdbGremlinGraphIndexPolicySpatialIndexList SpatialIndex { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList">CosmosdbGremlinGraphIndexPolicySpatialIndexList</a>

---

##### `AutomaticInput`<sup>Optional</sup> <a name="AutomaticInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.automaticInput"></a>

```csharp
public bool|IResolvable AutomaticInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CompositeIndexInput`<sup>Optional</sup> <a name="CompositeIndexInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.compositeIndexInput"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphIndexPolicyCompositeIndex[] CompositeIndexInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyCompositeIndex">CosmosdbGremlinGraphIndexPolicyCompositeIndex</a>[]

---

##### `ExcludedPathsInput`<sup>Optional</sup> <a name="ExcludedPathsInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.excludedPathsInput"></a>

```csharp
public string[] ExcludedPathsInput { get; }
```

- *Type:* string[]

---

##### `IncludedPathsInput`<sup>Optional</sup> <a name="IncludedPathsInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.includedPathsInput"></a>

```csharp
public string[] IncludedPathsInput { get; }
```

- *Type:* string[]

---

##### `IndexingModeInput`<sup>Optional</sup> <a name="IndexingModeInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.indexingModeInput"></a>

```csharp
public string IndexingModeInput { get; }
```

- *Type:* string

---

##### `SpatialIndexInput`<sup>Optional</sup> <a name="SpatialIndexInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.spatialIndexInput"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphIndexPolicySpatialIndex[] SpatialIndexInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.automatic"></a>

```csharp
public bool|IResolvable Automatic { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExcludedPaths`<sup>Required</sup> <a name="ExcludedPaths" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.excludedPaths"></a>

```csharp
public string[] ExcludedPaths { get; }
```

- *Type:* string[]

---

##### `IncludedPaths`<sup>Required</sup> <a name="IncludedPaths" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.includedPaths"></a>

```csharp
public string[] IncludedPaths { get; }
```

- *Type:* string[]

---

##### `IndexingMode`<sup>Required</sup> <a name="IndexingMode" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.indexingMode"></a>

```csharp
public string IndexingMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicyOutputReference.property.internalValue"></a>

```csharp
public CosmosdbGremlinGraphIndexPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicy">CosmosdbGremlinGraphIndexPolicy</a>

---


### CosmosdbGremlinGraphIndexPolicySpatialIndexList <a name="CosmosdbGremlinGraphIndexPolicySpatialIndexList" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphIndexPolicySpatialIndexList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.get"></a>

```csharp
private CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexList.property.internalValue"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphIndexPolicySpatialIndex[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>[]

---


### CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference <a name="CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndexOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphIndexPolicySpatialIndex InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphIndexPolicySpatialIndex">CosmosdbGremlinGraphIndexPolicySpatialIndex</a>

---


### CosmosdbGremlinGraphTimeoutsOutputReference <a name="CosmosdbGremlinGraphTimeoutsOutputReference" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphTimeouts">CosmosdbGremlinGraphTimeouts</a>

---


### CosmosdbGremlinGraphUniqueKeyList <a name="CosmosdbGremlinGraphUniqueKeyList" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphUniqueKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.get"></a>

```csharp
private CosmosdbGremlinGraphUniqueKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyList.property.internalValue"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphUniqueKey[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>[]

---


### CosmosdbGremlinGraphUniqueKeyOutputReference <a name="CosmosdbGremlinGraphUniqueKeyOutputReference" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CosmosdbGremlinGraphUniqueKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CosmosdbGremlinGraphUniqueKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cosmosdbGremlinGraph.CosmosdbGremlinGraphUniqueKey">CosmosdbGremlinGraphUniqueKey</a>

---



