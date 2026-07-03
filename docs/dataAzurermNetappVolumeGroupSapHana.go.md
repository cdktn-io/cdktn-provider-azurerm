# `dataAzurermNetappVolumeGroupSapHana` Submodule <a name="`dataAzurermNetappVolumeGroupSapHana` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappVolumeGroupSapHana <a name="DataAzurermNetappVolumeGroupSapHana" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana azurerm_netapp_volume_group_sap_hana}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.NewDataAzurermNetappVolumeGroupSapHana(scope Construct, id *string, config DataAzurermNetappVolumeGroupSapHanaConfig) DataAzurermNetappVolumeGroupSapHana
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig">DataAzurermNetappVolumeGroupSapHanaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig">DataAzurermNetappVolumeGroupSapHanaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermNetappVolumeGroupSapHanaTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts">DataAzurermNetappVolumeGroupSapHanaTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermNetappVolumeGroupSapHana resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.DataAzurermNetappVolumeGroupSapHana_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.DataAzurermNetappVolumeGroupSapHana_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.DataAzurermNetappVolumeGroupSapHana_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.DataAzurermNetappVolumeGroupSapHana_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermNetappVolumeGroupSapHana resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermNetappVolumeGroupSapHana to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermNetappVolumeGroupSapHana that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappVolumeGroupSapHana to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.groupDescription">GroupDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference">DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.volume">Volume</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList">DataAzurermNetappVolumeGroupSapHanaVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.applicationIdentifier"></a>

```go
func ApplicationIdentifier() *string
```

- *Type:* *string

---

##### `GroupDescription`<sup>Required</sup> <a name="GroupDescription" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.groupDescription"></a>

```go
func GroupDescription() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.timeouts"></a>

```go
func Timeouts() DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference">DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.volume"></a>

```go
func Volume() DataAzurermNetappVolumeGroupSapHanaVolumeList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList">DataAzurermNetappVolumeGroupSapHanaVolumeList</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappVolumeGroupSapHanaConfig <a name="DataAzurermNetappVolumeGroupSapHanaConfig" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

&dataazurermnetappvolumegroupsaphana.DataAzurermNetappVolumeGroupSapHanaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountName: *string,
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana#account_name DataAzurermNetappVolumeGroupSapHana#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana#name DataAzurermNetappVolumeGroupSapHana#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana#resource_group_name DataAzurermNetappVolumeGroupSapHana#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana#id DataAzurermNetappVolumeGroupSapHana#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts">DataAzurermNetappVolumeGroupSapHanaTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana#account_name DataAzurermNetappVolumeGroupSapHana#account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana#name DataAzurermNetappVolumeGroupSapHana#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana#resource_group_name DataAzurermNetappVolumeGroupSapHana#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana#id DataAzurermNetappVolumeGroupSapHana#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.timeouts"></a>

```go
Timeouts DataAzurermNetappVolumeGroupSapHanaTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts">DataAzurermNetappVolumeGroupSapHanaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana#timeouts DataAzurermNetappVolumeGroupSapHana#timeouts}

---

### DataAzurermNetappVolumeGroupSapHanaTimeouts <a name="DataAzurermNetappVolumeGroupSapHanaTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

&dataazurermnetappvolumegroupsaphana.DataAzurermNetappVolumeGroupSapHanaTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana#read DataAzurermNetappVolumeGroupSapHana#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_group_sap_hana#read DataAzurermNetappVolumeGroupSapHana#read}.

---

### DataAzurermNetappVolumeGroupSapHanaVolume <a name="DataAzurermNetappVolumeGroupSapHanaVolume" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

&dataazurermnetappvolumegroupsaphana.DataAzurermNetappVolumeGroupSapHanaVolume {

}
```


### DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication <a name="DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

&dataazurermnetappvolumegroupsaphana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication {

}
```


### DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy <a name="DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

&dataazurermnetappvolumegroupsaphana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy {

}
```


### DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule <a name="DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

&dataazurermnetappvolumegroupsaphana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference <a name="DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.NewDataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList <a name="DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.NewDataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.get"></a>

```go
func Get(index *f64) DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference <a name="DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.NewDataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">RemoteVolumeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">RemoteVolumeResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">ReplicationFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `RemoteVolumeLocation`<sup>Required</sup> <a name="RemoteVolumeLocation" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```go
func RemoteVolumeLocation() *string
```

- *Type:* *string

---

##### `RemoteVolumeResourceId`<sup>Required</sup> <a name="RemoteVolumeResourceId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```go
func RemoteVolumeResourceId() *string
```

- *Type:* *string

---

##### `ReplicationFrequency`<sup>Required</sup> <a name="ReplicationFrequency" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```go
func ReplicationFrequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication</a>

---


### DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList <a name="DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.NewDataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.get"></a>

```go
func Get(index *f64) DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference <a name="DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.NewDataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId">SnapshotPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SnapshotPolicyId`<sup>Required</sup> <a name="SnapshotPolicyId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId"></a>

```go
func SnapshotPolicyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy</a>

---


### DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList <a name="DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.NewDataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.get"></a>

```go
func Get(index *f64) DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference <a name="DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.NewDataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.allowedClients">AllowedClients</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled">Nfsv3Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled">Nfsv41Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled">RootAccessEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.ruleIndex">RuleIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadOnly">UnixReadOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadWrite">UnixReadWrite</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule">DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.allowedClients"></a>

