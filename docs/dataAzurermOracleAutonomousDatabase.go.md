# `dataAzurermOracleAutonomousDatabase` Submodule <a name="`dataAzurermOracleAutonomousDatabase` Submodule" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabase <a name="DataAzurermOracleAutonomousDatabase" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_autonomous_database azurerm_oracle_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermoracleautonomousdatabase"

dataazurermoracleautonomousdatabase.NewDataAzurermOracleAutonomousDatabase(scope Construct, id *string, config DataAzurermOracleAutonomousDatabaseConfig) DataAzurermOracleAutonomousDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig">DataAzurermOracleAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig">DataAzurermOracleAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermOracleAutonomousDatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermOracleAutonomousDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermoracleautonomousdatabase"

dataazurermoracleautonomousdatabase.DataAzurermOracleAutonomousDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermoracleautonomousdatabase"

dataazurermoracleautonomousdatabase.DataAzurermOracleAutonomousDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermoracleautonomousdatabase"

dataazurermoracleautonomousdatabase.DataAzurermOracleAutonomousDatabase_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermoracleautonomousdatabase"

dataazurermoracleautonomousdatabase.DataAzurermOracleAutonomousDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermOracleAutonomousDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermOracleAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">ActualUsedDataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.allocatedStorageSizeInTbs">AllocatedStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.allowedIps">AllowedIps</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autoScalingForStorageEnabled">AutoScalingForStorageEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dbNodeStorageSizeInGbs">DbNodeStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.failedDataRecoveryInSeconds">FailedDataRecoveryInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.inMemoryAreaInGbs">InMemoryAreaInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.localDataGuardEnabled">LocalDataGuardEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs">MemoryPerOracleComputeUnitInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nextLongTermBackupTimeStamp">NextLongTermBackupTimeStamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.peerDbId">PeerDbId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.peerDbIds">PeerDbIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.preview">Preview</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.previewVersionWithServiceTermsAccepted">PreviewVersionWithServiceTermsAccepted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpoint">PrivateEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.provisionableCpus">ProvisionableCpus</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.remoteDataGuardEnabled">RemoteDataGuardEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.serviceConsoleUrl">ServiceConsoleUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.supportedRegionsToCloneTo">SupportedRegionsToCloneTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeDataGuardRoleChanged">TimeDataGuardRoleChanged</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase">TimeDeletionOfFreeAutonomousDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeLocalDataGuardEnabledOn">TimeLocalDataGuardEnabledOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeMaintenanceBegin">TimeMaintenanceBegin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeMaintenanceEnd">TimeMaintenanceEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastFailover">TimeOfLastFailover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastRefresh">TimeOfLastRefresh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastRefreshPoint">TimeOfLastRefreshPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastSwitchover">TimeOfLastSwitchover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase">TimeReclamationOfFreeAutonomousDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.usedDataStorageSizeInGbs">UsedDataStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.usedDataStorageSizeInTbs">UsedDataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ActualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="ActualUsedDataStorageSizeInTbs" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```go
func ActualUsedDataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `AllocatedStorageSizeInTbs`<sup>Required</sup> <a name="AllocatedStorageSizeInTbs" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```go
func AllocatedStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `AllowedIps`<sup>Required</sup> <a name="AllowedIps" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.allowedIps"></a>

```go
func AllowedIps() *[]*f64
```

- *Type:* *[]*f64

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autoScalingEnabled"></a>

```go
func AutoScalingEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AutoScalingForStorageEnabled`<sup>Required</sup> <a name="AutoScalingForStorageEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.autoScalingForStorageEnabled"></a>

```go
func AutoScalingForStorageEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.availableUpgradeVersions"></a>

```go
func AvailableUpgradeVersions() *[]*string
```

- *Type:* *[]*string

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```go
func BackupRetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dataStorageSizeInGbs"></a>

```go
func DataStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```go
func DataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeInGbs`<sup>Required</sup> <a name="DbNodeStorageSizeInGbs" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dbNodeStorageSizeInGbs"></a>

```go
func DbNodeStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FailedDataRecoveryInSeconds`<sup>Required</sup> <a name="FailedDataRecoveryInSeconds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.failedDataRecoveryInSeconds"></a>

