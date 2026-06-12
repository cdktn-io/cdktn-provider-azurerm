# `dataProtectionBackupPolicyDataLakeStorage` Submodule <a name="`dataProtectionBackupPolicyDataLakeStorage` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyDataLakeStorage <a name="DataProtectionBackupPolicyDataLakeStorage" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage azurerm_data_protection_backup_policy_data_lake_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataprotectionbackuppolicydatalakestorage"

dataprotectionbackuppolicydatalakestorage.NewDataProtectionBackupPolicyDataLakeStorage(scope Construct, id *string, config DataProtectionBackupPolicyDataLakeStorageConfig) DataProtectionBackupPolicyDataLakeStorage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig">DataProtectionBackupPolicyDataLakeStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig">DataProtectionBackupPolicyDataLakeStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putRetentionRule">PutRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetRetentionRule">ResetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRetentionRule` <a name="PutRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putRetentionRule"></a>

```go
func PutRetentionRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putRetentionRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putTimeouts"></a>

```go
func PutTimeouts(value DataProtectionBackupPolicyDataLakeStorageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetId"></a>

```go
func ResetId()
```

##### `ResetRetentionRule` <a name="ResetRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetRetentionRule"></a>

```go
func ResetRetentionRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupPolicyDataLakeStorage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataprotectionbackuppolicydatalakestorage"

dataprotectionbackuppolicydatalakestorage.DataProtectionBackupPolicyDataLakeStorage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataprotectionbackuppolicydatalakestorage"

dataprotectionbackuppolicydatalakestorage.DataProtectionBackupPolicyDataLakeStorage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataprotectionbackuppolicydatalakestorage"

dataprotectionbackuppolicydatalakestorage.DataProtectionBackupPolicyDataLakeStorage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataprotectionbackuppolicydatalakestorage"

dataprotectionbackuppolicydatalakestorage.DataProtectionBackupPolicyDataLakeStorage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataProtectionBackupPolicyDataLakeStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataProtectionBackupPolicyDataLakeStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataProtectionBackupPolicyDataLakeStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyDataLakeStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.retentionRule">RetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList">DataProtectionBackupPolicyDataLakeStorageRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference">DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.backupScheduleInput">BackupScheduleInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dataProtectionBackupVaultIdInput">DataProtectionBackupVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.defaultRetentionDurationInput">DefaultRetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.retentionRuleInput">RetentionRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.backupSchedule">BackupSchedule</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.defaultRetentionDuration">DefaultRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RetentionRule`<sup>Required</sup> <a name="RetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.retentionRule"></a>

```go
func RetentionRule() DataProtectionBackupPolicyDataLakeStorageRetentionRuleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList">DataProtectionBackupPolicyDataLakeStorageRetentionRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeouts"></a>

```go
func Timeouts() DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference">DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference</a>

---

##### `BackupScheduleInput`<sup>Optional</sup> <a name="BackupScheduleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.backupScheduleInput"></a>

```go
func BackupScheduleInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="DataProtectionBackupVaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dataProtectionBackupVaultIdInput"></a>

```go
func DataProtectionBackupVaultIdInput() *string
```

- *Type:* *string

---

##### `DefaultRetentionDurationInput`<sup>Optional</sup> <a name="DefaultRetentionDurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.defaultRetentionDurationInput"></a>

```go
func DefaultRetentionDurationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RetentionRuleInput`<sup>Optional</sup> <a name="RetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.retentionRuleInput"></a>

```go
func RetentionRuleInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `BackupSchedule`<sup>Required</sup> <a name="BackupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.backupSchedule"></a>

```go
func BackupSchedule() *[]*string
```

- *Type:* *[]*string

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.dataProtectionBackupVaultId"></a>

```go
func DataProtectionBackupVaultId() *string
```

- *Type:* *string

---

##### `DefaultRetentionDuration`<sup>Required</sup> <a name="DefaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.defaultRetentionDuration"></a>

