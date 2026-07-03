# `dataAzurermManagedDevopsPool` Submodule <a name="`dataAzurermManagedDevopsPool` Submodule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermManagedDevopsPool <a name="DataAzurermManagedDevopsPool" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_devops_pool azurerm_managed_devops_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPool(scope Construct, id *string, config DataAzurermManagedDevopsPoolConfig) DataAzurermManagedDevopsPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig">DataAzurermManagedDevopsPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig">DataAzurermManagedDevopsPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermManagedDevopsPoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts">DataAzurermManagedDevopsPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermManagedDevopsPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.DataAzurermManagedDevopsPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.DataAzurermManagedDevopsPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.DataAzurermManagedDevopsPool_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.DataAzurermManagedDevopsPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermManagedDevopsPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermManagedDevopsPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermManagedDevopsPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_devops_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermManagedDevopsPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.azureDevopsOrganization">AzureDevopsOrganization</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.devCenterProjectId">DevCenterProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList">DataAzurermManagedDevopsPoolIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.maximumConcurrency">MaximumConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.statefulAgent">StatefulAgent</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList">DataAzurermManagedDevopsPoolStatefulAgentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.statelessAgent">StatelessAgent</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList">DataAzurermManagedDevopsPoolStatelessAgentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference">DataAzurermManagedDevopsPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.virtualMachineScaleSetFabric">VirtualMachineScaleSetFabric</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.workFolder">WorkFolder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AzureDevopsOrganization`<sup>Required</sup> <a name="AzureDevopsOrganization" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.azureDevopsOrganization"></a>

```go
func AzureDevopsOrganization() DataAzurermManagedDevopsPoolAzureDevopsOrganizationList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationList</a>

---

##### `DevCenterProjectId`<sup>Required</sup> <a name="DevCenterProjectId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.devCenterProjectId"></a>

```go
func DevCenterProjectId() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.identity"></a>

```go
func Identity() DataAzurermManagedDevopsPoolIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList">DataAzurermManagedDevopsPoolIdentityList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaximumConcurrency`<sup>Required</sup> <a name="MaximumConcurrency" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.maximumConcurrency"></a>

```go
func MaximumConcurrency() *f64
```

- *Type:* *f64

---

##### `StatefulAgent`<sup>Required</sup> <a name="StatefulAgent" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.statefulAgent"></a>

```go
func StatefulAgent() DataAzurermManagedDevopsPoolStatefulAgentList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList">DataAzurermManagedDevopsPoolStatefulAgentList</a>

---

##### `StatelessAgent`<sup>Required</sup> <a name="StatelessAgent" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.statelessAgent"></a>

```go
func StatelessAgent() DataAzurermManagedDevopsPoolStatelessAgentList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList">DataAzurermManagedDevopsPoolStatelessAgentList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.timeouts"></a>

```go
func Timeouts() DataAzurermManagedDevopsPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference">DataAzurermManagedDevopsPoolTimeoutsOutputReference</a>

---

##### `VirtualMachineScaleSetFabric`<sup>Required</sup> <a name="VirtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.virtualMachineScaleSetFabric"></a>

```go
func VirtualMachineScaleSetFabric() DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList</a>

---

##### `WorkFolder`<sup>Required</sup> <a name="WorkFolder" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.workFolder"></a>

```go
func WorkFolder() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermManagedDevopsPoolAzureDevopsOrganization <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganization" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolAzureDevopsOrganization {

}
```


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization {

}
```


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission {

}
```


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount {

}
```


### DataAzurermManagedDevopsPoolConfig <a name="DataAzurermManagedDevopsPoolConfig" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolConfig {
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
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_devops_pool#name DataAzurermManagedDevopsPool#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_devops_pool#resource_group_name DataAzurermManagedDevopsPool#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_devops_pool#id DataAzurermManagedDevopsPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts">DataAzurermManagedDevopsPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_devops_pool#name DataAzurermManagedDevopsPool#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_devops_pool#resource_group_name DataAzurermManagedDevopsPool#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_devops_pool#id DataAzurermManagedDevopsPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.timeouts"></a>

```go
Timeouts DataAzurermManagedDevopsPoolTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts">DataAzurermManagedDevopsPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_devops_pool#timeouts DataAzurermManagedDevopsPool#timeouts}

---

### DataAzurermManagedDevopsPoolIdentity <a name="DataAzurermManagedDevopsPoolIdentity" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolIdentity {

}
```


### DataAzurermManagedDevopsPoolStatefulAgent <a name="DataAzurermManagedDevopsPoolStatefulAgent" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatefulAgent {

}
```


### DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction <a name="DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction {

}
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction {

}
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatelessAgent <a name="DataAzurermManagedDevopsPoolStatelessAgent" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatelessAgent {

}
```


### DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction <a name="DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction {

}
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction {

}
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule {

}
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule {

}
```


### DataAzurermManagedDevopsPoolTimeouts <a name="DataAzurermManagedDevopsPoolTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_devops_pool#read DataAzurermManagedDevopsPool#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/managed_devops_pool#read DataAzurermManagedDevopsPool#read}.

