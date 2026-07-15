# `dataAzurermCosmosdbSqlRoleDefinition` Submodule <a name="`dataAzurermCosmosdbSqlRoleDefinition` Submodule" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCosmosdbSqlRoleDefinition <a name="DataAzurermCosmosdbSqlRoleDefinition" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition azurerm_cosmosdb_sql_role_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcosmosdbsqlroledefinition"

dataazurermcosmosdbsqlroledefinition.NewDataAzurermCosmosdbSqlRoleDefinition(scope Construct, id *string, config DataAzurermCosmosdbSqlRoleDefinitionConfig) DataAzurermCosmosdbSqlRoleDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig">DataAzurermCosmosdbSqlRoleDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig">DataAzurermCosmosdbSqlRoleDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermCosmosdbSqlRoleDefinitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermCosmosdbSqlRoleDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcosmosdbsqlroledefinition"

dataazurermcosmosdbsqlroledefinition.DataAzurermCosmosdbSqlRoleDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcosmosdbsqlroledefinition"

dataazurermcosmosdbsqlroledefinition.DataAzurermCosmosdbSqlRoleDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcosmosdbsqlroledefinition"

dataazurermcosmosdbsqlroledefinition.DataAzurermCosmosdbSqlRoleDefinition_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcosmosdbsqlroledefinition"

dataazurermcosmosdbsqlroledefinition.DataAzurermCosmosdbSqlRoleDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermCosmosdbSqlRoleDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermCosmosdbSqlRoleDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermCosmosdbSqlRoleDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermCosmosdbSqlRoleDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.assignableScopes">AssignableScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList">DataAzurermCosmosdbSqlRoleDefinitionPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference">DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.roleDefinitionIdInput">RoleDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AssignableScopes`<sup>Required</sup> <a name="AssignableScopes" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.assignableScopes"></a>

```go
func AssignableScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.permissions"></a>

```go
func Permissions() DataAzurermCosmosdbSqlRoleDefinitionPermissionsList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList">DataAzurermCosmosdbSqlRoleDefinitionPermissionsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.timeouts"></a>

```go
func Timeouts() DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference">DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RoleDefinitionIdInput`<sup>Optional</sup> <a name="RoleDefinitionIdInput" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.roleDefinitionIdInput"></a>

```go
func RoleDefinitionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.roleDefinitionId"></a>

```go
func RoleDefinitionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCosmosdbSqlRoleDefinitionConfig <a name="DataAzurermCosmosdbSqlRoleDefinitionConfig" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcosmosdbsqlroledefinition"

&dataazurermcosmosdbsqlroledefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountName: *string,
	ResourceGroupName: *string,
	RoleDefinitionId: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition#account_name DataAzurermCosmosdbSqlRoleDefinition#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition#resource_group_name DataAzurermCosmosdbSqlRoleDefinition#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.roleDefinitionId">RoleDefinitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition#role_definition_id DataAzurermCosmosdbSqlRoleDefinition#role_definition_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition#id DataAzurermCosmosdbSqlRoleDefinition#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition#account_name DataAzurermCosmosdbSqlRoleDefinition#account_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition#resource_group_name DataAzurermCosmosdbSqlRoleDefinition#resource_group_name}.

---

##### `RoleDefinitionId`<sup>Required</sup> <a name="RoleDefinitionId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.roleDefinitionId"></a>

```go
RoleDefinitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition#role_definition_id DataAzurermCosmosdbSqlRoleDefinition#role_definition_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition#id DataAzurermCosmosdbSqlRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.timeouts"></a>

```go
Timeouts DataAzurermCosmosdbSqlRoleDefinitionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition#timeouts DataAzurermCosmosdbSqlRoleDefinition#timeouts}

---

### DataAzurermCosmosdbSqlRoleDefinitionPermissions <a name="DataAzurermCosmosdbSqlRoleDefinitionPermissions" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcosmosdbsqlroledefinition"

&dataazurermcosmosdbsqlroledefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions {

}
```


### DataAzurermCosmosdbSqlRoleDefinitionTimeouts <a name="DataAzurermCosmosdbSqlRoleDefinitionTimeouts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcosmosdbsqlroledefinition"

&dataazurermcosmosdbsqlroledefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition#read DataAzurermCosmosdbSqlRoleDefinition#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/cosmosdb_sql_role_definition#read DataAzurermCosmosdbSqlRoleDefinition#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCosmosdbSqlRoleDefinitionPermissionsList <a name="DataAzurermCosmosdbSqlRoleDefinitionPermissionsList" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcosmosdbsqlroledefinition"

dataazurermcosmosdbsqlroledefinition.NewDataAzurermCosmosdbSqlRoleDefinitionPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermCosmosdbSqlRoleDefinitionPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.get"></a>

```go
func Get(index *f64) DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference <a name="DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcosmosdbsqlroledefinition"

dataazurermcosmosdbsqlroledefinition.NewDataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActions">DataActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions">DataAzurermCosmosdbSqlRoleDefinitionPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataActions`<sup>Required</sup> <a name="DataActions" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActions"></a>

```go
func DataActions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermCosmosdbSqlRoleDefinitionPermissions
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions">DataAzurermCosmosdbSqlRoleDefinitionPermissions</a>

---


### DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference <a name="DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermcosmosdbsqlroledefinition"

dataazurermcosmosdbsqlroledefinition.NewDataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



