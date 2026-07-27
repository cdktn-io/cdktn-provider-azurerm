# `dataAzurermVirtualDesktopHostPool` Submodule <a name="`dataAzurermVirtualDesktopHostPool` Submodule" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVirtualDesktopHostPool <a name="DataAzurermVirtualDesktopHostPool" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/virtual_desktop_host_pool azurerm_virtual_desktop_host_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

dataazurermvirtualdesktophostpool.NewDataAzurermVirtualDesktopHostPool(scope Construct, id *string, config DataAzurermVirtualDesktopHostPoolConfig) DataAzurermVirtualDesktopHostPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig">DataAzurermVirtualDesktopHostPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig">DataAzurermVirtualDesktopHostPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermVirtualDesktopHostPoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermVirtualDesktopHostPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

dataazurermvirtualdesktophostpool.DataAzurermVirtualDesktopHostPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

dataazurermvirtualdesktophostpool.DataAzurermVirtualDesktopHostPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

dataazurermvirtualdesktophostpool.DataAzurermVirtualDesktopHostPool_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

dataazurermvirtualdesktophostpool.DataAzurermVirtualDesktopHostPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermVirtualDesktopHostPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermVirtualDesktopHostPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermVirtualDesktopHostPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/virtual_desktop_host_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermVirtualDesktopHostPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.customRdpProperties">CustomRdpProperties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.loadBalancerType">LoadBalancerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.maximumSessionsAllowed">MaximumSessionsAllowed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.personalDesktopAssignmentType">PersonalDesktopAssignmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.preferredAppGroupType">PreferredAppGroupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.scheduledAgentUpdates">ScheduledAgentUpdates</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.startVmOnConnect">StartVmOnConnect</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference">DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.validateEnvironment">ValidateEnvironment</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CustomRdpProperties`<sup>Required</sup> <a name="CustomRdpProperties" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.customRdpProperties"></a>

```go
func CustomRdpProperties() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.loadBalancerType"></a>

```go
func LoadBalancerType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaximumSessionsAllowed`<sup>Required</sup> <a name="MaximumSessionsAllowed" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.maximumSessionsAllowed"></a>

```go
func MaximumSessionsAllowed() *f64
```

- *Type:* *f64

---

##### `PersonalDesktopAssignmentType`<sup>Required</sup> <a name="PersonalDesktopAssignmentType" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.personalDesktopAssignmentType"></a>

```go
func PersonalDesktopAssignmentType() *string
```

- *Type:* *string

---

##### `PreferredAppGroupType`<sup>Required</sup> <a name="PreferredAppGroupType" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.preferredAppGroupType"></a>

```go
func PreferredAppGroupType() *string
```

- *Type:* *string

---

##### `ScheduledAgentUpdates`<sup>Required</sup> <a name="ScheduledAgentUpdates" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.scheduledAgentUpdates"></a>

```go
func ScheduledAgentUpdates() DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList</a>

---

##### `StartVmOnConnect`<sup>Required</sup> <a name="StartVmOnConnect" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.startVmOnConnect"></a>

```go
func StartVmOnConnect() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.timeouts"></a>

```go
func Timeouts() DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference">DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidateEnvironment`<sup>Required</sup> <a name="ValidateEnvironment" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.validateEnvironment"></a>

```go
func ValidateEnvironment() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVirtualDesktopHostPoolConfig <a name="DataAzurermVirtualDesktopHostPoolConfig" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

&dataazurermvirtualdesktophostpool.DataAzurermVirtualDesktopHostPoolConfig {
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
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/virtual_desktop_host_pool#name DataAzurermVirtualDesktopHostPool#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/virtual_desktop_host_pool#resource_group_name DataAzurermVirtualDesktopHostPool#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/virtual_desktop_host_pool#id DataAzurermVirtualDesktopHostPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/virtual_desktop_host_pool#name DataAzurermVirtualDesktopHostPool#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/virtual_desktop_host_pool#resource_group_name DataAzurermVirtualDesktopHostPool#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/virtual_desktop_host_pool#id DataAzurermVirtualDesktopHostPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.timeouts"></a>

```go
Timeouts DataAzurermVirtualDesktopHostPoolTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/virtual_desktop_host_pool#timeouts DataAzurermVirtualDesktopHostPool#timeouts}

---

### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

&dataazurermvirtualdesktophostpool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates {

}
```


### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

&dataazurermvirtualdesktophostpool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule {

}
```


### DataAzurermVirtualDesktopHostPoolTimeouts <a name="DataAzurermVirtualDesktopHostPoolTimeouts" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

&dataazurermvirtualdesktophostpool.DataAzurermVirtualDesktopHostPoolTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/virtual_desktop_host_pool#read DataAzurermVirtualDesktopHostPool#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/virtual_desktop_host_pool#read DataAzurermVirtualDesktopHostPool#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

dataazurermvirtualdesktophostpool.NewDataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.get"></a>

```go
func Get(index *f64) DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

dataazurermvirtualdesktophostpool.NewDataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezone">UseSessionHostTimezone</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.schedule"></a>

```go
func Schedule() DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList</a>

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `UseSessionHostTimezone`<sup>Required</sup> <a name="UseSessionHostTimezone" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezone"></a>

```go
func UseSessionHostTimezone() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates</a>

---


### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

dataazurermvirtualdesktophostpool.NewDataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

dataazurermvirtualdesktophostpool.NewDataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>

---


### DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference <a name="DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermvirtualdesktophostpool"

dataazurermvirtualdesktophostpool.NewDataAzurermVirtualDesktopHostPoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