---

### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric {

}
```


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage {

}
```


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity {

}
```


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement {

}
```


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

&dataazurermmanageddevopspool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermManagedDevopsPoolAzureDevopsOrganizationList <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolAzureDevopsOrganizationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolAzureDevopsOrganizationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelism">Parallelism</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projects">Projects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization">DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelism"></a>

```go
func Parallelism() *f64
```

- *Type:* *f64

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projects"></a>

```go
func Projects() *[]*string
```

- *Type:* *[]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization">DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization</a>

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organization">Organization</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permission">Permission</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganization">DataAzurermManagedDevopsPoolAzureDevopsOrganization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organization"></a>

```go
func Organization() DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList</a>

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permission"></a>

```go
func Permission() DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolAzureDevopsOrganization
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganization">DataAzurermManagedDevopsPoolAzureDevopsOrganization</a>

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groups">Groups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.users">Users</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groups"></a>

```go
func Groups() *[]*string
```

- *Type:* *[]*string

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.users"></a>

```go
func Users() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccount">AdministratorAccount</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdministratorAccount`<sup>Required</sup> <a name="AdministratorAccount" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccount"></a>

```go
func AdministratorAccount() DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission</a>

---


### DataAzurermManagedDevopsPoolIdentityList <a name="DataAzurermManagedDevopsPoolIdentityList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolIdentityOutputReference <a name="DataAzurermManagedDevopsPoolIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentity">DataAzurermManagedDevopsPoolIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentity">DataAzurermManagedDevopsPoolIdentity</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList <a name="DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreference">PredictionPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredictionPreference`<sup>Required</sup> <a name="PredictionPreference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreference"></a>

```go
func PredictionPreference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentList <a name="DataAzurermManagedDevopsPoolStatefulAgentList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatefulAgentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatefulAgentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekSchedule">AllWeekSchedule</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridaySchedule">FridaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondaySchedule">MondaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdaySchedule">SaturdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundaySchedule">SundaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdaySchedule">ThursdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneName">TimeZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdaySchedule">TuesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdaySchedule">WednesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllWeekSchedule`<sup>Required</sup> <a name="AllWeekSchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekSchedule"></a>

```go
func AllWeekSchedule() *f64
```

- *Type:* *f64

---

##### `FridaySchedule`<sup>Required</sup> <a name="FridaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridaySchedule"></a>

```go
func FridaySchedule() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList</a>

---

##### `MondaySchedule`<sup>Required</sup> <a name="MondaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondaySchedule"></a>

```go
func MondaySchedule() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList</a>

---

##### `SaturdaySchedule`<sup>Required</sup> <a name="SaturdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdaySchedule"></a>

```go
func SaturdaySchedule() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList</a>

---

##### `SundaySchedule`<sup>Required</sup> <a name="SundaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundaySchedule"></a>

```go
func SundaySchedule() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList</a>

---

##### `ThursdaySchedule`<sup>Required</sup> <a name="ThursdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdaySchedule"></a>

```go
func ThursdaySchedule() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList</a>

---

##### `TimeZoneName`<sup>Required</sup> <a name="TimeZoneName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneName"></a>

```go
func TimeZoneName() *string
```

- *Type:* *string

---

##### `TuesdaySchedule`<sup>Required</sup> <a name="TuesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdaySchedule"></a>

```go
func TuesdaySchedule() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList</a>

---

##### `WednesdaySchedule`<sup>Required</sup> <a name="WednesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdaySchedule"></a>

```go
func WednesdaySchedule() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatefulAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatefulAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePrediction">AutomaticResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList">DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpan">GracePeriodTimeSpan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePrediction">ManualResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetime">MaximumAgentLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgent">DataAzurermManagedDevopsPoolStatefulAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticResourcePrediction`<sup>Required</sup> <a name="AutomaticResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePrediction"></a>

```go
func AutomaticResourcePrediction() DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList">DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList</a>

---

##### `GracePeriodTimeSpan`<sup>Required</sup> <a name="GracePeriodTimeSpan" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpan"></a>

```go
func GracePeriodTimeSpan() *string
```

- *Type:* *string

---

##### `ManualResourcePrediction`<sup>Required</sup> <a name="ManualResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePrediction"></a>

```go
func ManualResourcePrediction() DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList</a>

---

##### `MaximumAgentLifetime`<sup>Required</sup> <a name="MaximumAgentLifetime" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetime"></a>

```go
func MaximumAgentLifetime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatefulAgent
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgent">DataAzurermManagedDevopsPoolStatefulAgent</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList <a name="DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreference">PredictionPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredictionPreference`<sup>Required</sup> <a name="PredictionPreference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreference"></a>

