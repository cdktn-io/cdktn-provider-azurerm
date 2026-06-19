# `dataAzurermOracleDatabaseSystemVersions` Submodule <a name="`dataAzurermOracleDatabaseSystemVersions` Submodule" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleDatabaseSystemVersions <a name="DataAzurermOracleDatabaseSystemVersions" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions azurerm_oracle_database_system_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracledatabasesystemversions"

dataazurermoracledatabasesystemversions.NewDataAzurermOracleDatabaseSystemVersions(scope Construct, id *string, config DataAzurermOracleDatabaseSystemVersionsConfig) DataAzurermOracleDatabaseSystemVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig">DataAzurermOracleDatabaseSystemVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig">DataAzurermOracleDatabaseSystemVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSoftwareImageSupported">ResetDatabaseSoftwareImageSupported</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSystemShape">ResetDatabaseSystemShape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetShapeFamily">ResetShapeFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetStorageManagement">ResetStorageManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetUpgradeSupported">ResetUpgradeSupported</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermOracleDatabaseSystemVersionsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

---

##### `ResetDatabaseSoftwareImageSupported` <a name="ResetDatabaseSoftwareImageSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSoftwareImageSupported"></a>

```go
func ResetDatabaseSoftwareImageSupported()
```

##### `ResetDatabaseSystemShape` <a name="ResetDatabaseSystemShape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSystemShape"></a>

```go
func ResetDatabaseSystemShape()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetId"></a>

```go
func ResetId()
```

##### `ResetShapeFamily` <a name="ResetShapeFamily" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetShapeFamily"></a>

```go
func ResetShapeFamily()
```

##### `ResetStorageManagement` <a name="ResetStorageManagement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetStorageManagement"></a>

```go
func ResetStorageManagement()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpgradeSupported` <a name="ResetUpgradeSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetUpgradeSupported"></a>

```go
func ResetUpgradeSupported()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermOracleDatabaseSystemVersions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracledatabasesystemversions"

dataazurermoracledatabasesystemversions.DataAzurermOracleDatabaseSystemVersions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracledatabasesystemversions"

dataazurermoracledatabasesystemversions.DataAzurermOracleDatabaseSystemVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracledatabasesystemversions"

dataazurermoracledatabasesystemversions.DataAzurermOracleDatabaseSystemVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracledatabasesystemversions"

dataazurermoracledatabasesystemversions.DataAzurermOracleDatabaseSystemVersions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermOracleDatabaseSystemVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermOracleDatabaseSystemVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermOracleDatabaseSystemVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleDatabaseSystemVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference">DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.versions">Versions</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList">DataAzurermOracleDatabaseSystemVersionsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupportedInput">DatabaseSoftwareImageSupportedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShapeInput">DatabaseSystemShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamilyInput">ShapeFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagementInput">StorageManagementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupportedInput">UpgradeSupportedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupported">DatabaseSoftwareImageSupported</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShape">DatabaseSystemShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamily">ShapeFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagement">StorageManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupported">UpgradeSupported</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeouts"></a>

```go
func Timeouts() DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference">DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference</a>

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.versions"></a>

```go
func Versions() DataAzurermOracleDatabaseSystemVersionsVersionsList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList">DataAzurermOracleDatabaseSystemVersionsVersionsList</a>

---

##### `DatabaseSoftwareImageSupportedInput`<sup>Optional</sup> <a name="DatabaseSoftwareImageSupportedInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupportedInput"></a>

```go
func DatabaseSoftwareImageSupportedInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseSystemShapeInput`<sup>Optional</sup> <a name="DatabaseSystemShapeInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShapeInput"></a>

```go
func DatabaseSystemShapeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ShapeFamilyInput`<sup>Optional</sup> <a name="ShapeFamilyInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamilyInput"></a>

```go
func ShapeFamilyInput() *string
```

- *Type:* *string

---

##### `StorageManagementInput`<sup>Optional</sup> <a name="StorageManagementInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagementInput"></a>

```go
func StorageManagementInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpgradeSupportedInput`<sup>Optional</sup> <a name="UpgradeSupportedInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupportedInput"></a>

```go
func UpgradeSupportedInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseSoftwareImageSupported`<sup>Required</sup> <a name="DatabaseSoftwareImageSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupported"></a>

