# `dataAzurermKubernetesAutomaticCluster` Submodule <a name="`dataAzurermKubernetesAutomaticCluster` Submodule" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKubernetesAutomaticCluster <a name="DataAzurermKubernetesAutomaticCluster" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_automatic_cluster azurerm_kubernetes_automatic_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticCluster(scope Construct, id *string, config DataAzurermKubernetesAutomaticClusterConfig) DataAzurermKubernetesAutomaticCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig">DataAzurermKubernetesAutomaticClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig">DataAzurermKubernetesAutomaticClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermKubernetesAutomaticClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermKubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticCluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermKubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermKubernetesAutomaticCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermKubernetesAutomaticCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_automatic_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermKubernetesAutomaticCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.apiServerAccess">ApiServerAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList">DataAzurermKubernetesAutomaticClusterApiServerAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.currentKubernetesVersion">CurrentKubernetesVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.dnsPrefix">DnsPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.fullyQualifiedDomainName">FullyQualifiedDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.hostedSystem">HostedSystem</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList">DataAzurermKubernetesAutomaticClusterHostedSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList">DataAzurermKubernetesAutomaticClusterIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeConfig">KubeConfig</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList">DataAzurermKubernetesAutomaticClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeConfigRaw">KubeConfigRaw</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeletIdentity">KubeletIdentity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList">DataAzurermKubernetesAutomaticClusterKubeletIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubernetesVersion">KubernetesVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nodeResourceGroup">NodeResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nodeResourceGroupId">NodeResourceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.portalFullyQualifiedDomainName">PortalFullyQualifiedDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.privateCluster">PrivateCluster</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList">DataAzurermKubernetesAutomaticClusterPrivateClusterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.privateFullyQualifiedDomainName">PrivateFullyQualifiedDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.serviceMesh">ServiceMesh</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList">DataAzurermKubernetesAutomaticClusterServiceMeshList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference">DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.webAppRoutingIngress">WebAppRoutingIngress</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApiServerAccess`<sup>Required</sup> <a name="ApiServerAccess" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.apiServerAccess"></a>

```go
func ApiServerAccess() DataAzurermKubernetesAutomaticClusterApiServerAccessList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList">DataAzurermKubernetesAutomaticClusterApiServerAccessList</a>

---

##### `CurrentKubernetesVersion`<sup>Required</sup> <a name="CurrentKubernetesVersion" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.currentKubernetesVersion"></a>

```go
func CurrentKubernetesVersion() *string
```

- *Type:* *string

---

##### `DnsPrefix`<sup>Required</sup> <a name="DnsPrefix" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.dnsPrefix"></a>

```go
func DnsPrefix() *string
```

- *Type:* *string

---

##### `FullyQualifiedDomainName`<sup>Required</sup> <a name="FullyQualifiedDomainName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.fullyQualifiedDomainName"></a>

```go
func FullyQualifiedDomainName() *string
```

- *Type:* *string

---

##### `HostedSystem`<sup>Required</sup> <a name="HostedSystem" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.hostedSystem"></a>

```go
func HostedSystem() DataAzurermKubernetesAutomaticClusterHostedSystemList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList">DataAzurermKubernetesAutomaticClusterHostedSystemList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.identity"></a>

```go
func Identity() DataAzurermKubernetesAutomaticClusterIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList">DataAzurermKubernetesAutomaticClusterIdentityList</a>

---

##### `KubeConfig`<sup>Required</sup> <a name="KubeConfig" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeConfig"></a>

```go
func KubeConfig() DataAzurermKubernetesAutomaticClusterKubeConfigList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList">DataAzurermKubernetesAutomaticClusterKubeConfigList</a>

---

##### `KubeConfigRaw`<sup>Required</sup> <a name="KubeConfigRaw" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeConfigRaw"></a>

```go
func KubeConfigRaw() *string
```

- *Type:* *string

---

##### `KubeletIdentity`<sup>Required</sup> <a name="KubeletIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeletIdentity"></a>

