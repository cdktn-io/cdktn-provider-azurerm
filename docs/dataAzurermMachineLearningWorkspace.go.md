# `dataAzurermMachineLearningWorkspace` Submodule <a name="`dataAzurermMachineLearningWorkspace` Submodule" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMachineLearningWorkspace <a name="DataAzurermMachineLearningWorkspace" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/machine_learning_workspace azurerm_machine_learning_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmachinelearningworkspace"

dataazurermmachinelearningworkspace.NewDataAzurermMachineLearningWorkspace(scope Construct, id *string, config DataAzurermMachineLearningWorkspaceConfig) DataAzurermMachineLearningWorkspace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig">DataAzurermMachineLearningWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig">DataAzurermMachineLearningWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermMachineLearningWorkspaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeouts">DataAzurermMachineLearningWorkspaceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermMachineLearningWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmachinelearningworkspace"

dataazurermmachinelearningworkspace.DataAzurermMachineLearningWorkspace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmachinelearningworkspace"

dataazurermmachinelearningworkspace.DataAzurermMachineLearningWorkspace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmachinelearningworkspace"

dataazurermmachinelearningworkspace.DataAzurermMachineLearningWorkspace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmachinelearningworkspace"

dataazurermmachinelearningworkspace.DataAzurermMachineLearningWorkspace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermMachineLearningWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermMachineLearningWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermMachineLearningWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/machine_learning_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermMachineLearningWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList">DataAzurermMachineLearningWorkspaceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.storageAccountAccessType">StorageAccountAccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference">DataAzurermMachineLearningWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.identity"></a>

```go
func Identity() DataAzurermMachineLearningWorkspaceIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList">DataAzurermMachineLearningWorkspaceIdentityList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `StorageAccountAccessType`<sup>Required</sup> <a name="StorageAccountAccessType" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.storageAccountAccessType"></a>

```go
func StorageAccountAccessType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.timeouts"></a>

```go
func Timeouts() DataAzurermMachineLearningWorkspaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference">DataAzurermMachineLearningWorkspaceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMachineLearningWorkspaceConfig <a name="DataAzurermMachineLearningWorkspaceConfig" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmachinelearningworkspace"

&dataazurermmachinelearningworkspace.DataAzurermMachineLearningWorkspaceConfig {
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
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/machine_learning_workspace#name DataAzurermMachineLearningWorkspace#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/machine_learning_workspace#resource_group_name DataAzurermMachineLearningWorkspace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/machine_learning_workspace#id DataAzurermMachineLearningWorkspace#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeouts">DataAzurermMachineLearningWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/machine_learning_workspace#name DataAzurermMachineLearningWorkspace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/machine_learning_workspace#resource_group_name DataAzurermMachineLearningWorkspace#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/machine_learning_workspace#id DataAzurermMachineLearningWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceConfig.property.timeouts"></a>

```go
Timeouts DataAzurermMachineLearningWorkspaceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeouts">DataAzurermMachineLearningWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/machine_learning_workspace#timeouts DataAzurermMachineLearningWorkspace#timeouts}

---

### DataAzurermMachineLearningWorkspaceIdentity <a name="DataAzurermMachineLearningWorkspaceIdentity" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmachinelearningworkspace"

&dataazurermmachinelearningworkspace.DataAzurermMachineLearningWorkspaceIdentity {

}
```


### DataAzurermMachineLearningWorkspaceTimeouts <a name="DataAzurermMachineLearningWorkspaceTimeouts" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmachinelearningworkspace"

&dataazurermmachinelearningworkspace.DataAzurermMachineLearningWorkspaceTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/machine_learning_workspace#read DataAzurermMachineLearningWorkspace#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/machine_learning_workspace#read DataAzurermMachineLearningWorkspace#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMachineLearningWorkspaceIdentityList <a name="DataAzurermMachineLearningWorkspaceIdentityList" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmachinelearningworkspace"

dataazurermmachinelearningworkspace.NewDataAzurermMachineLearningWorkspaceIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermMachineLearningWorkspaceIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermMachineLearningWorkspaceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermMachineLearningWorkspaceIdentityOutputReference <a name="DataAzurermMachineLearningWorkspaceIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmachinelearningworkspace"

dataazurermmachinelearningworkspace.NewDataAzurermMachineLearningWorkspaceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermMachineLearningWorkspaceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentity">DataAzurermMachineLearningWorkspaceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermMachineLearningWorkspaceIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceIdentity">DataAzurermMachineLearningWorkspaceIdentity</a>

---


### DataAzurermMachineLearningWorkspaceTimeoutsOutputReference <a name="DataAzurermMachineLearningWorkspaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmachinelearningworkspace"

dataazurermmachinelearningworkspace.NewDataAzurermMachineLearningWorkspaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermMachineLearningWorkspaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermMachineLearningWorkspace.DataAzurermMachineLearningWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