```go
func DatabaseSoftwareImageSupported() interface{}
```

- *Type:* interface{}

---

##### `DatabaseSystemShape`<sup>Required</sup> <a name="DatabaseSystemShape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShape"></a>

```go
func DatabaseSystemShape() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ShapeFamily`<sup>Required</sup> <a name="ShapeFamily" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamily"></a>

```go
func ShapeFamily() *string
```

- *Type:* *string

---

##### `StorageManagement`<sup>Required</sup> <a name="StorageManagement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagement"></a>

```go
func StorageManagement() *string
```

- *Type:* *string

---

##### `UpgradeSupported`<sup>Required</sup> <a name="UpgradeSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupported"></a>

```go
func UpgradeSupported() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleDatabaseSystemVersionsConfig <a name="DataAzurermOracleDatabaseSystemVersionsConfig" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracledatabasesystemversions"

&dataazurermoracledatabasesystemversions.DataAzurermOracleDatabaseSystemVersionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	DatabaseSoftwareImageSupported: interface{},
	DatabaseSystemShape: *string,
	Id: *string,
	ShapeFamily: *string,
	StorageManagement: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts,
	UpgradeSupported: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSoftwareImageSupported">DatabaseSoftwareImageSupported</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSystemShape">DatabaseSystemShape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.shapeFamily">ShapeFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.storageManagement">StorageManagement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.upgradeSupported">UpgradeSupported</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}.

---

##### `DatabaseSoftwareImageSupported`<sup>Optional</sup> <a name="DatabaseSoftwareImageSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSoftwareImageSupported"></a>

```go
DatabaseSoftwareImageSupported interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}.

---

##### `DatabaseSystemShape`<sup>Optional</sup> <a name="DatabaseSystemShape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSystemShape"></a>

```go
DatabaseSystemShape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShapeFamily`<sup>Optional</sup> <a name="ShapeFamily" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.shapeFamily"></a>

```go
ShapeFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}.

---

##### `StorageManagement`<sup>Optional</sup> <a name="StorageManagement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.storageManagement"></a>

```go
StorageManagement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.timeouts"></a>

```go
Timeouts DataAzurermOracleDatabaseSystemVersionsTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#timeouts DataAzurermOracleDatabaseSystemVersions#timeouts}

---

##### `UpgradeSupported`<sup>Optional</sup> <a name="UpgradeSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.upgradeSupported"></a>

```go
UpgradeSupported interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}.

---

### DataAzurermOracleDatabaseSystemVersionsTimeouts <a name="DataAzurermOracleDatabaseSystemVersionsTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracledatabasesystemversions"

&dataazurermoracledatabasesystemversions.DataAzurermOracleDatabaseSystemVersionsTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#read DataAzurermOracleDatabaseSystemVersions#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/oracle_database_system_versions#read DataAzurermOracleDatabaseSystemVersions#read}.

---

### DataAzurermOracleDatabaseSystemVersionsVersions <a name="DataAzurermOracleDatabaseSystemVersionsVersions" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracledatabasesystemversions"

&dataazurermoracledatabasesystemversions.DataAzurermOracleDatabaseSystemVersionsVersions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference <a name="DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracledatabasesystemversions"

dataazurermoracledatabasesystemversions.NewDataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzurermOracleDatabaseSystemVersionsVersionsList <a name="DataAzurermOracleDatabaseSystemVersionsVersionsList" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracledatabasesystemversions"

dataazurermoracledatabasesystemversions.NewDataAzurermOracleDatabaseSystemVersionsVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOracleDatabaseSystemVersionsVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.get"></a>

```go
func Get(index *f64) DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference <a name="DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracledatabasesystemversions"

dataazurermoracledatabasesystemversions.NewDataAzurermOracleDatabaseSystemVersionsVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.latestVersion">LatestVersion</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.pluggableDatabaseSupported">PluggableDatabaseSupported</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions">DataAzurermOracleDatabaseSystemVersionsVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.latestVersion"></a>

```go
func LatestVersion() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PluggableDatabaseSupported`<sup>Required</sup> <a name="PluggableDatabaseSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.pluggableDatabaseSupported"></a>

```go
func PluggableDatabaseSupported() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOracleDatabaseSystemVersionsVersions
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions">DataAzurermOracleDatabaseSystemVersionsVersions</a>

---



