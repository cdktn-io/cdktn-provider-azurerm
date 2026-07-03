# `dataAzurermIothubDpsSharedAccessPolicy` Submodule <a name="`dataAzurermIothubDpsSharedAccessPolicy` Submodule" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermIothubDpsSharedAccessPolicy <a name="DataAzurermIothubDpsSharedAccessPolicy" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy azurerm_iothub_dps_shared_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermiothubdpssharedaccesspolicy"

dataazurermiothubdpssharedaccesspolicy.NewDataAzurermIothubDpsSharedAccessPolicy(scope Construct, id *string, config DataAzurermIothubDpsSharedAccessPolicyConfig) DataAzurermIothubDpsSharedAccessPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig">DataAzurermIothubDpsSharedAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig">DataAzurermIothubDpsSharedAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermIothubDpsSharedAccessPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermIothubDpsSharedAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermiothubdpssharedaccesspolicy"

dataazurermiothubdpssharedaccesspolicy.DataAzurermIothubDpsSharedAccessPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermiothubdpssharedaccesspolicy"

dataazurermiothubdpssharedaccesspolicy.DataAzurermIothubDpsSharedAccessPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermiothubdpssharedaccesspolicy"

dataazurermiothubdpssharedaccesspolicy.DataAzurermIothubDpsSharedAccessPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermiothubdpssharedaccesspolicy"

dataazurermiothubdpssharedaccesspolicy.DataAzurermIothubDpsSharedAccessPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermIothubDpsSharedAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermIothubDpsSharedAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermIothubDpsSharedAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermIothubDpsSharedAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.secondaryKey">SecondaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference">DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.iothubDpsNameInput">IothubDpsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.iothubDpsName">IothubDpsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.primaryConnectionString"></a>

```go
func PrimaryConnectionString() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.primaryKey"></a>

```go
func PrimaryKey() *string
```

- *Type:* *string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.secondaryConnectionString"></a>

```go
func SecondaryConnectionString() *string
```

- *Type:* *string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.secondaryKey"></a>

```go
func SecondaryKey() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.timeouts"></a>

```go
func Timeouts() DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference">DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IothubDpsNameInput`<sup>Optional</sup> <a name="IothubDpsNameInput" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.iothubDpsNameInput"></a>

```go
func IothubDpsNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IothubDpsName`<sup>Required</sup> <a name="IothubDpsName" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.iothubDpsName"></a>

```go
func IothubDpsName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermIothubDpsSharedAccessPolicyConfig <a name="DataAzurermIothubDpsSharedAccessPolicyConfig" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermiothubdpssharedaccesspolicy"

&dataazurermiothubdpssharedaccesspolicy.DataAzurermIothubDpsSharedAccessPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IothubDpsName: *string,
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.iothubDpsName">IothubDpsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy#iothub_dps_name DataAzurermIothubDpsSharedAccessPolicy#iothub_dps_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy#name DataAzurermIothubDpsSharedAccessPolicy#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy#resource_group_name DataAzurermIothubDpsSharedAccessPolicy#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy#id DataAzurermIothubDpsSharedAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IothubDpsName`<sup>Required</sup> <a name="IothubDpsName" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.iothubDpsName"></a>

```go
IothubDpsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy#iothub_dps_name DataAzurermIothubDpsSharedAccessPolicy#iothub_dps_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy#name DataAzurermIothubDpsSharedAccessPolicy#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy#resource_group_name DataAzurermIothubDpsSharedAccessPolicy#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy#id DataAzurermIothubDpsSharedAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyConfig.property.timeouts"></a>

```go
Timeouts DataAzurermIothubDpsSharedAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts">DataAzurermIothubDpsSharedAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy#timeouts DataAzurermIothubDpsSharedAccessPolicy#timeouts}

---

### DataAzurermIothubDpsSharedAccessPolicyTimeouts <a name="DataAzurermIothubDpsSharedAccessPolicyTimeouts" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermiothubdpssharedaccesspolicy"

&dataazurermiothubdpssharedaccesspolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy#read DataAzurermIothubDpsSharedAccessPolicy#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/iothub_dps_shared_access_policy#read DataAzurermIothubDpsSharedAccessPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference <a name="DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermiothubdpssharedaccesspolicy"

dataazurermiothubdpssharedaccesspolicy.NewDataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermIothubDpsSharedAccessPolicy.DataAzurermIothubDpsSharedAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



