# `dataAzurermOracleAdbsCharacterSets` Submodule <a name="`dataAzurermOracleAdbsCharacterSets` Submodule" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAdbsCharacterSets <a name="DataAzurermOracleAdbsCharacterSets" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_adbs_character_sets azurerm_oracle_adbs_character_sets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracleadbscharactersets"

dataazurermoracleadbscharactersets.NewDataAzurermOracleAdbsCharacterSets(scope Construct, id *string, config DataAzurermOracleAdbsCharacterSetsConfig) DataAzurermOracleAdbsCharacterSets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig">DataAzurermOracleAdbsCharacterSetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig">DataAzurermOracleAdbsCharacterSetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermOracleAdbsCharacterSetsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeouts">DataAzurermOracleAdbsCharacterSetsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermOracleAdbsCharacterSets resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracleadbscharactersets"

dataazurermoracleadbscharactersets.DataAzurermOracleAdbsCharacterSets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracleadbscharactersets"

dataazurermoracleadbscharactersets.DataAzurermOracleAdbsCharacterSets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracleadbscharactersets"

dataazurermoracleadbscharactersets.DataAzurermOracleAdbsCharacterSets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracleadbscharactersets"

dataazurermoracleadbscharactersets.DataAzurermOracleAdbsCharacterSets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAzurermOracleAdbsCharacterSets resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermOracleAdbsCharacterSets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermOracleAdbsCharacterSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_adbs_character_sets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAdbsCharacterSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.characterSets">CharacterSets</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList">DataAzurermOracleAdbsCharacterSetsCharacterSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference">DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.location">Location</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CharacterSets`<sup>Required</sup> <a name="CharacterSets" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.characterSets"></a>

```go
func CharacterSets() DataAzurermOracleAdbsCharacterSetsCharacterSetsList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList">DataAzurermOracleAdbsCharacterSetsCharacterSetsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.timeouts"></a>

```go
func Timeouts() DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference">DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAdbsCharacterSetsCharacterSets <a name="DataAzurermOracleAdbsCharacterSetsCharacterSets" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracleadbscharactersets"

&dataazurermoracleadbscharactersets.DataAzurermOracleAdbsCharacterSetsCharacterSets {

}
```


### DataAzurermOracleAdbsCharacterSetsConfig <a name="DataAzurermOracleAdbsCharacterSetsConfig" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracleadbscharactersets"

&dataazurermoracleadbscharactersets.DataAzurermOracleAdbsCharacterSetsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_adbs_character_sets#location DataAzurermOracleAdbsCharacterSets#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_adbs_character_sets#id DataAzurermOracleAdbsCharacterSets#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeouts">DataAzurermOracleAdbsCharacterSetsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_adbs_character_sets#location DataAzurermOracleAdbsCharacterSets#location}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_adbs_character_sets#id DataAzurermOracleAdbsCharacterSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsConfig.property.timeouts"></a>

```go
Timeouts DataAzurermOracleAdbsCharacterSetsTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeouts">DataAzurermOracleAdbsCharacterSetsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_adbs_character_sets#timeouts DataAzurermOracleAdbsCharacterSets#timeouts}

---

### DataAzurermOracleAdbsCharacterSetsTimeouts <a name="DataAzurermOracleAdbsCharacterSetsTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracleadbscharactersets"

&dataazurermoracleadbscharactersets.DataAzurermOracleAdbsCharacterSetsTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_adbs_character_sets#read DataAzurermOracleAdbsCharacterSets#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/oracle_adbs_character_sets#read DataAzurermOracleAdbsCharacterSets#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAdbsCharacterSetsCharacterSetsList <a name="DataAzurermOracleAdbsCharacterSetsCharacterSetsList" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracleadbscharactersets"

dataazurermoracleadbscharactersets.NewDataAzurermOracleAdbsCharacterSetsCharacterSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOracleAdbsCharacterSetsCharacterSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.get"></a>

```go
func Get(index *f64) DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference <a name="DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracleadbscharactersets"

dataazurermoracleadbscharactersets.NewDataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSets">DataAzurermOracleAdbsCharacterSetsCharacterSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOracleAdbsCharacterSetsCharacterSets
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsCharacterSets">DataAzurermOracleAdbsCharacterSetsCharacterSets</a>

---


### DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference <a name="DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataazurermoracleadbscharactersets"

dataazurermoracleadbscharactersets.NewDataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsCharacterSets.DataAzurermOracleAdbsCharacterSetsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



