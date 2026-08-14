# `ephemeralAzurermKeyVaultSecret` Submodule <a name="`ephemeralAzurermKeyVaultSecret` Submodule" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAzurermKeyVaultSecret <a name="EphemeralAzurermKeyVaultSecret" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret azurerm_key_vault_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/ephemeralazurermkeyvaultsecret"

ephemeralazurermkeyvaultsecret.NewEphemeralAzurermKeyVaultSecret(scope Construct, id *string, config EphemeralAzurermKeyVaultSecretConfig) EphemeralAzurermKeyVaultSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig">EphemeralAzurermKeyVaultSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/ephemeralazurermkeyvaultsecret"

ephemeralazurermkeyvaultsecret.EphemeralAzurermKeyVaultSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/ephemeralazurermkeyvaultsecret"

ephemeralazurermkeyvaultsecret.EphemeralAzurermKeyVaultSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/ephemeralazurermkeyvaultsecret"

ephemeralazurermkeyvaultsecret.EphemeralAzurermKeyVaultSecret_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.notBeforeDate">NotBeforeDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `NotBeforeDate`<sup>Required</sup> <a name="NotBeforeDate" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.notBeforeDate"></a>

```go
func NotBeforeDate() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAzurermKeyVaultSecretConfig <a name="EphemeralAzurermKeyVaultSecretConfig" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/ephemeralazurermkeyvaultsecret"

&ephemeralazurermkeyvaultsecret.EphemeralAzurermKeyVaultSecretConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	KeyVaultId: *string,
	Name: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret#key_vault_id EphemeralAzurermKeyVaultSecret#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret#name EphemeralAzurermKeyVaultSecret#name}. |
| <code><a href="#@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret#version EphemeralAzurermKeyVaultSecret#version}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret#key_vault_id EphemeralAzurermKeyVaultSecret#key_vault_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret#name EphemeralAzurermKeyVaultSecret#name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-azurerm.ephemeralAzurermKeyVaultSecret.EphemeralAzurermKeyVaultSecretConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/ephemeral-resources/key_vault_secret#version EphemeralAzurermKeyVaultSecret#version}.

---



