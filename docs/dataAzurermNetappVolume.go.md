# `dataAzurermNetappVolume` Submodule <a name="`dataAzurermNetappVolume` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappVolume <a name="DataAzurermNetappVolume" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume azurerm_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

dataazurermnetappvolume.NewDataAzurermNetappVolume(scope Construct, id *string, config DataAzurermNetappVolumeConfig) DataAzurermNetappVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig">DataAzurermNetappVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig">DataAzurermNetappVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.resetSecurityStyle">ResetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermNetappVolumeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeouts">DataAzurermNetappVolumeTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.resetId"></a>

```go
func ResetId()
```

##### `ResetSecurityStyle` <a name="ResetSecurityStyle" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.resetSecurityStyle"></a>

```go
func ResetSecurityStyle()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermNetappVolume resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

dataazurermnetappvolume.DataAzurermNetappVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

dataazurermnetappvolume.DataAzurermNetappVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

dataazurermnetappvolume.DataAzurermNetappVolume_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

dataazurermnetappvolume.DataAzurermNetappVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermNetappVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermNetappVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermNetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplit">AcceptGrowCapacityPoolForShortTermCloneSplit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.dataProtectionAdvancedRansomware">DataProtectionAdvancedRansomware</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList">DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.dataProtectionBackupPolicy">DataProtectionBackupPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList">DataAzurermNetappVolumeDataProtectionBackupPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.dataProtectionReplication">DataProtectionReplication</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList">DataAzurermNetappVolumeDataProtectionReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.encryptionKeySource">EncryptionKeySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.keyVaultPrivateEndpointId">KeyVaultPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.largeVolumeEnabled">LargeVolumeEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.mountIpAddresses">MountIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.networkFeatures">NetworkFeatures</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.serviceLevel">ServiceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.smbAccessBasedEnumerationEnabled">SmbAccessBasedEnumerationEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.smbNonBrowsableEnabled">SmbNonBrowsableEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.storageQuotaInGb">StorageQuotaInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference">DataAzurermNetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.volumePath">VolumePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.poolNameInput">PoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.securityStyleInput">SecurityStyleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.poolName">PoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AcceptGrowCapacityPoolForShortTermCloneSplit`<sup>Required</sup> <a name="AcceptGrowCapacityPoolForShortTermCloneSplit" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplit"></a>

```go
func AcceptGrowCapacityPoolForShortTermCloneSplit() *string
```

- *Type:* *string

---

##### `DataProtectionAdvancedRansomware`<sup>Required</sup> <a name="DataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.dataProtectionAdvancedRansomware"></a>

```go
func DataProtectionAdvancedRansomware() DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList">DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList</a>

---

##### `DataProtectionBackupPolicy`<sup>Required</sup> <a name="DataProtectionBackupPolicy" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.dataProtectionBackupPolicy"></a>

```go
func DataProtectionBackupPolicy() DataAzurermNetappVolumeDataProtectionBackupPolicyList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList">DataAzurermNetappVolumeDataProtectionBackupPolicyList</a>

---

##### `DataProtectionReplication`<sup>Required</sup> <a name="DataProtectionReplication" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.dataProtectionReplication"></a>

```go
func DataProtectionReplication() DataAzurermNetappVolumeDataProtectionReplicationList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList">DataAzurermNetappVolumeDataProtectionReplicationList</a>

---

##### `EncryptionKeySource`<sup>Required</sup> <a name="EncryptionKeySource" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.encryptionKeySource"></a>

```go
func EncryptionKeySource() *string
```

- *Type:* *string

---

##### `KeyVaultPrivateEndpointId`<sup>Required</sup> <a name="KeyVaultPrivateEndpointId" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.keyVaultPrivateEndpointId"></a>

```go
func KeyVaultPrivateEndpointId() *string
```

- *Type:* *string

---

##### `LargeVolumeEnabled`<sup>Required</sup> <a name="LargeVolumeEnabled" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.largeVolumeEnabled"></a>

```go
func LargeVolumeEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MountIpAddresses`<sup>Required</sup> <a name="MountIpAddresses" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.mountIpAddresses"></a>

```go
func MountIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkFeatures`<sup>Required</sup> <a name="NetworkFeatures" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.networkFeatures"></a>

```go
func NetworkFeatures() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.serviceLevel"></a>

```go
func ServiceLevel() *string
```

- *Type:* *string

---

##### `SmbAccessBasedEnumerationEnabled`<sup>Required</sup> <a name="SmbAccessBasedEnumerationEnabled" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.smbAccessBasedEnumerationEnabled"></a>

```go
func SmbAccessBasedEnumerationEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SmbNonBrowsableEnabled`<sup>Required</sup> <a name="SmbNonBrowsableEnabled" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.smbNonBrowsableEnabled"></a>

```go
func SmbNonBrowsableEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StorageQuotaInGb`<sup>Required</sup> <a name="StorageQuotaInGb" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.storageQuotaInGb"></a>

```go
func StorageQuotaInGb() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.timeouts"></a>

```go
func Timeouts() DataAzurermNetappVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference">DataAzurermNetappVolumeTimeoutsOutputReference</a>

---

##### `VolumePath`<sup>Required</sup> <a name="VolumePath" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.volumePath"></a>

```go
func VolumePath() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PoolNameInput`<sup>Optional</sup> <a name="PoolNameInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.poolNameInput"></a>

```go
func PoolNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.securityStyleInput"></a>

```go
func SecurityStyleInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.poolName"></a>