```go
func AllowedClients() *string
```

- *Type:* *string

---

##### `Nfsv3Enabled`<sup>Required</sup> <a name="Nfsv3Enabled" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled"></a>

```go
func Nfsv3Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Nfsv41Enabled`<sup>Required</sup> <a name="Nfsv41Enabled" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled"></a>

```go
func Nfsv41Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RootAccessEnabled`<sup>Required</sup> <a name="RootAccessEnabled" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled"></a>

```go
func RootAccessEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RuleIndex`<sup>Required</sup> <a name="RuleIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.ruleIndex"></a>

```go
func RuleIndex() *f64
```

- *Type:* *f64

---

##### `UnixReadOnly`<sup>Required</sup> <a name="UnixReadOnly" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadOnly"></a>

```go
func UnixReadOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UnixReadWrite`<sup>Required</sup> <a name="UnixReadWrite" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadWrite"></a>

```go
func UnixReadWrite() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule">DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule</a>

---


### DataAzurermNetappVolumeGroupSapHanaVolumeList <a name="DataAzurermNetappVolumeGroupSapHanaVolumeList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.NewDataAzurermNetappVolumeGroupSapHanaVolumeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermNetappVolumeGroupSapHanaVolumeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.get"></a>

```go
func Get(index *f64) DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference <a name="DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolumegroupsaphana"

dataazurermnetappvolumegroupsaphana.NewDataAzurermNetappVolumeGroupSapHanaVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.capacityPoolId">CapacityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionReplication">DataProtectionReplication</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionSnapshotPolicy">DataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.encryptionKeySource">EncryptionKeySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.exportPolicyRule">ExportPolicyRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList">DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.keyVaultPrivateEndpointId">KeyVaultPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.mountIpAddresses">MountIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.networkFeatures">NetworkFeatures</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.serviceLevel">ServiceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.snapshotDirectoryVisible">SnapshotDirectoryVisible</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.storageQuotaInGb">StorageQuotaInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.throughputInMibps">ThroughputInMibps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.volumePath">VolumePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.volumeSpecName">VolumeSpecName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolume">DataAzurermNetappVolumeGroupSapHanaVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityPoolId`<sup>Required</sup> <a name="CapacityPoolId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.capacityPoolId"></a>

```go
func CapacityPoolId() *string
```

- *Type:* *string

---

##### `DataProtectionReplication`<sup>Required</sup> <a name="DataProtectionReplication" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionReplication"></a>

```go
func DataProtectionReplication() DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList</a>

---

##### `DataProtectionSnapshotPolicy`<sup>Required</sup> <a name="DataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionSnapshotPolicy"></a>

```go
func DataProtectionSnapshotPolicy() DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList</a>

---

##### `EncryptionKeySource`<sup>Required</sup> <a name="EncryptionKeySource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.encryptionKeySource"></a>

```go
func EncryptionKeySource() *string
```

- *Type:* *string

---

##### `ExportPolicyRule`<sup>Required</sup> <a name="ExportPolicyRule" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.exportPolicyRule"></a>

```go
func ExportPolicyRule() DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList">DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultPrivateEndpointId`<sup>Required</sup> <a name="KeyVaultPrivateEndpointId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.keyVaultPrivateEndpointId"></a>

```go
func KeyVaultPrivateEndpointId() *string
```

- *Type:* *string

---

##### `MountIpAddresses`<sup>Required</sup> <a name="MountIpAddresses" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.mountIpAddresses"></a>

```go
func MountIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkFeatures`<sup>Required</sup> <a name="NetworkFeatures" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.networkFeatures"></a>

```go
func NetworkFeatures() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `ProximityPlacementGroupId`<sup>Required</sup> <a name="ProximityPlacementGroupId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.proximityPlacementGroupId"></a>

```go
func ProximityPlacementGroupId() *string
```

- *Type:* *string

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.securityStyle"></a>

```go
func SecurityStyle() *string
```

- *Type:* *string

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.serviceLevel"></a>

```go
func ServiceLevel() *string
```

- *Type:* *string

---

##### `SnapshotDirectoryVisible`<sup>Required</sup> <a name="SnapshotDirectoryVisible" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.snapshotDirectoryVisible"></a>

```go
func SnapshotDirectoryVisible() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StorageQuotaInGb`<sup>Required</sup> <a name="StorageQuotaInGb" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.storageQuotaInGb"></a>

```go
func StorageQuotaInGb() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ThroughputInMibps`<sup>Required</sup> <a name="ThroughputInMibps" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.throughputInMibps"></a>

```go
func ThroughputInMibps() *f64
```

- *Type:* *f64

---

##### `VolumePath`<sup>Required</sup> <a name="VolumePath" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.volumePath"></a>

```go
func VolumePath() *string
```

- *Type:* *string

---

##### `VolumeSpecName`<sup>Required</sup> <a name="VolumeSpecName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.volumeSpecName"></a>

```go
func VolumeSpecName() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermNetappVolumeGroupSapHanaVolume
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolume">DataAzurermNetappVolumeGroupSapHanaVolume</a>

---



