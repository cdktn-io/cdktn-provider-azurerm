# `dataAzurermOrchestratedVirtualMachineScaleSet` Submodule <a name="`dataAzurermOrchestratedVirtualMachineScaleSet` Submodule" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOrchestratedVirtualMachineScaleSet <a name="DataAzurermOrchestratedVirtualMachineScaleSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set azurerm_orchestrated_virtual_machine_scale_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSet(scope Construct, id *string, config DataAzurermOrchestratedVirtualMachineScaleSetConfig) DataAzurermOrchestratedVirtualMachineScaleSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig">DataAzurermOrchestratedVirtualMachineScaleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig">DataAzurermOrchestratedVirtualMachineScaleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermOrchestratedVirtualMachineScaleSetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermOrchestratedVirtualMachineScaleSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermOrchestratedVirtualMachineScaleSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermOrchestratedVirtualMachineScaleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermOrchestratedVirtualMachineScaleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOrchestratedVirtualMachineScaleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList">DataAzurermOrchestratedVirtualMachineScaleSetIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.skuProfile">SkuProfile</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference">DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.identity"></a>

```go
func Identity() DataAzurermOrchestratedVirtualMachineScaleSetIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList">DataAzurermOrchestratedVirtualMachineScaleSetIdentityList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.networkInterface"></a>

```go
func NetworkInterface() DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList</a>

---

##### `SkuProfile`<sup>Required</sup> <a name="SkuProfile" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.skuProfile"></a>

```go
func SkuProfile() DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeouts"></a>

```go
func Timeouts() DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference">DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOrchestratedVirtualMachineScaleSetConfig <a name="DataAzurermOrchestratedVirtualMachineScaleSetConfig" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

&dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSetConfig {
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
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#name DataAzurermOrchestratedVirtualMachineScaleSet#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#resource_group_name DataAzurermOrchestratedVirtualMachineScaleSet#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#id DataAzurermOrchestratedVirtualMachineScaleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetConfig.property.timeouts"></a>

```go
Timeouts DataAzurermOrchestratedVirtualMachineScaleSetTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts">DataAzurermOrchestratedVirtualMachineScaleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#timeouts DataAzurermOrchestratedVirtualMachineScaleSet#timeouts}

---

### DataAzurermOrchestratedVirtualMachineScaleSetIdentity <a name="DataAzurermOrchestratedVirtualMachineScaleSetIdentity" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

&dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSetIdentity {

}
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

&dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface {

}
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

&dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration {

}
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

&dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {

}
```


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

&dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {

}
```


### DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile <a name="DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

&dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile {

}
```


### DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize <a name="DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

&dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize {

}
```


### DataAzurermOrchestratedVirtualMachineScaleSetTimeouts <a name="DataAzurermOrchestratedVirtualMachineScaleSetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

&dataazurermorchestratedvirtualmachinescaleset.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#read DataAzurermOrchestratedVirtualMachineScaleSet#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/orchestrated_virtual_machine_scale_set#read DataAzurermOrchestratedVirtualMachineScaleSet#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOrchestratedVirtualMachineScaleSetIdentityList <a name="DataAzurermOrchestratedVirtualMachineScaleSetIdentityList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity">DataAzurermOrchestratedVirtualMachineScaleSetIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOrchestratedVirtualMachineScaleSetIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetIdentity">DataAzurermOrchestratedVirtualMachineScaleSetIdentity</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get"></a>

```go
func Get(index *f64) DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds">ApplicationGatewayBackendAddressPoolIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds">ApplicationSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds">LoadBalancerBackendAddressPoolIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds">LoadBalancerInboundNatRulesIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary">Primary</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationGatewayBackendAddressPoolIds`<sup>Required</sup> <a name="ApplicationGatewayBackendAddressPoolIds" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolIds"></a>

```go
func ApplicationGatewayBackendAddressPoolIds() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationSecurityGroupIds`<sup>Required</sup> <a name="ApplicationSecurityGroupIds" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.applicationSecurityGroupIds"></a>

```go
func ApplicationSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerBackendAddressPoolIds`<sup>Required</sup> <a name="LoadBalancerBackendAddressPoolIds" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolIds"></a>

```go
func LoadBalancerBackendAddressPoolIds() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerInboundNatRulesIds`<sup>Required</sup> <a name="LoadBalancerInboundNatRulesIds" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds"></a>

```go
func LoadBalancerInboundNatRulesIds() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```go
func Primary() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddress"></a>

```go
func PublicIpAddress() DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfiguration</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get"></a>

```go
func Get(index *f64) DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get"></a>

```go
func Get(index *f64) DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel">DomainNameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag">IpTag</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId">PublicIpPrefixId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainNameLabel`<sup>Required</sup> <a name="DomainNameLabel" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.domainNameLabel"></a>

```go
func DomainNameLabel() *string
```

- *Type:* *string

---

##### `IdleTimeoutInMinutes`<sup>Required</sup> <a name="IdleTimeoutInMinutes" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.idleTimeoutInMinutes"></a>

```go
func IdleTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `IpTag`<sup>Required</sup> <a name="IpTag" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.ipTag"></a>

```go
func IpTag() DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTagList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicIpPrefixId`<sup>Required</sup> <a name="PublicIpPrefixId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.publicIpPrefixId"></a>

```go
func PublicIpPrefixId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.get"></a>

```go
func Get(index *f64) DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.acceleratedNetworkingEnabled">AcceleratedNetworkingEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers">DnsServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration">IpConfiguration</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipForwardingEnabled">IpForwardingEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId">NetworkSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary">Primary</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratedNetworkingEnabled`<sup>Required</sup> <a name="AcceleratedNetworkingEnabled" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.acceleratedNetworkingEnabled"></a>

```go
func AcceleratedNetworkingEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.dnsServers"></a>

```go
func DnsServers() *[]*string
```

- *Type:* *[]*string

---

##### `IpConfiguration`<sup>Required</sup> <a name="IpConfiguration" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipConfiguration"></a>

```go
func IpConfiguration() DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceIpConfigurationList</a>

---

##### `IpForwardingEnabled`<sup>Required</sup> <a name="IpForwardingEnabled" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.ipForwardingEnabled"></a>

```go
func IpForwardingEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupId`<sup>Required</sup> <a name="NetworkSecurityGroupId" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.networkSecurityGroupId"></a>

```go
func NetworkSecurityGroupId() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.primary"></a>

```go
func Primary() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface">DataAzurermOrchestratedVirtualMachineScaleSetNetworkInterface</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList <a name="DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.get"></a>

```go
func Get(index *f64) DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.virtualMachineSize">VirtualMachineSize</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `VirtualMachineSize`<sup>Required</sup> <a name="VirtualMachineSize" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.virtualMachineSize"></a>

```go
func VirtualMachineSize() DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfile</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList <a name="DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.get"></a>

```go
func Get(index *f64) DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.rank">Rank</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.rank"></a>

```go
func Rank() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize">DataAzurermOrchestratedVirtualMachineScaleSetSkuProfileVirtualMachineSize</a>

---


### DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference <a name="DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermorchestratedvirtualmachinescaleset"

dataazurermorchestratedvirtualmachinescaleset.NewDataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOrchestratedVirtualMachineScaleSet.DataAzurermOrchestratedVirtualMachineScaleSetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