```go
func FailedDataRecoveryInSeconds() *f64
```

- *Type:* *f64

---

##### `InMemoryAreaInGbs`<sup>Required</sup> <a name="InMemoryAreaInGbs" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.inMemoryAreaInGbs"></a>

```go
func InMemoryAreaInGbs() *f64
```

- *Type:* *f64

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```go
func LocalAdgAutoFailoverMaxDataLossLimit() *f64
```

- *Type:* *f64

---

##### `LocalDataGuardEnabled`<sup>Required</sup> <a name="LocalDataGuardEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.localDataGuardEnabled"></a>

```go
func LocalDataGuardEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LongTermBackupSchedule`<sup>Required</sup> <a name="LongTermBackupSchedule" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.longTermBackupSchedule"></a>

```go
func LongTermBackupSchedule() DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `MemoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGbs" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs"></a>

```go
func MemoryPerOracleComputeUnitInGbs() *f64
```

- *Type:* *f64

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.mtlsConnectionRequired"></a>

```go
func MtlsConnectionRequired() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nationalCharacterSet"></a>

```go
func NationalCharacterSet() *string
```

- *Type:* *string

---

##### `NextLongTermBackupTimeStamp`<sup>Required</sup> <a name="NextLongTermBackupTimeStamp" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nextLongTermBackupTimeStamp"></a>

```go
func NextLongTermBackupTimeStamp() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `PeerDbId`<sup>Required</sup> <a name="PeerDbId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.peerDbId"></a>

```go
func PeerDbId() *string
```

- *Type:* *string

---

##### `PeerDbIds`<sup>Required</sup> <a name="PeerDbIds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.peerDbIds"></a>

```go
func PeerDbIds() *[]*string
```

- *Type:* *[]*string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.preview"></a>

```go
func Preview() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PreviewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="PreviewVersionWithServiceTermsAccepted" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.previewVersionWithServiceTermsAccepted"></a>

```go
func PreviewVersionWithServiceTermsAccepted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpoint"></a>

```go
func PrivateEndpoint() *string
```

- *Type:* *string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpointIp"></a>

```go
func PrivateEndpointIp() *string
```

- *Type:* *string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.privateEndpointLabel"></a>

```go
func PrivateEndpointLabel() *string
```

- *Type:* *string

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.provisionableCpus"></a>

```go
func ProvisionableCpus() *[]*f64
```

- *Type:* *[]*f64

---

##### `RemoteDataGuardEnabled`<sup>Required</sup> <a name="RemoteDataGuardEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.remoteDataGuardEnabled"></a>

```go
func RemoteDataGuardEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ServiceConsoleUrl`<sup>Required</sup> <a name="ServiceConsoleUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.serviceConsoleUrl"></a>

```go
func ServiceConsoleUrl() *string
```

- *Type:* *string

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.sqlWebDeveloperUrl"></a>

```go
func SqlWebDeveloperUrl() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SupportedRegionsToCloneTo`<sup>Required</sup> <a name="SupportedRegionsToCloneTo" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.supportedRegionsToCloneTo"></a>

```go
func SupportedRegionsToCloneTo() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeDataGuardRoleChanged`<sup>Required</sup> <a name="TimeDataGuardRoleChanged" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeDataGuardRoleChanged"></a>

```go
func TimeDataGuardRoleChanged() *string
```

- *Type:* *string

---

##### `TimeDeletionOfFreeAutonomousDatabase`<sup>Required</sup> <a name="TimeDeletionOfFreeAutonomousDatabase" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase"></a>

```go
func TimeDeletionOfFreeAutonomousDatabase() *string
```

- *Type:* *string

---

##### `TimeLocalDataGuardEnabledOn`<sup>Required</sup> <a name="TimeLocalDataGuardEnabledOn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeLocalDataGuardEnabledOn"></a>

```go
func TimeLocalDataGuardEnabledOn() *string
```

- *Type:* *string

---

##### `TimeMaintenanceBegin`<sup>Required</sup> <a name="TimeMaintenanceBegin" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeMaintenanceBegin"></a>

```go
func TimeMaintenanceBegin() *string
```

- *Type:* *string

---

