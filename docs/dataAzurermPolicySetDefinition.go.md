# `dataAzurermPolicySetDefinition` Submodule <a name="`dataAzurermPolicySetDefinition` Submodule" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPolicySetDefinition <a name="DataAzurermPolicySetDefinition" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition azurerm_policy_set_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

dataazurermpolicysetdefinition.NewDataAzurermPolicySetDefinition(scope Construct, id *string, config DataAzurermPolicySetDefinitionConfig) DataAzurermPolicySetDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig">DataAzurermPolicySetDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig">DataAzurermPolicySetDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetManagementGroupName">ResetManagementGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermPolicySetDefinitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts">DataAzurermPolicySetDefinitionTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetManagementGroupName` <a name="ResetManagementGroupName" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetManagementGroupName"></a>

```go
func ResetManagementGroupName()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetName"></a>

```go
func ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermPolicySetDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

dataazurermpolicysetdefinition.DataAzurermPolicySetDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

dataazurermpolicysetdefinition.DataAzurermPolicySetDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

dataazurermpolicysetdefinition.DataAzurermPolicySetDefinition_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

dataazurermpolicysetdefinition.DataAzurermPolicySetDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermPolicySetDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermPolicySetDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermPolicySetDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermPolicySetDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyDefinitionGroup">PolicyDefinitionGroup</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList">DataAzurermPolicySetDefinitionPolicyDefinitionGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyDefinitionReference">PolicyDefinitionReference</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList">DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyDefinitions">PolicyDefinitions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference">DataAzurermPolicySetDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.managementGroupNameInput">ManagementGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.managementGroupName">ManagementGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `PolicyDefinitionGroup`<sup>Required</sup> <a name="PolicyDefinitionGroup" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyDefinitionGroup"></a>

```go
func PolicyDefinitionGroup() DataAzurermPolicySetDefinitionPolicyDefinitionGroupList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList">DataAzurermPolicySetDefinitionPolicyDefinitionGroupList</a>

---

##### `PolicyDefinitionReference`<sup>Required</sup> <a name="PolicyDefinitionReference" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyDefinitionReference"></a>

```go
func PolicyDefinitionReference() DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList">DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList</a>

---

##### `PolicyDefinitions`<sup>Required</sup> <a name="PolicyDefinitions" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyDefinitions"></a>

```go
func PolicyDefinitions() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.timeouts"></a>

```go
func Timeouts() DataAzurermPolicySetDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference">DataAzurermPolicySetDefinitionTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagementGroupNameInput`<sup>Optional</sup> <a name="ManagementGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.managementGroupNameInput"></a>

```go
func ManagementGroupNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagementGroupName`<sup>Required</sup> <a name="ManagementGroupName" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.managementGroupName"></a>

```go
func ManagementGroupName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPolicySetDefinitionConfig <a name="DataAzurermPolicySetDefinitionConfig" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

&dataazurermpolicysetdefinition.DataAzurermPolicySetDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Id: *string,
	ManagementGroupName: *string,
	Name: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition#display_name DataAzurermPolicySetDefinition#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition#id DataAzurermPolicySetDefinition#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.managementGroupName">ManagementGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition#management_group_name DataAzurermPolicySetDefinition#management_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition#name DataAzurermPolicySetDefinition#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts">DataAzurermPolicySetDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition#display_name DataAzurermPolicySetDefinition#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition#id DataAzurermPolicySetDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagementGroupName`<sup>Optional</sup> <a name="ManagementGroupName" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.managementGroupName"></a>

```go
ManagementGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition#management_group_name DataAzurermPolicySetDefinition#management_group_name}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition#name DataAzurermPolicySetDefinition#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionConfig.property.timeouts"></a>

```go
Timeouts DataAzurermPolicySetDefinitionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts">DataAzurermPolicySetDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition#timeouts DataAzurermPolicySetDefinition#timeouts}

---

### DataAzurermPolicySetDefinitionPolicyDefinitionGroup <a name="DataAzurermPolicySetDefinitionPolicyDefinitionGroup" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

&dataazurermpolicysetdefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroup {

}
```


### DataAzurermPolicySetDefinitionPolicyDefinitionReference <a name="DataAzurermPolicySetDefinitionPolicyDefinitionReference" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

&dataazurermpolicysetdefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReference {

}
```


### DataAzurermPolicySetDefinitionTimeouts <a name="DataAzurermPolicySetDefinitionTimeouts" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

&dataazurermpolicysetdefinition.DataAzurermPolicySetDefinitionTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition#read DataAzurermPolicySetDefinition#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/policy_set_definition#read DataAzurermPolicySetDefinition#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPolicySetDefinitionPolicyDefinitionGroupList <a name="DataAzurermPolicySetDefinitionPolicyDefinitionGroupList" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

dataazurermpolicysetdefinition.NewDataAzurermPolicySetDefinitionPolicyDefinitionGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermPolicySetDefinitionPolicyDefinitionGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.get"></a>

```go
func Get(index *f64) DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference <a name="DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

dataazurermpolicysetdefinition.NewDataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId">AdditionalMetadataResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroup">DataAzurermPolicySetDefinitionPolicyDefinitionGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalMetadataResourceId`<sup>Required</sup> <a name="AdditionalMetadataResourceId" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.additionalMetadataResourceId"></a>

```go
func AdditionalMetadataResourceId() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermPolicySetDefinitionPolicyDefinitionGroup
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionGroup">DataAzurermPolicySetDefinitionPolicyDefinitionGroup</a>

---


### DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList <a name="DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

dataazurermpolicysetdefinition.NewDataAzurermPolicySetDefinitionPolicyDefinitionReferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.get"></a>

```go
func Get(index *f64) DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference <a name="DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

dataazurermpolicysetdefinition.NewDataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameters">Parameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues">ParameterValues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames">PolicyGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId">ReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReference">DataAzurermPolicySetDefinitionPolicyDefinitionReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ParameterValues`<sup>Required</sup> <a name="ParameterValues" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.parameterValues"></a>

```go
func ParameterValues() *string
```

- *Type:* *string

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyDefinitionId"></a>

```go
func PolicyDefinitionId() *string
```

- *Type:* *string

---

##### `PolicyGroupNames`<sup>Required</sup> <a name="PolicyGroupNames" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.policyGroupNames"></a>

```go
func PolicyGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `ReferenceId`<sup>Required</sup> <a name="ReferenceId" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.referenceId"></a>

```go
func ReferenceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermPolicySetDefinitionPolicyDefinitionReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionPolicyDefinitionReference">DataAzurermPolicySetDefinitionPolicyDefinitionReference</a>

---


### DataAzurermPolicySetDefinitionTimeoutsOutputReference <a name="DataAzurermPolicySetDefinitionTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermpolicysetdefinition"

dataazurermpolicysetdefinition.NewDataAzurermPolicySetDefinitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermPolicySetDefinitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermPolicySetDefinition.DataAzurermPolicySetDefinitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



