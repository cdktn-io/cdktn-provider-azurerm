# `dataProtectionBackupInstanceCosmosdbAccount` Submodule <a name="`dataProtectionBackupInstanceCosmosdbAccount` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstanceCosmosdbAccount <a name="DataProtectionBackupInstanceCosmosdbAccount" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account azurerm_data_protection_backup_instance_cosmosdb_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackupinstancecosmosdbaccount"

dataprotectionbackupinstancecosmosdbaccount.NewDataProtectionBackupInstanceCosmosdbAccount(scope Construct, id *string, config DataProtectionBackupInstanceCosmosdbAccountConfig) DataProtectionBackupInstanceCosmosdbAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig">DataProtectionBackupInstanceCosmosdbAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig">DataProtectionBackupInstanceCosmosdbAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.putTimeouts"></a>

```go
func PutTimeouts(value DataProtectionBackupInstanceCosmosdbAccountTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts">DataProtectionBackupInstanceCosmosdbAccountTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupInstanceCosmosdbAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackupinstancecosmosdbaccount"

dataprotectionbackupinstancecosmosdbaccount.DataProtectionBackupInstanceCosmosdbAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackupinstancecosmosdbaccount"

dataprotectionbackupinstancecosmosdbaccount.DataProtectionBackupInstanceCosmosdbAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackupinstancecosmosdbaccount"

dataprotectionbackupinstancecosmosdbaccount.DataProtectionBackupInstanceCosmosdbAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackupinstancecosmosdbaccount"

dataprotectionbackupinstancecosmosdbaccount.DataProtectionBackupInstanceCosmosdbAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataProtectionBackupInstanceCosmosdbAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataProtectionBackupInstanceCosmosdbAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataProtectionBackupInstanceCosmosdbAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstanceCosmosdbAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.protectionState">ProtectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference">DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.cosmosdbAccountIdInput">CosmosdbAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupPolicyCosmosdbAccountIdInput">DataProtectionBackupPolicyCosmosdbAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupVaultIdInput">DataProtectionBackupVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.cosmosdbAccountId">CosmosdbAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupPolicyCosmosdbAccountId">DataProtectionBackupPolicyCosmosdbAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProtectionState`<sup>Required</sup> <a name="ProtectionState" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.protectionState"></a>

```go
func ProtectionState() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.timeouts"></a>

```go
func Timeouts() DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference">DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference</a>

---

##### `CosmosdbAccountIdInput`<sup>Optional</sup> <a name="CosmosdbAccountIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.cosmosdbAccountIdInput"></a>

```go
func CosmosdbAccountIdInput() *string
```

- *Type:* *string

---

##### `DataProtectionBackupPolicyCosmosdbAccountIdInput`<sup>Optional</sup> <a name="DataProtectionBackupPolicyCosmosdbAccountIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupPolicyCosmosdbAccountIdInput"></a>

```go
func DataProtectionBackupPolicyCosmosdbAccountIdInput() *string
```

- *Type:* *string

---

##### `DataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="DataProtectionBackupVaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupVaultIdInput"></a>

```go
func DataProtectionBackupVaultIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CosmosdbAccountId`<sup>Required</sup> <a name="CosmosdbAccountId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.cosmosdbAccountId"></a>

```go
func CosmosdbAccountId() *string
```

- *Type:* *string

---

##### `DataProtectionBackupPolicyCosmosdbAccountId`<sup>Required</sup> <a name="DataProtectionBackupPolicyCosmosdbAccountId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupPolicyCosmosdbAccountId"></a>

```go
func DataProtectionBackupPolicyCosmosdbAccountId() *string
```

- *Type:* *string

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.dataProtectionBackupVaultId"></a>

```go
func DataProtectionBackupVaultId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstanceCosmosdbAccountConfig <a name="DataProtectionBackupInstanceCosmosdbAccountConfig" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackupinstancecosmosdbaccount"

&dataprotectionbackupinstancecosmosdbaccount.DataProtectionBackupInstanceCosmosdbAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CosmosdbAccountId: *string,
	DataProtectionBackupPolicyCosmosdbAccountId: *string,
	DataProtectionBackupVaultId: *string,
	Location: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.cosmosdbAccountId">CosmosdbAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#cosmosdb_account_id DataProtectionBackupInstanceCosmosdbAccount#cosmosdb_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.dataProtectionBackupPolicyCosmosdbAccountId">DataProtectionBackupPolicyCosmosdbAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#data_protection_backup_policy_cosmosdb_account_id DataProtectionBackupInstanceCosmosdbAccount#data_protection_backup_policy_cosmosdb_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupInstanceCosmosdbAccount#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#location DataProtectionBackupInstanceCosmosdbAccount#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#name DataProtectionBackupInstanceCosmosdbAccount#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#id DataProtectionBackupInstanceCosmosdbAccount#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts">DataProtectionBackupInstanceCosmosdbAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CosmosdbAccountId`<sup>Required</sup> <a name="CosmosdbAccountId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.cosmosdbAccountId"></a>

```go
CosmosdbAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#cosmosdb_account_id DataProtectionBackupInstanceCosmosdbAccount#cosmosdb_account_id}.

---

##### `DataProtectionBackupPolicyCosmosdbAccountId`<sup>Required</sup> <a name="DataProtectionBackupPolicyCosmosdbAccountId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.dataProtectionBackupPolicyCosmosdbAccountId"></a>

```go
DataProtectionBackupPolicyCosmosdbAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#data_protection_backup_policy_cosmosdb_account_id DataProtectionBackupInstanceCosmosdbAccount#data_protection_backup_policy_cosmosdb_account_id}.

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.dataProtectionBackupVaultId"></a>

```go
DataProtectionBackupVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupInstanceCosmosdbAccount#data_protection_backup_vault_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#location DataProtectionBackupInstanceCosmosdbAccount#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#name DataProtectionBackupInstanceCosmosdbAccount#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#id DataProtectionBackupInstanceCosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountConfig.property.timeouts"></a>

```go
Timeouts DataProtectionBackupInstanceCosmosdbAccountTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts">DataProtectionBackupInstanceCosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#timeouts DataProtectionBackupInstanceCosmosdbAccount#timeouts}

---

### DataProtectionBackupInstanceCosmosdbAccountTimeouts <a name="DataProtectionBackupInstanceCosmosdbAccountTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackupinstancecosmosdbaccount"

&dataprotectionbackupinstancecosmosdbaccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#create DataProtectionBackupInstanceCosmosdbAccount#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#delete DataProtectionBackupInstanceCosmosdbAccount#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#read DataProtectionBackupInstanceCosmosdbAccount#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#update DataProtectionBackupInstanceCosmosdbAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#create DataProtectionBackupInstanceCosmosdbAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#delete DataProtectionBackupInstanceCosmosdbAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#read DataProtectionBackupInstanceCosmosdbAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.14.0/docs/resources/data_protection_backup_instance_cosmosdb_account#update DataProtectionBackupInstanceCosmosdbAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference <a name="DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackupinstancecosmosdbaccount"

dataprotectionbackupinstancecosmosdbaccount.NewDataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceCosmosdbAccount.DataProtectionBackupInstanceCosmosdbAccountTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



