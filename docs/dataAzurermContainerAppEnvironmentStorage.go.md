# `dataAzurermContainerAppEnvironmentStorage` Submodule <a name="`dataAzurermContainerAppEnvironmentStorage` Submodule" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermContainerAppEnvironmentStorage <a name="DataAzurermContainerAppEnvironmentStorage" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/container_app_environment_storage azurerm_container_app_environment_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcontainerappenvironmentstorage"

dataazurermcontainerappenvironmentstorage.NewDataAzurermContainerAppEnvironmentStorage(scope Construct, id *string, config DataAzurermContainerAppEnvironmentStorageConfig) DataAzurermContainerAppEnvironmentStorage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig">DataAzurermContainerAppEnvironmentStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig">DataAzurermContainerAppEnvironmentStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermContainerAppEnvironmentStorageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermContainerAppEnvironmentStorage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcontainerappenvironmentstorage"

dataazurermcontainerappenvironmentstorage.DataAzurermContainerAppEnvironmentStorage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcontainerappenvironmentstorage"

dataazurermcontainerappenvironmentstorage.DataAzurermContainerAppEnvironmentStorage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcontainerappenvironmentstorage"

dataazurermcontainerappenvironmentstorage.DataAzurermContainerAppEnvironmentStorage_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcontainerappenvironmentstorage"

dataazurermcontainerappenvironmentstorage.DataAzurermContainerAppEnvironmentStorage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermContainerAppEnvironmentStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermContainerAppEnvironmentStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermContainerAppEnvironmentStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/container_app_environment_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermContainerAppEnvironmentStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.accessMode">AccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.nfsServerUrl">NfsServerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.shareName">ShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference">DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.containerAppEnvironmentIdInput">ContainerAppEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.accessMode"></a>

```go
func AccessMode() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `NfsServerUrl`<sup>Required</sup> <a name="NfsServerUrl" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.nfsServerUrl"></a>

```go
func NfsServerUrl() *string
```

- *Type:* *string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.shareName"></a>

```go
func ShareName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.timeouts"></a>

```go
func Timeouts() DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference">DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference</a>

---

##### `ContainerAppEnvironmentIdInput`<sup>Optional</sup> <a name="ContainerAppEnvironmentIdInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.containerAppEnvironmentIdInput"></a>

```go
func ContainerAppEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.containerAppEnvironmentId"></a>

```go
func ContainerAppEnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermContainerAppEnvironmentStorageConfig <a name="DataAzurermContainerAppEnvironmentStorageConfig" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcontainerappenvironmentstorage"

&dataazurermcontainerappenvironmentstorage.DataAzurermContainerAppEnvironmentStorageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerAppEnvironmentId: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>*string</code> | The ID of the Container App Environment to which this storage belongs. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.name">Name</a></code> | <code>*string</code> | The name for this Container App Environment Storage. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/container_app_environment_storage#id DataAzurermContainerAppEnvironmentStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.containerAppEnvironmentId"></a>

```go
ContainerAppEnvironmentId *string
```

- *Type:* *string

The ID of the Container App Environment to which this storage belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/container_app_environment_storage#container_app_environment_id DataAzurermContainerAppEnvironmentStorage#container_app_environment_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this Container App Environment Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/container_app_environment_storage#name DataAzurermContainerAppEnvironmentStorage#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/container_app_environment_storage#id DataAzurermContainerAppEnvironmentStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.timeouts"></a>

```go
Timeouts DataAzurermContainerAppEnvironmentStorageTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/container_app_environment_storage#timeouts DataAzurermContainerAppEnvironmentStorage#timeouts}

---

### DataAzurermContainerAppEnvironmentStorageTimeouts <a name="DataAzurermContainerAppEnvironmentStorageTimeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcontainerappenvironmentstorage"

&dataazurermcontainerappenvironmentstorage.DataAzurermContainerAppEnvironmentStorageTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/container_app_environment_storage#read DataAzurermContainerAppEnvironmentStorage#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/container_app_environment_storage#read DataAzurermContainerAppEnvironmentStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference <a name="DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcontainerappenvironmentstorage"

dataazurermcontainerappenvironmentstorage.NewDataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



