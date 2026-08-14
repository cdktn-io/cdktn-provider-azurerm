# `dataAzurermVirtualNetworkGatewayConnection` Submodule <a name="`dataAzurermVirtualNetworkGatewayConnection` Submodule" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVirtualNetworkGatewayConnection <a name="DataAzurermVirtualNetworkGatewayConnection" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/virtual_network_gateway_connection azurerm_virtual_network_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

dataazurermvirtualnetworkgatewayconnection.NewDataAzurermVirtualNetworkGatewayConnection(scope Construct, id *string, config DataAzurermVirtualNetworkGatewayConnectionConfig) DataAzurermVirtualNetworkGatewayConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig">DataAzurermVirtualNetworkGatewayConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig">DataAzurermVirtualNetworkGatewayConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermVirtualNetworkGatewayConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts">DataAzurermVirtualNetworkGatewayConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermVirtualNetworkGatewayConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

dataazurermvirtualnetworkgatewayconnection.DataAzurermVirtualNetworkGatewayConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

dataazurermvirtualnetworkgatewayconnection.DataAzurermVirtualNetworkGatewayConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

dataazurermvirtualnetworkgatewayconnection.DataAzurermVirtualNetworkGatewayConnection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

dataazurermvirtualnetworkgatewayconnection.DataAzurermVirtualNetworkGatewayConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermVirtualNetworkGatewayConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermVirtualNetworkGatewayConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermVirtualNetworkGatewayConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/virtual_network_gateway_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermVirtualNetworkGatewayConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.authorizationKey">AuthorizationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.bgpEnabled">BgpEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.connectionProtocol">ConnectionProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.dpdTimeoutSeconds">DpdTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.egressBytesTransferred">EgressBytesTransferred</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.expressRouteCircuitId">ExpressRouteCircuitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.expressRouteGatewayBypass">ExpressRouteGatewayBypass</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.ingressBytesTransferred">IngressBytesTransferred</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList">DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.localAzureIpAddressEnabled">LocalAzureIpAddressEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.localNetworkGatewayId">LocalNetworkGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId">PeerVirtualNetworkGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.privateLinkFastPathEnabled">PrivateLinkFastPathEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.resourceGuid">ResourceGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.routingWeight">RoutingWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.sharedKey">SharedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference">DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.trafficSelectorPolicy">TrafficSelectorPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList">DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors">UsePolicyBasedTrafficSelectors</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.virtualNetworkGatewayId">VirtualNetworkGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AuthorizationKey`<sup>Required</sup> <a name="AuthorizationKey" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.authorizationKey"></a>

```go
func AuthorizationKey() *string
```

- *Type:* *string

---

##### `BgpEnabled`<sup>Required</sup> <a name="BgpEnabled" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.bgpEnabled"></a>

```go
func BgpEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ConnectionProtocol`<sup>Required</sup> <a name="ConnectionProtocol" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.connectionProtocol"></a>

```go
func ConnectionProtocol() *string
```

- *Type:* *string

---

##### `DpdTimeoutSeconds`<sup>Required</sup> <a name="DpdTimeoutSeconds" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.dpdTimeoutSeconds"></a>

```go
func DpdTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `EgressBytesTransferred`<sup>Required</sup> <a name="EgressBytesTransferred" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.egressBytesTransferred"></a>

```go
func EgressBytesTransferred() *f64
```

- *Type:* *f64

---

##### `ExpressRouteCircuitId`<sup>Required</sup> <a name="ExpressRouteCircuitId" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.expressRouteCircuitId"></a>

```go
func ExpressRouteCircuitId() *string
```

- *Type:* *string

---

##### `ExpressRouteGatewayBypass`<sup>Required</sup> <a name="ExpressRouteGatewayBypass" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.expressRouteGatewayBypass"></a>

```go
func ExpressRouteGatewayBypass() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IngressBytesTransferred`<sup>Required</sup> <a name="IngressBytesTransferred" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.ingressBytesTransferred"></a>

```go
func IngressBytesTransferred() *f64
```

- *Type:* *f64

---

##### `IpsecPolicy`<sup>Required</sup> <a name="IpsecPolicy" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.ipsecPolicy"></a>

```go
func IpsecPolicy() DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList">DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList</a>

---

##### `LocalAzureIpAddressEnabled`<sup>Required</sup> <a name="LocalAzureIpAddressEnabled" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.localAzureIpAddressEnabled"></a>

```go
func LocalAzureIpAddressEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LocalNetworkGatewayId`<sup>Required</sup> <a name="LocalNetworkGatewayId" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.localNetworkGatewayId"></a>

```go
func LocalNetworkGatewayId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PeerVirtualNetworkGatewayId`<sup>Required</sup> <a name="PeerVirtualNetworkGatewayId" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId"></a>

```go
func PeerVirtualNetworkGatewayId() *string
```

- *Type:* *string

---

##### `PrivateLinkFastPathEnabled`<sup>Required</sup> <a name="PrivateLinkFastPathEnabled" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.privateLinkFastPathEnabled"></a>

```go
func PrivateLinkFastPathEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ResourceGuid`<sup>Required</sup> <a name="ResourceGuid" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.resourceGuid"></a>