```go
func PoolName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.securityStyle"></a>

```go
func SecurityStyle() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappVolumeConfig <a name="DataAzurermNetappVolumeConfig" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

&dataazurermnetappvolume.DataAzurermNetappVolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountName: *string,
	Name: *string,
	PoolName: *string,
	ResourceGroupName: *string,
	Id: *string,
	SecurityStyle: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#account_name DataAzurermNetappVolume#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#name DataAzurermNetappVolume#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.poolName">PoolName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#pool_name DataAzurermNetappVolume#pool_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#resource_group_name DataAzurermNetappVolume#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#id DataAzurermNetappVolume#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#security_style DataAzurermNetappVolume#security_style}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeouts">DataAzurermNetappVolumeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#account_name DataAzurermNetappVolume#account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#name DataAzurermNetappVolume#name}.

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.poolName"></a>

```go
PoolName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#pool_name DataAzurermNetappVolume#pool_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#resource_group_name DataAzurermNetappVolume#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#id DataAzurermNetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityStyle`<sup>Optional</sup> <a name="SecurityStyle" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.securityStyle"></a>

```go
SecurityStyle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#security_style DataAzurermNetappVolume#security_style}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeConfig.property.timeouts"></a>

```go
Timeouts DataAzurermNetappVolumeTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeouts">DataAzurermNetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#timeouts DataAzurermNetappVolume#timeouts}

---

### DataAzurermNetappVolumeDataProtectionAdvancedRansomware <a name="DataAzurermNetappVolumeDataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomware.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

&dataazurermnetappvolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomware {

}
```


### DataAzurermNetappVolumeDataProtectionBackupPolicy <a name="DataAzurermNetappVolumeDataProtectionBackupPolicy" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

&dataazurermnetappvolume.DataAzurermNetappVolumeDataProtectionBackupPolicy {

}
```


### DataAzurermNetappVolumeDataProtectionReplication <a name="DataAzurermNetappVolumeDataProtectionReplication" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

&dataazurermnetappvolume.DataAzurermNetappVolumeDataProtectionReplication {

}
```


### DataAzurermNetappVolumeTimeouts <a name="DataAzurermNetappVolumeTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

&dataazurermnetappvolume.DataAzurermNetappVolumeTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#read DataAzurermNetappVolume#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_volume#read DataAzurermNetappVolume#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList <a name="DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

dataazurermnetappvolume.NewDataAzurermNetappVolumeDataProtectionAdvancedRansomwareList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.get"></a>

```go
func Get(index *f64) DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference <a name="DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

dataazurermnetappvolume.NewDataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabled">ProtectionEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomware">DataAzurermNetappVolumeDataProtectionAdvancedRansomware</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProtectionEnabled`<sup>Required</sup> <a name="ProtectionEnabled" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabled"></a>

```go
func ProtectionEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermNetappVolumeDataProtectionAdvancedRansomware
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionAdvancedRansomware">DataAzurermNetappVolumeDataProtectionAdvancedRansomware</a>

---


### DataAzurermNetappVolumeDataProtectionBackupPolicyList <a name="DataAzurermNetappVolumeDataProtectionBackupPolicyList" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

dataazurermnetappvolume.NewDataAzurermNetappVolumeDataProtectionBackupPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermNetappVolumeDataProtectionBackupPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.get"></a>

```go
func Get(index *f64) DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference <a name="DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

dataazurermnetappvolume.NewDataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyId">BackupPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabled">PolicyEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicy">DataAzurermNetappVolumeDataProtectionBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyId"></a>

```go
func BackupPolicyId() *string
```

- *Type:* *string

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultId"></a>

```go
func BackupVaultId() *string
```

- *Type:* *string

---

##### `PolicyEnabled`<sup>Required</sup> <a name="PolicyEnabled" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabled"></a>

```go
func PolicyEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermNetappVolumeDataProtectionBackupPolicy
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionBackupPolicy">DataAzurermNetappVolumeDataProtectionBackupPolicy</a>

---


### DataAzurermNetappVolumeDataProtectionReplicationList <a name="DataAzurermNetappVolumeDataProtectionReplicationList" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

dataazurermnetappvolume.NewDataAzurermNetappVolumeDataProtectionReplicationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermNetappVolumeDataProtectionReplicationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.get"></a>

```go
func Get(index *f64) DataAzurermNetappVolumeDataProtectionReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermNetappVolumeDataProtectionReplicationOutputReference <a name="DataAzurermNetappVolumeDataProtectionReplicationOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

dataazurermnetappvolume.NewDataAzurermNetappVolumeDataProtectionReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermNetappVolumeDataProtectionReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">RemoteVolumeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">RemoteVolumeResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">ReplicationFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplication">DataAzurermNetappVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `RemoteVolumeLocation`<sup>Required</sup> <a name="RemoteVolumeLocation" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```go
func RemoteVolumeLocation() *string
```

- *Type:* *string

---

##### `RemoteVolumeResourceId`<sup>Required</sup> <a name="RemoteVolumeResourceId" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```go
func RemoteVolumeResourceId() *string
```

- *Type:* *string

---

##### `ReplicationFrequency`<sup>Required</sup> <a name="ReplicationFrequency" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```go
func ReplicationFrequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermNetappVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeDataProtectionReplication">DataAzurermNetappVolumeDataProtectionReplication</a>

---


### DataAzurermNetappVolumeTimeoutsOutputReference <a name="DataAzurermNetappVolumeTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermnetappvolume"

dataazurermnetappvolume.NewDataAzurermNetappVolumeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermNetappVolumeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolume.DataAzurermNetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