##### `TimeMaintenanceEnd`<sup>Required</sup> <a name="TimeMaintenanceEnd" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeMaintenanceEnd"></a>

```go
func TimeMaintenanceEnd() *string
```

- *Type:* *string

---

##### `TimeOfLastFailover`<sup>Required</sup> <a name="TimeOfLastFailover" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastFailover"></a>

```go
func TimeOfLastFailover() *string
```

- *Type:* *string

---

##### `TimeOfLastRefresh`<sup>Required</sup> <a name="TimeOfLastRefresh" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastRefresh"></a>

```go
func TimeOfLastRefresh() *string
```

- *Type:* *string

---

##### `TimeOfLastRefreshPoint`<sup>Required</sup> <a name="TimeOfLastRefreshPoint" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastRefreshPoint"></a>

```go
func TimeOfLastRefreshPoint() *string
```

- *Type:* *string

---

##### `TimeOfLastSwitchover`<sup>Required</sup> <a name="TimeOfLastSwitchover" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeOfLastSwitchover"></a>

```go
func TimeOfLastSwitchover() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeouts"></a>

```go
func Timeouts() DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `TimeReclamationOfFreeAutonomousDatabase`<sup>Required</sup> <a name="TimeReclamationOfFreeAutonomousDatabase" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase"></a>

```go
func TimeReclamationOfFreeAutonomousDatabase() *string
```

- *Type:* *string

---

##### `UsedDataStorageSizeInGbs`<sup>Required</sup> <a name="UsedDataStorageSizeInGbs" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.usedDataStorageSizeInGbs"></a>

```go
func UsedDataStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `UsedDataStorageSizeInTbs`<sup>Required</sup> <a name="UsedDataStorageSizeInTbs" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.usedDataStorageSizeInTbs"></a>

```go
func UsedDataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseConfig <a name="DataAzurermOracleAutonomousDatabaseConfig" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermoracleautonomousdatabase"

&dataazurermoracleautonomousdatabase.DataAzurermOracleAutonomousDatabaseConfig {
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
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_autonomous_database#name DataAzurermOracleAutonomousDatabase#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_autonomous_database#resource_group_name DataAzurermOracleAutonomousDatabase#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_autonomous_database#id DataAzurermOracleAutonomousDatabase#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_autonomous_database#name DataAzurermOracleAutonomousDatabase#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_autonomous_database#resource_group_name DataAzurermOracleAutonomousDatabase#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_autonomous_database#id DataAzurermOracleAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseConfig.property.timeouts"></a>

```go
Timeouts DataAzurermOracleAutonomousDatabaseTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts">DataAzurermOracleAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_autonomous_database#timeouts DataAzurermOracleAutonomousDatabase#timeouts}

---

### DataAzurermOracleAutonomousDatabaseLongTermBackupSchedule <a name="DataAzurermOracleAutonomousDatabaseLongTermBackupSchedule" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermoracleautonomousdatabase"

&dataazurermoracleautonomousdatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupSchedule {

}
```


### DataAzurermOracleAutonomousDatabaseTimeouts <a name="DataAzurermOracleAutonomousDatabaseTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermoracleautonomousdatabase"

&dataazurermoracleautonomousdatabase.DataAzurermOracleAutonomousDatabaseTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_autonomous_database#read DataAzurermOracleAutonomousDatabase#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/oracle_autonomous_database#read DataAzurermOracleAutonomousDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList <a name="DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermoracleautonomousdatabase"

dataazurermoracleautonomousdatabase.NewDataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermoracleautonomousdatabase"

dataazurermoracleautonomousdatabase.NewDataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">RepeatCadence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">TimeOfBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RepeatCadence`<sup>Required</sup> <a name="RepeatCadence" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```go
func RepeatCadence() *string
```

- *Type:* *string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `TimeOfBackup`<sup>Required</sup> <a name="TimeOfBackup" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```go
func TimeOfBackup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOracleAutonomousDatabaseLongTermBackupSchedule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseLongTermBackupSchedule</a>

---


### DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataazurermoracleautonomousdatabase"

dataazurermoracleautonomousdatabase.NewDataAzurermOracleAutonomousDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabase.DataAzurermOracleAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