```go
func ResourceGuid() *string
```

- *Type:* *string

---

##### `RoutingWeight`<sup>Required</sup> <a name="RoutingWeight" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.routingWeight"></a>

```go
func RoutingWeight() *f64
```

- *Type:* *f64

---

##### `SharedKey`<sup>Required</sup> <a name="SharedKey" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.sharedKey"></a>

```go
func SharedKey() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.timeouts"></a>

```go
func Timeouts() DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference">DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference</a>

---

##### `TrafficSelectorPolicy`<sup>Required</sup> <a name="TrafficSelectorPolicy" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.trafficSelectorPolicy"></a>

```go
func TrafficSelectorPolicy() DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList">DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsePolicyBasedTrafficSelectors`<sup>Required</sup> <a name="UsePolicyBasedTrafficSelectors" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors"></a>

```go
func UsePolicyBasedTrafficSelectors() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VirtualNetworkGatewayId`<sup>Required</sup> <a name="VirtualNetworkGatewayId" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.virtualNetworkGatewayId"></a>

```go
func VirtualNetworkGatewayId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVirtualNetworkGatewayConnectionConfig <a name="DataAzurermVirtualNetworkGatewayConnectionConfig" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

&dataazurermvirtualnetworkgatewayconnection.DataAzurermVirtualNetworkGatewayConnectionConfig {
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
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/virtual_network_gateway_connection#name DataAzurermVirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/virtual_network_gateway_connection#resource_group_name DataAzurermVirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/virtual_network_gateway_connection#id DataAzurermVirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts">DataAzurermVirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/virtual_network_gateway_connection#name DataAzurermVirtualNetworkGatewayConnection#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/virtual_network_gateway_connection#resource_group_name DataAzurermVirtualNetworkGatewayConnection#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/virtual_network_gateway_connection#id DataAzurermVirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionConfig.property.timeouts"></a>

```go
Timeouts DataAzurermVirtualNetworkGatewayConnectionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts">DataAzurermVirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/virtual_network_gateway_connection#timeouts DataAzurermVirtualNetworkGatewayConnection#timeouts}

---

### DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy <a name="DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

&dataazurermvirtualnetworkgatewayconnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy {

}
```


### DataAzurermVirtualNetworkGatewayConnectionTimeouts <a name="DataAzurermVirtualNetworkGatewayConnectionTimeouts" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

&dataazurermvirtualnetworkgatewayconnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/virtual_network_gateway_connection#read DataAzurermVirtualNetworkGatewayConnection#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/virtual_network_gateway_connection#read DataAzurermVirtualNetworkGatewayConnection#read}.

---

### DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy <a name="DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

&dataazurermvirtualnetworkgatewayconnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList <a name="DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

dataazurermvirtualnetworkgatewayconnection.NewDataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.get"></a>

```go
func Get(index *f64) DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference <a name="DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

dataazurermvirtualnetworkgatewayconnection.NewDataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup">DhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption">IkeEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity">IkeIntegrity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption">IpsecEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity">IpsecIntegrity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup">PfsGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize">SaDatasize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime">SaLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy">DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup"></a>

```go
func DhGroup() *string
```

- *Type:* *string

---

##### `IkeEncryption`<sup>Required</sup> <a name="IkeEncryption" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption"></a>

```go
func IkeEncryption() *string
```

- *Type:* *string

---

##### `IkeIntegrity`<sup>Required</sup> <a name="IkeIntegrity" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```go
func IkeIntegrity() *string
```

- *Type:* *string

---

##### `IpsecEncryption`<sup>Required</sup> <a name="IpsecEncryption" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```go
func IpsecEncryption() *string
```

- *Type:* *string

---

##### `IpsecIntegrity`<sup>Required</sup> <a name="IpsecIntegrity" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```go
func IpsecIntegrity() *string
```

- *Type:* *string

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup"></a>

```go
func PfsGroup() *string
```

- *Type:* *string

---

##### `SaDatasize`<sup>Required</sup> <a name="SaDatasize" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize"></a>

```go
func SaDatasize() *f64
```

- *Type:* *f64

---

##### `SaLifetime`<sup>Required</sup> <a name="SaLifetime" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime"></a>

```go
func SaLifetime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy">DataAzurermVirtualNetworkGatewayConnectionIpsecPolicy</a>

---


### DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference <a name="DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

dataazurermvirtualnetworkgatewayconnection.NewDataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList <a name="DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

dataazurermvirtualnetworkgatewayconnection.NewDataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get"></a>

```go
func Get(index *f64) DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference <a name="DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermvirtualnetworkgatewayconnection"

dataazurermvirtualnetworkgatewayconnection.NewDataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrs">LocalAddressCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrs">RemoteAddressCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy">DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalAddressCidrs`<sup>Required</sup> <a name="LocalAddressCidrs" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrs"></a>

```go
func LocalAddressCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `RemoteAddressCidrs`<sup>Required</sup> <a name="RemoteAddressCidrs" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrs"></a>

```go
func RemoteAddressCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermVirtualNetworkGatewayConnection.DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy">DataAzurermVirtualNetworkGatewayConnectionTrafficSelectorPolicy</a>

---