```go
func DefaultRetentionDuration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyDataLakeStorageConfig <a name="DataProtectionBackupPolicyDataLakeStorageConfig" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataprotectionbackuppolicydatalakestorage"

&dataprotectionbackuppolicydatalakestorage.DataProtectionBackupPolicyDataLakeStorageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BackupSchedule: *[]*string,
	DataProtectionBackupVaultId: *string,
	DefaultRetentionDuration: *string,
	Name: *string,
	Id: *string,
	RetentionRule: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.backupSchedule">BackupSchedule</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#backup_schedule DataProtectionBackupPolicyDataLakeStorage#backup_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupPolicyDataLakeStorage#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.defaultRetentionDuration">DefaultRetentionDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#default_retention_duration DataProtectionBackupPolicyDataLakeStorage#default_retention_duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#id DataProtectionBackupPolicyDataLakeStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.retentionRule">RetentionRule</a></code> | <code>interface{}</code> | retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#time_zone DataProtectionBackupPolicyDataLakeStorage#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupSchedule`<sup>Required</sup> <a name="BackupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.backupSchedule"></a>

```go
BackupSchedule *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#backup_schedule DataProtectionBackupPolicyDataLakeStorage#backup_schedule}.

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.dataProtectionBackupVaultId"></a>

```go
DataProtectionBackupVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupPolicyDataLakeStorage#data_protection_backup_vault_id}.

---

##### `DefaultRetentionDuration`<sup>Required</sup> <a name="DefaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.defaultRetentionDuration"></a>

```go
DefaultRetentionDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#default_retention_duration DataProtectionBackupPolicyDataLakeStorage#default_retention_duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#id DataProtectionBackupPolicyDataLakeStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionRule`<sup>Optional</sup> <a name="RetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.retentionRule"></a>

```go
RetentionRule interface{}
```

- *Type:* interface{}

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#retention_rule DataProtectionBackupPolicyDataLakeStorage#retention_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.timeouts"></a>

```go
Timeouts DataProtectionBackupPolicyDataLakeStorageTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts">DataProtectionBackupPolicyDataLakeStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#timeouts DataProtectionBackupPolicyDataLakeStorage#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#time_zone DataProtectionBackupPolicyDataLakeStorage#time_zone}.

---

### DataProtectionBackupPolicyDataLakeStorageRetentionRule <a name="DataProtectionBackupPolicyDataLakeStorageRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataprotectionbackuppolicydatalakestorage"

&dataprotectionbackuppolicydatalakestorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule {
	Duration: *string,
	Name: *string,
	AbsoluteCriteria: *string,
	DaysOfWeek: *[]*string,
	MonthsOfYear: *[]*string,
	ScheduledBackupTimes: *[]*string,
	WeeksOfMonth: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#duration DataProtectionBackupPolicyDataLakeStorage#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#absolute_criteria DataProtectionBackupPolicyDataLakeStorage#absolute_criteria}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#days_of_week DataProtectionBackupPolicyDataLakeStorage#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.monthsOfYear">MonthsOfYear</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#months_of_year DataProtectionBackupPolicyDataLakeStorage#months_of_year}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#scheduled_backup_times DataProtectionBackupPolicyDataLakeStorage#scheduled_backup_times}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#weeks_of_month DataProtectionBackupPolicyDataLakeStorage#weeks_of_month}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#duration DataProtectionBackupPolicyDataLakeStorage#duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}.

---

##### `AbsoluteCriteria`<sup>Optional</sup> <a name="AbsoluteCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.absoluteCriteria"></a>

```go
AbsoluteCriteria *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#absolute_criteria DataProtectionBackupPolicyDataLakeStorage#absolute_criteria}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#days_of_week DataProtectionBackupPolicyDataLakeStorage#days_of_week}.

---

##### `MonthsOfYear`<sup>Optional</sup> <a name="MonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.monthsOfYear"></a>

