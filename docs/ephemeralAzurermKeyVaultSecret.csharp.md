# `ephemeralAzurermKeyVaultSecret` Submodule <a name="`ephemeralAzurermKeyVaultSecret` Submodule" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAzurermKeyVaultSecret <a name="EphemeralAzurermKeyVaultSecret" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret azurerm_key_vault_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EphemeralAzurermKeyVaultSecret(Construct Scope, string Id, EphemeralAzurermKeyVaultSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig">EphemeralAzurermKeyVaultSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig">EphemeralAzurermKeyVaultSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

EphemeralAzurermKeyVaultSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

EphemeralAzurermKeyVaultSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

EphemeralAzurermKeyVaultSecret.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.notBeforeDate">NotBeforeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; }
```

- *Type:* string

---

##### `NotBeforeDate`<sup>Required</sup> <a name="NotBeforeDate" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.notBeforeDate"></a>

```csharp
public string NotBeforeDate { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAzurermKeyVaultSecretConfig <a name="EphemeralAzurermKeyVaultSecretConfig" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EphemeralAzurermKeyVaultSecretConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string KeyVaultId,
    string Name,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret#key_vault_id EphemeralAzurermKeyVaultSecret#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret#name EphemeralAzurermKeyVaultSecret#name}. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret#version EphemeralAzurermKeyVaultSecret#version}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret#key_vault_id EphemeralAzurermKeyVaultSecret#key_vault_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret#name EphemeralAzurermKeyVaultSecret#name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret#version EphemeralAzurermKeyVaultSecret#version}.

---



