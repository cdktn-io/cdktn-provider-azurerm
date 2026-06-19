# `containerAppEnvironmentManagedCertificate` Submodule <a name="`containerAppEnvironmentManagedCertificate` Submodule" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironmentManagedCertificate <a name="ContainerAppEnvironmentManagedCertificate" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate azurerm_container_app_environment_managed_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerAppEnvironmentManagedCertificate(Construct Scope, string Id, ContainerAppEnvironmentManagedCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig">ContainerAppEnvironmentManagedCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig">ContainerAppEnvironmentManagedCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetDomainControlValidation">ResetDomainControlValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerAppEnvironmentManagedCertificateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

---

##### `ResetDomainControlValidation` <a name="ResetDomainControlValidation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetDomainControlValidation"></a>

```csharp
private void ResetDomainControlValidation()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ContainerAppEnvironmentManagedCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ContainerAppEnvironmentManagedCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ContainerAppEnvironmentManagedCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ContainerAppEnvironmentManagedCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ContainerAppEnvironmentManagedCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ContainerAppEnvironmentManagedCertificate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAppEnvironmentManagedCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAppEnvironmentManagedCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ContainerAppEnvironmentManagedCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference">ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.validationToken">ValidationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentIdInput">ContainerAppEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidationInput">DomainControlValidationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectNameInput">SubjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidation">DomainControlValidation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectName">SubjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeouts"></a>

```csharp
public ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference">ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference</a>

---

##### `ValidationToken`<sup>Required</sup> <a name="ValidationToken" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.validationToken"></a>

```csharp
public string ValidationToken { get; }
```

- *Type:* string

---

##### `ContainerAppEnvironmentIdInput`<sup>Optional</sup> <a name="ContainerAppEnvironmentIdInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentIdInput"></a>

```csharp
public string ContainerAppEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `DomainControlValidationInput`<sup>Optional</sup> <a name="DomainControlValidationInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidationInput"></a>

```csharp
public string DomainControlValidationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SubjectNameInput`<sup>Optional</sup> <a name="SubjectNameInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectNameInput"></a>

```csharp
public string SubjectNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeoutsInput"></a>

```csharp
public IResolvable|ContainerAppEnvironmentManagedCertificateTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentId"></a>

```csharp
public string ContainerAppEnvironmentId { get; }
```

- *Type:* string

---

##### `DomainControlValidation`<sup>Required</sup> <a name="DomainControlValidation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidation"></a>

```csharp
public string DomainControlValidation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SubjectName`<sup>Required</sup> <a name="SubjectName" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectName"></a>

```csharp
public string SubjectName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentManagedCertificateConfig <a name="ContainerAppEnvironmentManagedCertificateConfig" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerAppEnvironmentManagedCertificateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ContainerAppEnvironmentId,
    string Name,
    string SubjectName,
    string DomainControlValidation = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ContainerAppEnvironmentManagedCertificateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>string</code> | The Container App Managed Environment ID to configure this Managed Certificate on. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.name">Name</a></code> | <code>string</code> | The name of the Container Apps Managed Certificate. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.subjectName">SubjectName</a></code> | <code>string</code> | The Subject Name of the Certificate. Must be a valid domain name. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.domainControlValidation">DomainControlValidation</a></code> | <code>string</code> | The domain control validation type for the managed certificate. Possible values are `CNAME` and `HTTP`. Defaults to `HTTP`. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#id ContainerAppEnvironmentManagedCertificate#id}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#tags ContainerAppEnvironmentManagedCertificate#tags}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.containerAppEnvironmentId"></a>

```csharp
public string ContainerAppEnvironmentId { get; set; }
```

- *Type:* string

The Container App Managed Environment ID to configure this Managed Certificate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#container_app_environment_id ContainerAppEnvironmentManagedCertificate#container_app_environment_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Container Apps Managed Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#name ContainerAppEnvironmentManagedCertificate#name}

---

##### `SubjectName`<sup>Required</sup> <a name="SubjectName" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.subjectName"></a>

```csharp
public string SubjectName { get; set; }
```

- *Type:* string

The Subject Name of the Certificate. Must be a valid domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#subject_name ContainerAppEnvironmentManagedCertificate#subject_name}

---

##### `DomainControlValidation`<sup>Optional</sup> <a name="DomainControlValidation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.domainControlValidation"></a>

```csharp
public string DomainControlValidation { get; set; }
```

- *Type:* string

The domain control validation type for the managed certificate. Possible values are `CNAME` and `HTTP`. Defaults to `HTTP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#domain_control_validation ContainerAppEnvironmentManagedCertificate#domain_control_validation}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#id ContainerAppEnvironmentManagedCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#tags ContainerAppEnvironmentManagedCertificate#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.timeouts"></a>

```csharp
public ContainerAppEnvironmentManagedCertificateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#timeouts ContainerAppEnvironmentManagedCertificate#timeouts}

---

### ContainerAppEnvironmentManagedCertificateTimeouts <a name="ContainerAppEnvironmentManagedCertificateTimeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerAppEnvironmentManagedCertificateTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#create ContainerAppEnvironmentManagedCertificate#create}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#delete ContainerAppEnvironmentManagedCertificate#delete}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#read ContainerAppEnvironmentManagedCertificate#read}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#update ContainerAppEnvironmentManagedCertificate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#create ContainerAppEnvironmentManagedCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#delete ContainerAppEnvironmentManagedCertificate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#read ContainerAppEnvironmentManagedCertificate#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#update ContainerAppEnvironmentManagedCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference <a name="ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContainerAppEnvironmentManagedCertificateTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

---



