# `dataProtectionBackupInstanceDataLakeStorage` Submodule <a name="`dataProtectionBackupInstanceDataLakeStorage` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstanceDataLakeStorage <a name="DataProtectionBackupInstanceDataLakeStorage" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage azurerm_data_protection_backup_instance_data_lake_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataprotectionbackupinstancedatalakestorage"

dataprotectionbackupinstancedatalakestorage.NewDataProtectionBackupInstanceDataLakeStorage(scope Construct, id *string, config DataProtectionBackupInstanceDataLakeStorageConfig) DataProtectionBackupInstanceDataLakeStorage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig">DataProtectionBackupInstanceDataLakeStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig">DataProtectionBackupInstanceDataLakeStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.putTimeouts"></a>

```go
func PutTimeouts(value DataProtectionBackupInstanceDataLakeStorageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupInstanceDataLakeStorage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataprotectionbackupinstancedatalakestorage"

dataprotectionbackupinstancedatalakestorage.DataProtectionBackupInstanceDataLakeStorage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataprotectionbackupinstancedatalakestorage"

dataprotectionbackupinstancedatalakestorage.DataProtectionBackupInstanceDataLakeStorage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataprotectionbackupinstancedatalakestorage"

dataprotectionbackupinstancedatalakestorage.DataProtectionBackupInstanceDataLakeStorage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataprotectionbackupinstancedatalakestorage"

dataprotectionbackupinstancedatalakestorage.DataProtectionBackupInstanceDataLakeStorage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataProtectionBackupInstanceDataLakeStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataProtectionBackupInstanceDataLakeStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataProtectionBackupInstanceDataLakeStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstanceDataLakeStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.protectionState">ProtectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference">DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.backupPolicyDataLakeStorageIdInput">BackupPolicyDataLakeStorageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dataProtectionBackupVaultIdInput">DataProtectionBackupVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageContainerNamesInput">StorageContainerNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.backupPolicyDataLakeStorageId">BackupPolicyDataLakeStorageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageContainerNames">StorageContainerNames</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProtectionState`<sup>Required</sup> <a name="ProtectionState" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.protectionState"></a>

```go
func ProtectionState() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.timeouts"></a>

```go
func Timeouts() DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference">DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference</a>

---

##### `BackupPolicyDataLakeStorageIdInput`<sup>Optional</sup> <a name="BackupPolicyDataLakeStorageIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.backupPolicyDataLakeStorageIdInput"></a>

```go
func BackupPolicyDataLakeStorageIdInput() *string
```

- *Type:* *string

---

##### `DataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="DataProtectionBackupVaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dataProtectionBackupVaultIdInput"></a>

```go
func DataProtectionBackupVaultIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `StorageContainerNamesInput`<sup>Optional</sup> <a name="StorageContainerNamesInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageContainerNamesInput"></a>

```go
func StorageContainerNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPolicyDataLakeStorageId`<sup>Required</sup> <a name="BackupPolicyDataLakeStorageId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.backupPolicyDataLakeStorageId"></a>

```go
func BackupPolicyDataLakeStorageId() *string
```

- *Type:* *string

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.dataProtectionBackupVaultId"></a>

```go
func DataProtectionBackupVaultId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `StorageContainerNames`<sup>Required</sup> <a name="StorageContainerNames" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.storageContainerNames"></a>

```go
func StorageContainerNames() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstanceDataLakeStorageConfig <a name="DataProtectionBackupInstanceDataLakeStorageConfig" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataprotectionbackupinstancedatalakestorage"

&dataprotectionbackupinstancedatalakestorage.DataProtectionBackupInstanceDataLakeStorageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BackupPolicyDataLakeStorageId: *string,
	DataProtectionBackupVaultId: *string,
	Location: *string,
	Name: *string,
	StorageAccountId: *string,
	StorageContainerNames: *[]*string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.backupPolicyDataLakeStorageId">BackupPolicyDataLakeStorageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#backup_policy_data_lake_storage_id DataProtectionBackupInstanceDataLakeStorage#backup_policy_data_lake_storage_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupInstanceDataLakeStorage#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#location DataProtectionBackupInstanceDataLakeStorage#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#name DataProtectionBackupInstanceDataLakeStorage#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#storage_account_id DataProtectionBackupInstanceDataLakeStorage#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.storageContainerNames">StorageContainerNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#storage_container_names DataProtectionBackupInstanceDataLakeStorage#storage_container_names}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#id DataProtectionBackupInstanceDataLakeStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPolicyDataLakeStorageId`<sup>Required</sup> <a name="BackupPolicyDataLakeStorageId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.backupPolicyDataLakeStorageId"></a>

```go
BackupPolicyDataLakeStorageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#backup_policy_data_lake_storage_id DataProtectionBackupInstanceDataLakeStorage#backup_policy_data_lake_storage_id}.

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.dataProtectionBackupVaultId"></a>

```go
DataProtectionBackupVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupInstanceDataLakeStorage#data_protection_backup_vault_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#location DataProtectionBackupInstanceDataLakeStorage#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#name DataProtectionBackupInstanceDataLakeStorage#name}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#storage_account_id DataProtectionBackupInstanceDataLakeStorage#storage_account_id}.

---

##### `StorageContainerNames`<sup>Required</sup> <a name="StorageContainerNames" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.storageContainerNames"></a>

```go
StorageContainerNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#storage_container_names DataProtectionBackupInstanceDataLakeStorage#storage_container_names}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#id DataProtectionBackupInstanceDataLakeStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageConfig.property.timeouts"></a>

```go
Timeouts DataProtectionBackupInstanceDataLakeStorageTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts">DataProtectionBackupInstanceDataLakeStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#timeouts DataProtectionBackupInstanceDataLakeStorage#timeouts}

---

### DataProtectionBackupInstanceDataLakeStorageTimeouts <a name="DataProtectionBackupInstanceDataLakeStorageTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataprotectionbackupinstancedatalakestorage"

&dataprotectionbackupinstancedatalakestorage.DataProtectionBackupInstanceDataLakeStorageTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#create DataProtectionBackupInstanceDataLakeStorage#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#delete DataProtectionBackupInstanceDataLakeStorage#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#read DataProtectionBackupInstanceDataLakeStorage#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#update DataProtectionBackupInstanceDataLakeStorage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#create DataProtectionBackupInstanceDataLakeStorage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#delete DataProtectionBackupInstanceDataLakeStorage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#read DataProtectionBackupInstanceDataLakeStorage#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/data_protection_backup_instance_data_lake_storage#update DataProtectionBackupInstanceDataLakeStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference <a name="DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/dataprotectionbackupinstancedatalakestorage"

dataprotectionbackupinstancedatalakestorage.NewDataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupInstanceDataLakeStorage.DataProtectionBackupInstanceDataLakeStorageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



