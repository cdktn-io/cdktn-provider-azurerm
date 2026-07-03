# `dataAzurermDevCenterProjectEnvironmentType` Submodule <a name="`dataAzurermDevCenterProjectEnvironmentType` Submodule" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDevCenterProjectEnvironmentType <a name="DataAzurermDevCenterProjectEnvironmentType" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/dev_center_project_environment_type azurerm_dev_center_project_environment_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

dataazurermdevcenterprojectenvironmenttype.NewDataAzurermDevCenterProjectEnvironmentType(scope Construct, id *string, config DataAzurermDevCenterProjectEnvironmentTypeConfig) DataAzurermDevCenterProjectEnvironmentType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig">DataAzurermDevCenterProjectEnvironmentTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig">DataAzurermDevCenterProjectEnvironmentTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermDevCenterProjectEnvironmentTypeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts">DataAzurermDevCenterProjectEnvironmentTypeTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermDevCenterProjectEnvironmentType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

dataazurermdevcenterprojectenvironmenttype.DataAzurermDevCenterProjectEnvironmentType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

dataazurermdevcenterprojectenvironmenttype.DataAzurermDevCenterProjectEnvironmentType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

dataazurermdevcenterprojectenvironmenttype.DataAzurermDevCenterProjectEnvironmentType_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

dataazurermdevcenterprojectenvironmenttype.DataAzurermDevCenterProjectEnvironmentType_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermDevCenterProjectEnvironmentType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermDevCenterProjectEnvironmentType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermDevCenterProjectEnvironmentType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/dev_center_project_environment_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermDevCenterProjectEnvironmentType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.creatorRoleAssignmentRoles">CreatorRoleAssignmentRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.deploymentTargetId">DeploymentTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList">DataAzurermDevCenterProjectEnvironmentTypeIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference">DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.userRoleAssignment">UserRoleAssignment</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList">DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.devCenterProjectIdInput">DevCenterProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.devCenterProjectId">DevCenterProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatorRoleAssignmentRoles`<sup>Required</sup> <a name="CreatorRoleAssignmentRoles" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.creatorRoleAssignmentRoles"></a>

```go
func CreatorRoleAssignmentRoles() *[]*string
```

- *Type:* *[]*string

---

##### `DeploymentTargetId`<sup>Required</sup> <a name="DeploymentTargetId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.deploymentTargetId"></a>

```go
func DeploymentTargetId() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.identity"></a>

```go
func Identity() DataAzurermDevCenterProjectEnvironmentTypeIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList">DataAzurermDevCenterProjectEnvironmentTypeIdentityList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.timeouts"></a>

```go
func Timeouts() DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference">DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference</a>

---

##### `UserRoleAssignment`<sup>Required</sup> <a name="UserRoleAssignment" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.userRoleAssignment"></a>

```go
func UserRoleAssignment() DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList">DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList</a>

---

##### `DevCenterProjectIdInput`<sup>Optional</sup> <a name="DevCenterProjectIdInput" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.devCenterProjectIdInput"></a>

```go
func DevCenterProjectIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DevCenterProjectId`<sup>Required</sup> <a name="DevCenterProjectId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.devCenterProjectId"></a>

```go
func DevCenterProjectId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDevCenterProjectEnvironmentTypeConfig <a name="DataAzurermDevCenterProjectEnvironmentTypeConfig" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

&dataazurermdevcenterprojectenvironmenttype.DataAzurermDevCenterProjectEnvironmentTypeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DevCenterProjectId: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.devCenterProjectId">DevCenterProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/dev_center_project_environment_type#dev_center_project_id DataAzurermDevCenterProjectEnvironmentType#dev_center_project_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/dev_center_project_environment_type#name DataAzurermDevCenterProjectEnvironmentType#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/dev_center_project_environment_type#id DataAzurermDevCenterProjectEnvironmentType#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts">DataAzurermDevCenterProjectEnvironmentTypeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DevCenterProjectId`<sup>Required</sup> <a name="DevCenterProjectId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.devCenterProjectId"></a>

```go
DevCenterProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/dev_center_project_environment_type#dev_center_project_id DataAzurermDevCenterProjectEnvironmentType#dev_center_project_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/dev_center_project_environment_type#name DataAzurermDevCenterProjectEnvironmentType#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/dev_center_project_environment_type#id DataAzurermDevCenterProjectEnvironmentType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeConfig.property.timeouts"></a>

```go
Timeouts DataAzurermDevCenterProjectEnvironmentTypeTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts">DataAzurermDevCenterProjectEnvironmentTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/dev_center_project_environment_type#timeouts DataAzurermDevCenterProjectEnvironmentType#timeouts}

---

### DataAzurermDevCenterProjectEnvironmentTypeIdentity <a name="DataAzurermDevCenterProjectEnvironmentTypeIdentity" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

&dataazurermdevcenterprojectenvironmenttype.DataAzurermDevCenterProjectEnvironmentTypeIdentity {

}
```


### DataAzurermDevCenterProjectEnvironmentTypeTimeouts <a name="DataAzurermDevCenterProjectEnvironmentTypeTimeouts" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

&dataazurermdevcenterprojectenvironmenttype.DataAzurermDevCenterProjectEnvironmentTypeTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/dev_center_project_environment_type#read DataAzurermDevCenterProjectEnvironmentType#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/dev_center_project_environment_type#read DataAzurermDevCenterProjectEnvironmentType#read}.

---

### DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment <a name="DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

&dataazurermdevcenterprojectenvironmenttype.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDevCenterProjectEnvironmentTypeIdentityList <a name="DataAzurermDevCenterProjectEnvironmentTypeIdentityList" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

dataazurermdevcenterprojectenvironmenttype.NewDataAzurermDevCenterProjectEnvironmentTypeIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermDevCenterProjectEnvironmentTypeIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference <a name="DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

dataazurermdevcenterprojectenvironmenttype.NewDataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentity">DataAzurermDevCenterProjectEnvironmentTypeIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermDevCenterProjectEnvironmentTypeIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeIdentity">DataAzurermDevCenterProjectEnvironmentTypeIdentity</a>

---


### DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference <a name="DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

dataazurermdevcenterprojectenvironmenttype.NewDataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList <a name="DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

dataazurermdevcenterprojectenvironmenttype.NewDataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.get"></a>

```go
func Get(index *f64) DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference <a name="DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermdevcenterprojectenvironmenttype"

dataazurermdevcenterprojectenvironmenttype.NewDataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment">DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDevCenterProjectEnvironmentType.DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment">DataAzurermDevCenterProjectEnvironmentTypeUserRoleAssignment</a>

---



