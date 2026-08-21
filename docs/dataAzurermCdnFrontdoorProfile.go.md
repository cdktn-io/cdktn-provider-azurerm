# `dataAzurermCdnFrontdoorProfile` Submodule <a name="`dataAzurermCdnFrontdoorProfile` Submodule" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCdnFrontdoorProfile <a name="DataAzurermCdnFrontdoorProfile" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/cdn_frontdoor_profile azurerm_cdn_frontdoor_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

dataazurermcdnfrontdoorprofile.NewDataAzurermCdnFrontdoorProfile(scope Construct, id *string, config DataAzurermCdnFrontdoorProfileConfig) DataAzurermCdnFrontdoorProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig">DataAzurermCdnFrontdoorProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig">DataAzurermCdnFrontdoorProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermCdnFrontdoorProfileTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts">DataAzurermCdnFrontdoorProfileTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermCdnFrontdoorProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

dataazurermcdnfrontdoorprofile.DataAzurermCdnFrontdoorProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

dataazurermcdnfrontdoorprofile.DataAzurermCdnFrontdoorProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

dataazurermcdnfrontdoorprofile.DataAzurermCdnFrontdoorProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

dataazurermcdnfrontdoorprofile.DataAzurermCdnFrontdoorProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermCdnFrontdoorProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermCdnFrontdoorProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermCdnFrontdoorProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/cdn_frontdoor_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermCdnFrontdoorProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList">DataAzurermCdnFrontdoorProfileIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.logScrubbingRule">LogScrubbingRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList">DataAzurermCdnFrontdoorProfileLogScrubbingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.resourceGuid">ResourceGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.responseTimeoutSeconds">ResponseTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference">DataAzurermCdnFrontdoorProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.identity"></a>

```go
func Identity() DataAzurermCdnFrontdoorProfileIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList">DataAzurermCdnFrontdoorProfileIdentityList</a>

---

##### `LogScrubbingRule`<sup>Required</sup> <a name="LogScrubbingRule" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.logScrubbingRule"></a>

```go
func LogScrubbingRule() DataAzurermCdnFrontdoorProfileLogScrubbingRuleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList">DataAzurermCdnFrontdoorProfileLogScrubbingRuleList</a>

---

##### `ResourceGuid`<sup>Required</sup> <a name="ResourceGuid" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.resourceGuid"></a>

```go
func ResourceGuid() *string
```

- *Type:* *string

---

##### `ResponseTimeoutSeconds`<sup>Required</sup> <a name="ResponseTimeoutSeconds" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.responseTimeoutSeconds"></a>

```go
func ResponseTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.timeouts"></a>

```go
func Timeouts() DataAzurermCdnFrontdoorProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference">DataAzurermCdnFrontdoorProfileTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCdnFrontdoorProfileConfig <a name="DataAzurermCdnFrontdoorProfileConfig" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

&dataazurermcdnfrontdoorprofile.DataAzurermCdnFrontdoorProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/cdn_frontdoor_profile#name DataAzurermCdnFrontdoorProfile#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/cdn_frontdoor_profile#resource_group_name DataAzurermCdnFrontdoorProfile#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/cdn_frontdoor_profile#id DataAzurermCdnFrontdoorProfile#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts">DataAzurermCdnFrontdoorProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/cdn_frontdoor_profile#name DataAzurermCdnFrontdoorProfile#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/cdn_frontdoor_profile#resource_group_name DataAzurermCdnFrontdoorProfile#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/cdn_frontdoor_profile#id DataAzurermCdnFrontdoorProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileConfig.property.timeouts"></a>

```go
Timeouts DataAzurermCdnFrontdoorProfileTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts">DataAzurermCdnFrontdoorProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/cdn_frontdoor_profile#timeouts DataAzurermCdnFrontdoorProfile#timeouts}

---

### DataAzurermCdnFrontdoorProfileIdentity <a name="DataAzurermCdnFrontdoorProfileIdentity" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

&dataazurermcdnfrontdoorprofile.DataAzurermCdnFrontdoorProfileIdentity {

}
```


### DataAzurermCdnFrontdoorProfileLogScrubbingRule <a name="DataAzurermCdnFrontdoorProfileLogScrubbingRule" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

&dataazurermcdnfrontdoorprofile.DataAzurermCdnFrontdoorProfileLogScrubbingRule {

}
```


### DataAzurermCdnFrontdoorProfileTimeouts <a name="DataAzurermCdnFrontdoorProfileTimeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

&dataazurermcdnfrontdoorprofile.DataAzurermCdnFrontdoorProfileTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/cdn_frontdoor_profile#read DataAzurermCdnFrontdoorProfile#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/cdn_frontdoor_profile#read DataAzurermCdnFrontdoorProfile#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCdnFrontdoorProfileIdentityList <a name="DataAzurermCdnFrontdoorProfileIdentityList" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

dataazurermcdnfrontdoorprofile.NewDataAzurermCdnFrontdoorProfileIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermCdnFrontdoorProfileIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermCdnFrontdoorProfileIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermCdnFrontdoorProfileIdentityOutputReference <a name="DataAzurermCdnFrontdoorProfileIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

dataazurermcdnfrontdoorprofile.NewDataAzurermCdnFrontdoorProfileIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermCdnFrontdoorProfileIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentity">DataAzurermCdnFrontdoorProfileIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermCdnFrontdoorProfileIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileIdentity">DataAzurermCdnFrontdoorProfileIdentity</a>

---


### DataAzurermCdnFrontdoorProfileLogScrubbingRuleList <a name="DataAzurermCdnFrontdoorProfileLogScrubbingRuleList" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

dataazurermcdnfrontdoorprofile.NewDataAzurermCdnFrontdoorProfileLogScrubbingRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermCdnFrontdoorProfileLogScrubbingRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.get"></a>

```go
func Get(index *f64) DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference <a name="DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

dataazurermcdnfrontdoorprofile.NewDataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.matchVariable">MatchVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRule">DataAzurermCdnFrontdoorProfileLogScrubbingRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchVariable`<sup>Required</sup> <a name="MatchVariable" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.matchVariable"></a>

```go
func MatchVariable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermCdnFrontdoorProfileLogScrubbingRule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileLogScrubbingRule">DataAzurermCdnFrontdoorProfileLogScrubbingRule</a>

---


### DataAzurermCdnFrontdoorProfileTimeoutsOutputReference <a name="DataAzurermCdnFrontdoorProfileTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermcdnfrontdoorprofile"

dataazurermcdnfrontdoorprofile.NewDataAzurermCdnFrontdoorProfileTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermCdnFrontdoorProfileTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorProfile.DataAzurermCdnFrontdoorProfileTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