```go
func KubeletIdentity() DataAzurermKubernetesAutomaticClusterKubeletIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList">DataAzurermKubernetesAutomaticClusterKubeletIdentityList</a>

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubernetesVersion"></a>

```go
func KubernetesVersion() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NodeResourceGroup`<sup>Required</sup> <a name="NodeResourceGroup" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nodeResourceGroup"></a>

```go
func NodeResourceGroup() *string
```

- *Type:* *string

---

##### `NodeResourceGroupId`<sup>Required</sup> <a name="NodeResourceGroupId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nodeResourceGroupId"></a>

```go
func NodeResourceGroupId() *string
```

- *Type:* *string

---

##### `PortalFullyQualifiedDomainName`<sup>Required</sup> <a name="PortalFullyQualifiedDomainName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.portalFullyQualifiedDomainName"></a>

```go
func PortalFullyQualifiedDomainName() *string
```

- *Type:* *string

---

##### `PrivateCluster`<sup>Required</sup> <a name="PrivateCluster" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.privateCluster"></a>

```go
func PrivateCluster() DataAzurermKubernetesAutomaticClusterPrivateClusterList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList">DataAzurermKubernetesAutomaticClusterPrivateClusterList</a>

---

##### `PrivateFullyQualifiedDomainName`<sup>Required</sup> <a name="PrivateFullyQualifiedDomainName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.privateFullyQualifiedDomainName"></a>

```go
func PrivateFullyQualifiedDomainName() *string
```

- *Type:* *string

---

##### `ServiceMesh`<sup>Required</sup> <a name="ServiceMesh" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.serviceMesh"></a>

```go
func ServiceMesh() DataAzurermKubernetesAutomaticClusterServiceMeshList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList">DataAzurermKubernetesAutomaticClusterServiceMeshList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.timeouts"></a>

```go
func Timeouts() DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference">DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference</a>

---

##### `WebAppRoutingIngress`<sup>Required</sup> <a name="WebAppRoutingIngress" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.webAppRoutingIngress"></a>

```go
func WebAppRoutingIngress() DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKubernetesAutomaticClusterApiServerAccess <a name="DataAzurermKubernetesAutomaticClusterApiServerAccess" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

&dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticClusterApiServerAccess {

}
```


### DataAzurermKubernetesAutomaticClusterConfig <a name="DataAzurermKubernetesAutomaticClusterConfig" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

&dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticClusterConfig {
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
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_automatic_cluster#name DataAzurermKubernetesAutomaticCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_automatic_cluster#resource_group_name DataAzurermKubernetesAutomaticCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_automatic_cluster#id DataAzurermKubernetesAutomaticCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_automatic_cluster#name DataAzurermKubernetesAutomaticCluster#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_automatic_cluster#resource_group_name DataAzurermKubernetesAutomaticCluster#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_automatic_cluster#id DataAzurermKubernetesAutomaticCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.timeouts"></a>

```go
Timeouts DataAzurermKubernetesAutomaticClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_automatic_cluster#timeouts DataAzurermKubernetesAutomaticCluster#timeouts}

---

### DataAzurermKubernetesAutomaticClusterHostedSystem <a name="DataAzurermKubernetesAutomaticClusterHostedSystem" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

&dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticClusterHostedSystem {

}
```


### DataAzurermKubernetesAutomaticClusterIdentity <a name="DataAzurermKubernetesAutomaticClusterIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

&dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticClusterIdentity {

}
```


### DataAzurermKubernetesAutomaticClusterKubeConfig <a name="DataAzurermKubernetesAutomaticClusterKubeConfig" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

&dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticClusterKubeConfig {

}
```


### DataAzurermKubernetesAutomaticClusterKubeletIdentity <a name="DataAzurermKubernetesAutomaticClusterKubeletIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

&dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity {

}
```


### DataAzurermKubernetesAutomaticClusterPrivateCluster <a name="DataAzurermKubernetesAutomaticClusterPrivateCluster" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

&dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticClusterPrivateCluster {

}
```


### DataAzurermKubernetesAutomaticClusterServiceMesh <a name="DataAzurermKubernetesAutomaticClusterServiceMesh" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

&dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticClusterServiceMesh {

}
```


### DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority <a name="DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

&dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority {

}
```


### DataAzurermKubernetesAutomaticClusterTimeouts <a name="DataAzurermKubernetesAutomaticClusterTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

&dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticClusterTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_automatic_cluster#read DataAzurermKubernetesAutomaticCluster#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_automatic_cluster#read DataAzurermKubernetesAutomaticCluster#read}.

---

### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

&dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress {

}
```


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

&dataazurermkubernetesautomaticcluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKubernetesAutomaticClusterApiServerAccessList <a name="DataAzurermKubernetesAutomaticClusterApiServerAccessList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterApiServerAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKubernetesAutomaticClusterApiServerAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.get"></a>

```go
func Get(index *f64) DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference <a name="DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRanges">AuthorizedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess">DataAzurermKubernetesAutomaticClusterApiServerAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizedIpRanges`<sup>Required</sup> <a name="AuthorizedIpRanges" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRanges"></a>

```go
func AuthorizedIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKubernetesAutomaticClusterApiServerAccess
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess">DataAzurermKubernetesAutomaticClusterApiServerAccess</a>

---


### DataAzurermKubernetesAutomaticClusterHostedSystemList <a name="DataAzurermKubernetesAutomaticClusterHostedSystemList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterHostedSystemList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKubernetesAutomaticClusterHostedSystemList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.get"></a>

```go
func Get(index *f64) DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference <a name="DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterHostedSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetId">NodeSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetId">SystemNodeSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem">DataAzurermKubernetesAutomaticClusterHostedSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeSubnetId`<sup>Required</sup> <a name="NodeSubnetId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetId"></a>

```go
func NodeSubnetId() *string
```

- *Type:* *string

---

##### `SystemNodeSubnetId`<sup>Required</sup> <a name="SystemNodeSubnetId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetId"></a>

```go
func SystemNodeSubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKubernetesAutomaticClusterHostedSystem
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem">DataAzurermKubernetesAutomaticClusterHostedSystem</a>

---


### DataAzurermKubernetesAutomaticClusterIdentityList <a name="DataAzurermKubernetesAutomaticClusterIdentityList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKubernetesAutomaticClusterIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermKubernetesAutomaticClusterIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKubernetesAutomaticClusterIdentityOutputReference <a name="DataAzurermKubernetesAutomaticClusterIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKubernetesAutomaticClusterIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity">DataAzurermKubernetesAutomaticClusterIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKubernetesAutomaticClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity">DataAzurermKubernetesAutomaticClusterIdentity</a>

---


### DataAzurermKubernetesAutomaticClusterKubeConfigList <a name="DataAzurermKubernetesAutomaticClusterKubeConfigList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterKubeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKubernetesAutomaticClusterKubeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.get"></a>

```go
func Get(index *f64) DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference <a name="DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterKubeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig">DataAzurermKubernetesAutomaticClusterKubeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `ClusterCaCertificate`<sup>Required</sup> <a name="ClusterCaCertificate" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```go
func ClusterCaCertificate() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKubernetesAutomaticClusterKubeConfig
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig">DataAzurermKubernetesAutomaticClusterKubeConfig</a>

---


### DataAzurermKubernetesAutomaticClusterKubeletIdentityList <a name="DataAzurermKubernetesAutomaticClusterKubeletIdentityList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterKubeletIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKubernetesAutomaticClusterKubeletIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference <a name="DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity">DataAzurermKubernetesAutomaticClusterKubeletIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.userAssignedIdentityId"></a>

```go
func UserAssignedIdentityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKubernetesAutomaticClusterKubeletIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity">DataAzurermKubernetesAutomaticClusterKubeletIdentity</a>

---


### DataAzurermKubernetesAutomaticClusterPrivateClusterList <a name="DataAzurermKubernetesAutomaticClusterPrivateClusterList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterPrivateClusterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKubernetesAutomaticClusterPrivateClusterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.get"></a>

```go
func Get(index *f64) DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference <a name="DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneId">PrivateDnsZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabled">PublicFullyQualifiedDomainNameEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster">DataAzurermKubernetesAutomaticClusterPrivateCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateDnsZoneId`<sup>Required</sup> <a name="PrivateDnsZoneId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneId"></a>

```go
func PrivateDnsZoneId() *string
```

- *Type:* *string

---

##### `PublicFullyQualifiedDomainNameEnabled`<sup>Required</sup> <a name="PublicFullyQualifiedDomainNameEnabled" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabled"></a>

```go
func PublicFullyQualifiedDomainNameEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKubernetesAutomaticClusterPrivateCluster
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster">DataAzurermKubernetesAutomaticClusterPrivateCluster</a>

---


### DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList <a name="DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.get"></a>

```go
func Get(index *f64) DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference <a name="DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectName">CertificateChainObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectName">CertificateObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectName">KeyObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectName">RootCertificateObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority">DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateChainObjectName`<sup>Required</sup> <a name="CertificateChainObjectName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectName"></a>

```go
func CertificateChainObjectName() *string
```

- *Type:* *string

---

##### `CertificateObjectName`<sup>Required</sup> <a name="CertificateObjectName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectName"></a>

```go
func CertificateObjectName() *string
```

- *Type:* *string

---

##### `KeyObjectName`<sup>Required</sup> <a name="KeyObjectName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectName"></a>

```go
func KeyObjectName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `RootCertificateObjectName`<sup>Required</sup> <a name="RootCertificateObjectName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectName"></a>

```go
func RootCertificateObjectName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority">DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

---


### DataAzurermKubernetesAutomaticClusterServiceMeshList <a name="DataAzurermKubernetesAutomaticClusterServiceMeshList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterServiceMeshList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKubernetesAutomaticClusterServiceMeshList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.get"></a>

```go
func Get(index *f64) DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference <a name="DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterServiceMeshOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthority">CertificateAuthority</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList">DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabled">ExternalIngressGatewayEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabled">InternalIngressGatewayEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanism">ProxyRedirectMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.revisions">Revisions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh">DataAzurermKubernetesAutomaticClusterServiceMesh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthority"></a>

```go
func CertificateAuthority() DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList">DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList</a>

---

##### `ExternalIngressGatewayEnabled`<sup>Required</sup> <a name="ExternalIngressGatewayEnabled" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabled"></a>

```go
func ExternalIngressGatewayEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalIngressGatewayEnabled`<sup>Required</sup> <a name="InternalIngressGatewayEnabled" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabled"></a>

```go
func InternalIngressGatewayEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ProxyRedirectMechanism`<sup>Required</sup> <a name="ProxyRedirectMechanism" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanism"></a>

```go
func ProxyRedirectMechanism() *string
```

- *Type:* *string

---

##### `Revisions`<sup>Required</sup> <a name="Revisions" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.revisions"></a>

```go
func Revisions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKubernetesAutomaticClusterServiceMesh
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh">DataAzurermKubernetesAutomaticClusterServiceMesh</a>

---


### DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference <a name="DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.get"></a>

```go
func Get(index *f64) DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxController">DefaultNginxController</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIds">DnsZoneIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabled">IstioEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.webAppRoutingIdentity">WebAppRoutingIdentity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultNginxController`<sup>Required</sup> <a name="DefaultNginxController" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxController"></a>

```go
func DefaultNginxController() *string
```

- *Type:* *string

---

##### `DnsZoneIds`<sup>Required</sup> <a name="DnsZoneIds" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIds"></a>

```go
func DnsZoneIds() *[]*string
```

- *Type:* *[]*string

---

##### `IstioEnabled`<sup>Required</sup> <a name="IstioEnabled" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabled"></a>

```go
func IstioEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `WebAppRoutingIdentity`<sup>Required</sup> <a name="WebAppRoutingIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.webAppRoutingIdentity"></a>

```go
func WebAppRoutingIdentity() DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress</a>

---


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermkubernetesautomaticcluster"

dataazurermkubernetesautomaticcluster.NewDataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.userAssignedIdentityId"></a>

```go
func UserAssignedIdentityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity</a>

---



