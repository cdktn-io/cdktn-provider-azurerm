# `dataAzurermCognitiveAccountProject` Submodule <a name="`dataAzurermCognitiveAccountProject` Submodule" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCognitiveAccountProject <a name="DataAzurermCognitiveAccountProject" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project azurerm_cognitive_account_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcognitiveaccountproject"

dataazurermcognitiveaccountproject.NewDataAzurermCognitiveAccountProject(scope Construct, id *string, config DataAzurermCognitiveAccountProjectConfig) DataAzurermCognitiveAccountProject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig">DataAzurermCognitiveAccountProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig">DataAzurermCognitiveAccountProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermCognitiveAccountProjectTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeouts">DataAzurermCognitiveAccountProjectTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermCognitiveAccountProject resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcognitiveaccountproject"

dataazurermcognitiveaccountproject.DataAzurermCognitiveAccountProject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcognitiveaccountproject"

dataazurermcognitiveaccountproject.DataAzurermCognitiveAccountProject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcognitiveaccountproject"

dataazurermcognitiveaccountproject.DataAzurermCognitiveAccountProject_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcognitiveaccountproject"

dataazurermcognitiveaccountproject.DataAzurermCognitiveAccountProject_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermCognitiveAccountProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermCognitiveAccountProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermCognitiveAccountProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermCognitiveAccountProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.default">Default</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.endpoints">Endpoints</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList">DataAzurermCognitiveAccountProjectIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference">DataAzurermCognitiveAccountProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.cognitiveAccountNameInput">CognitiveAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.cognitiveAccountName">CognitiveAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.endpoints"></a>

```go
func Endpoints() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.identity"></a>

```go
func Identity() DataAzurermCognitiveAccountProjectIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList">DataAzurermCognitiveAccountProjectIdentityList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.timeouts"></a>

```go
func Timeouts() DataAzurermCognitiveAccountProjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference">DataAzurermCognitiveAccountProjectTimeoutsOutputReference</a>

---

##### `CognitiveAccountNameInput`<sup>Optional</sup> <a name="CognitiveAccountNameInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.cognitiveAccountNameInput"></a>

```go
func CognitiveAccountNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CognitiveAccountName`<sup>Required</sup> <a name="CognitiveAccountName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.cognitiveAccountName"></a>

```go
func CognitiveAccountName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCognitiveAccountProjectConfig <a name="DataAzurermCognitiveAccountProjectConfig" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcognitiveaccountproject"

&dataazurermcognitiveaccountproject.DataAzurermCognitiveAccountProjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CognitiveAccountName: *string,
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.cognitiveAccountName">CognitiveAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project#cognitive_account_name DataAzurermCognitiveAccountProject#cognitive_account_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project#name DataAzurermCognitiveAccountProject#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project#resource_group_name DataAzurermCognitiveAccountProject#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project#id DataAzurermCognitiveAccountProject#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeouts">DataAzurermCognitiveAccountProjectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CognitiveAccountName`<sup>Required</sup> <a name="CognitiveAccountName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.cognitiveAccountName"></a>

```go
CognitiveAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project#cognitive_account_name DataAzurermCognitiveAccountProject#cognitive_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project#name DataAzurermCognitiveAccountProject#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project#resource_group_name DataAzurermCognitiveAccountProject#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project#id DataAzurermCognitiveAccountProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectConfig.property.timeouts"></a>

```go
Timeouts DataAzurermCognitiveAccountProjectTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeouts">DataAzurermCognitiveAccountProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project#timeouts DataAzurermCognitiveAccountProject#timeouts}

---

### DataAzurermCognitiveAccountProjectIdentity <a name="DataAzurermCognitiveAccountProjectIdentity" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcognitiveaccountproject"

&dataazurermcognitiveaccountproject.DataAzurermCognitiveAccountProjectIdentity {

}
```


### DataAzurermCognitiveAccountProjectTimeouts <a name="DataAzurermCognitiveAccountProjectTimeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcognitiveaccountproject"

&dataazurermcognitiveaccountproject.DataAzurermCognitiveAccountProjectTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project#read DataAzurermCognitiveAccountProject#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cognitive_account_project#read DataAzurermCognitiveAccountProject#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCognitiveAccountProjectIdentityList <a name="DataAzurermCognitiveAccountProjectIdentityList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcognitiveaccountproject"

dataazurermcognitiveaccountproject.NewDataAzurermCognitiveAccountProjectIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermCognitiveAccountProjectIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermCognitiveAccountProjectIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermCognitiveAccountProjectIdentityOutputReference <a name="DataAzurermCognitiveAccountProjectIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcognitiveaccountproject"

dataazurermcognitiveaccountproject.NewDataAzurermCognitiveAccountProjectIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermCognitiveAccountProjectIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentity">DataAzurermCognitiveAccountProjectIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermCognitiveAccountProjectIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectIdentity">DataAzurermCognitiveAccountProjectIdentity</a>

---


### DataAzurermCognitiveAccountProjectTimeoutsOutputReference <a name="DataAzurermCognitiveAccountProjectTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcognitiveaccountproject"

dataazurermcognitiveaccountproject.NewDataAzurermCognitiveAccountProjectTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermCognitiveAccountProjectTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccountProject.DataAzurermCognitiveAccountProjectTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