```go
func PredictionPreference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentList <a name="DataAzurermManagedDevopsPoolStatelessAgentList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatelessAgentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatelessAgentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekSchedule">AllWeekSchedule</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridaySchedule">FridaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondaySchedule">MondaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdaySchedule">SaturdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundaySchedule">SundaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdaySchedule">ThursdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneName">TimeZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdaySchedule">TuesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdaySchedule">WednesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllWeekSchedule`<sup>Required</sup> <a name="AllWeekSchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekSchedule"></a>

```go
func AllWeekSchedule() *f64
```

- *Type:* *f64

---

##### `FridaySchedule`<sup>Required</sup> <a name="FridaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridaySchedule"></a>

```go
func FridaySchedule() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList</a>

---

##### `MondaySchedule`<sup>Required</sup> <a name="MondaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondaySchedule"></a>

```go
func MondaySchedule() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList</a>

---

##### `SaturdaySchedule`<sup>Required</sup> <a name="SaturdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdaySchedule"></a>

```go
func SaturdaySchedule() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList</a>

---

##### `SundaySchedule`<sup>Required</sup> <a name="SundaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundaySchedule"></a>

```go
func SundaySchedule() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList</a>

---

##### `ThursdaySchedule`<sup>Required</sup> <a name="ThursdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdaySchedule"></a>

```go
func ThursdaySchedule() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList</a>

---

##### `TimeZoneName`<sup>Required</sup> <a name="TimeZoneName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneName"></a>

```go
func TimeZoneName() *string
```

- *Type:* *string

---

##### `TuesdaySchedule`<sup>Required</sup> <a name="TuesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdaySchedule"></a>

```go
func TuesdaySchedule() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList</a>

---

##### `WednesdaySchedule`<sup>Required</sup> <a name="WednesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdaySchedule"></a>

```go
func WednesdaySchedule() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolStatelessAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolStatelessAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePrediction">AutomaticResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList">DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePrediction">ManualResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgent">DataAzurermManagedDevopsPoolStatelessAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticResourcePrediction`<sup>Required</sup> <a name="AutomaticResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePrediction"></a>

```go
func AutomaticResourcePrediction() DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList">DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList</a>

---

##### `ManualResourcePrediction`<sup>Required</sup> <a name="ManualResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePrediction"></a>

```go
func ManualResourcePrediction() DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolStatelessAgent
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgent">DataAzurermManagedDevopsPoolStatelessAgent</a>

---


### DataAzurermManagedDevopsPoolTimeoutsOutputReference <a name="DataAzurermManagedDevopsPoolTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermManagedDevopsPoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliases">Aliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.buffer">Buffer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageName">WellKnownImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliases"></a>

```go
func Aliases() *[]*string
```

- *Type:* *[]*string

---

##### `Buffer`<sup>Required</sup> <a name="Buffer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.buffer"></a>

```go
func Buffer() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `WellKnownImageName`<sup>Required</sup> <a name="WellKnownImageName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageName"></a>

```go
func WellKnownImageName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.image">Image</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountType">OsDiskStorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.security">Security</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.image"></a>

```go
func Image() DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList</a>

---

##### `OsDiskStorageAccountType`<sup>Required</sup> <a name="OsDiskStorageAccountType" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountType"></a>

```go
func OsDiskStorageAccountType() *string
```

- *Type:* *string

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.security"></a>

```go
func Security() DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList</a>

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storage"></a>

```go
func Storage() DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric</a>

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocation">CertificateStoreLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreName">CertificateStoreName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabled">KeyExportEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIds">KeyVaultCertificateIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateStoreLocation`<sup>Required</sup> <a name="CertificateStoreLocation" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocation"></a>

```go
func CertificateStoreLocation() *string
```

- *Type:* *string

---

##### `CertificateStoreName`<sup>Required</sup> <a name="CertificateStoreName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreName"></a>

```go
func CertificateStoreName() *string
```

- *Type:* *string

---

##### `KeyExportEnabled`<sup>Required</sup> <a name="KeyExportEnabled" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabled"></a>

```go
func KeyExportEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KeyVaultCertificateIds`<sup>Required</sup> <a name="KeyVaultCertificateIds" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIds"></a>

```go
func KeyVaultCertificateIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabled">InteractiveLogonEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagement">KeyVaultManagement</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InteractiveLogonEnabled`<sup>Required</sup> <a name="InteractiveLogonEnabled" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabled"></a>

```go
func InteractiveLogonEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KeyVaultManagement`<sup>Required</sup> <a name="KeyVaultManagement" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagement"></a>

```go
func KeyVaultManagement() DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermmanageddevopspool"

dataazurermmanageddevopspool.NewDataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.caching">Caching</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGb">DiskSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetter">DriveLetter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.caching"></a>

```go
func Caching() *string
```

- *Type:* *string

---

##### `DiskSizeInGb`<sup>Required</sup> <a name="DiskSizeInGb" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGb"></a>

```go
func DiskSizeInGb() *f64
```

- *Type:* *f64

---

##### `DriveLetter`<sup>Required</sup> <a name="DriveLetter" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetter"></a>

```go
func DriveLetter() *string
```

- *Type:* *string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountType"></a>

```go
func StorageAccountType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

---