```go
MonthsOfYear *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#months_of_year DataProtectionBackupPolicyDataLakeStorage#months_of_year}.

---

##### `ScheduledBackupTimes`<sup>Optional</sup> <a name="ScheduledBackupTimes" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.scheduledBackupTimes"></a>

```go
ScheduledBackupTimes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#scheduled_backup_times DataProtectionBackupPolicyDataLakeStorage#scheduled_backup_times}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRule.property.weeksOfMonth"></a>

```go
WeeksOfMonth *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#weeks_of_month DataProtectionBackupPolicyDataLakeStorage#weeks_of_month}.

---

### DataProtectionBackupPolicyDataLakeStorageTimeouts <a name="DataProtectionBackupPolicyDataLakeStorageTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataprotectionbackuppolicydatalakestorage"

&dataprotectionbackuppolicydatalakestorage.DataProtectionBackupPolicyDataLakeStorageTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#create DataProtectionBackupPolicyDataLakeStorage#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#delete DataProtectionBackupPolicyDataLakeStorage#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#read DataProtectionBackupPolicyDataLakeStorage#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#create DataProtectionBackupPolicyDataLakeStorage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#delete DataProtectionBackupPolicyDataLakeStorage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_protection_backup_policy_data_lake_storage#read DataProtectionBackupPolicyDataLakeStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyDataLakeStorageRetentionRuleList <a name="DataProtectionBackupPolicyDataLakeStorageRetentionRuleList" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataprotectionbackuppolicydatalakestorage"

dataprotectionbackuppolicydatalakestorage.NewDataProtectionBackupPolicyDataLakeStorageRetentionRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataProtectionBackupPolicyDataLakeStorageRetentionRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.get"></a>

```go
func Get(index *f64) DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference <a name="DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataprotectionbackuppolicydatalakestorage"

dataprotectionbackuppolicydatalakestorage.NewDataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetAbsoluteCriteria">ResetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetMonthsOfYear">ResetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetScheduledBackupTimes">ResetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsoluteCriteria` <a name="ResetAbsoluteCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetAbsoluteCriteria"></a>

```go
func ResetAbsoluteCriteria()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetMonthsOfYear` <a name="ResetMonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetMonthsOfYear"></a>

```go
func ResetMonthsOfYear()
```

##### `ResetScheduledBackupTimes` <a name="ResetScheduledBackupTimes" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetScheduledBackupTimes"></a>

```go
func ResetScheduledBackupTimes()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.resetWeeksOfMonth"></a>

```go
func ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.absoluteCriteriaInput">AbsoluteCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.monthsOfYearInput">MonthsOfYearInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.scheduledBackupTimesInput">ScheduledBackupTimesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.monthsOfYear">MonthsOfYear</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsoluteCriteriaInput`<sup>Optional</sup> <a name="AbsoluteCriteriaInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.absoluteCriteriaInput"></a>

```go
func AbsoluteCriteriaInput() *string
```

- *Type:* *string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `MonthsOfYearInput`<sup>Optional</sup> <a name="MonthsOfYearInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.monthsOfYearInput"></a>

```go
func MonthsOfYearInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScheduledBackupTimesInput`<sup>Optional</sup> <a name="ScheduledBackupTimesInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.scheduledBackupTimesInput"></a>

```go
func ScheduledBackupTimesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.weeksOfMonthInput"></a>

```go
func WeeksOfMonthInput() *[]*string
```

- *Type:* *[]*string

---

##### `AbsoluteCriteria`<sup>Required</sup> <a name="AbsoluteCriteria" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.absoluteCriteria"></a>

```go
func AbsoluteCriteria() *string
```

- *Type:* *string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `MonthsOfYear`<sup>Required</sup> <a name="MonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.monthsOfYear"></a>

```go
func MonthsOfYear() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScheduledBackupTimes`<sup>Required</sup> <a name="ScheduledBackupTimes" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.scheduledBackupTimes"></a>

```go
func ScheduledBackupTimes() *[]*string
```

- *Type:* *[]*string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference <a name="DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/dataprotectionbackuppolicydatalakestorage"

dataprotectionbackuppolicydatalakestorage.NewDataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyDataLakeStorage.DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



