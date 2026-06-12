# `servicebusNamespaceCustomerManagedKey` Submodule <a name="`servicebusNamespaceCustomerManagedKey` Submodule" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusNamespaceCustomerManagedKeyA <a name="ServicebusNamespaceCustomerManagedKeyA" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key azurerm_servicebus_namespace_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ServicebusNamespaceCustomerManagedKeyA(Construct Scope, string Id, ServicebusNamespaceCustomerManagedKeyAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig">ServicebusNamespaceCustomerManagedKeyAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig">ServicebusNamespaceCustomerManagedKeyAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetInfrastructureEncryptionEnabled">ResetInfrastructureEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.putTimeouts"></a>

```csharp
private void PutTimeouts(ServicebusNamespaceCustomerManagedKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInfrastructureEncryptionEnabled` <a name="ResetInfrastructureEncryptionEnabled" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetInfrastructureEncryptionEnabled"></a>

```csharp
private void ResetInfrastructureEncryptionEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicebusNamespaceCustomerManagedKeyA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ServicebusNamespaceCustomerManagedKeyA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ServicebusNamespaceCustomerManagedKeyA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ServicebusNamespaceCustomerManagedKeyA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ServicebusNamespaceCustomerManagedKeyA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicebusNamespaceCustomerManagedKeyA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicebusNamespaceCustomerManagedKeyA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicebusNamespaceCustomerManagedKeyA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicebusNamespaceCustomerManagedKeyA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference">ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.infrastructureEncryptionEnabledInput">InfrastructureEncryptionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.timeouts"></a>

```csharp
public ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference">ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InfrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabledInput" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.infrastructureEncryptionEnabledInput"></a>

```csharp
public bool|IResolvable InfrastructureEncryptionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.timeoutsInput"></a>

```csharp
public IResolvable|ServicebusNamespaceCustomerManagedKeyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureEncryptionEnabled`<sup>Required</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.infrastructureEncryptionEnabled"></a>

```csharp
public bool|IResolvable InfrastructureEncryptionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusNamespaceCustomerManagedKeyAConfig <a name="ServicebusNamespaceCustomerManagedKeyAConfig" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ServicebusNamespaceCustomerManagedKeyAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string KeyVaultKeyId,
    string NamespaceId,
    string Id = null,
    bool|IResolvable InfrastructureEncryptionEnabled = null,
    ServicebusNamespaceCustomerManagedKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#key_vault_key_id ServicebusNamespaceCustomerManagedKeyA#key_vault_key_id}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.namespaceId">NamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#namespace_id ServicebusNamespaceCustomerManagedKeyA#namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#id ServicebusNamespaceCustomerManagedKeyA#id}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#infrastructure_encryption_enabled ServicebusNamespaceCustomerManagedKeyA#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#key_vault_key_id ServicebusNamespaceCustomerManagedKeyA#key_vault_key_id}.

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#namespace_id ServicebusNamespaceCustomerManagedKeyA#namespace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#id ServicebusNamespaceCustomerManagedKeyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InfrastructureEncryptionEnabled`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.infrastructureEncryptionEnabled"></a>

```csharp
public bool|IResolvable InfrastructureEncryptionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#infrastructure_encryption_enabled ServicebusNamespaceCustomerManagedKeyA#infrastructure_encryption_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyAConfig.property.timeouts"></a>

```csharp
public ServicebusNamespaceCustomerManagedKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#timeouts ServicebusNamespaceCustomerManagedKeyA#timeouts}

---

### ServicebusNamespaceCustomerManagedKeyTimeouts <a name="ServicebusNamespaceCustomerManagedKeyTimeouts" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ServicebusNamespaceCustomerManagedKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#create ServicebusNamespaceCustomerManagedKeyA#create}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#delete ServicebusNamespaceCustomerManagedKeyA#delete}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#read ServicebusNamespaceCustomerManagedKeyA#read}. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#update ServicebusNamespaceCustomerManagedKeyA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#create ServicebusNamespaceCustomerManagedKeyA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#delete ServicebusNamespaceCustomerManagedKeyA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#read ServicebusNamespaceCustomerManagedKeyA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/servicebus_namespace_customer_managed_key#update ServicebusNamespaceCustomerManagedKeyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference <a name="ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicebusNamespaceCustomerManagedKeyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.servicebusNamespaceCustomerManagedKey.ServicebusNamespaceCustomerManagedKeyTimeouts">ServicebusNamespaceCustomerManagedKeyTimeouts</a>

---



