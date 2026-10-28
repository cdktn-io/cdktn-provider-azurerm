# `dataProtectionBackupPolicyCosmosdbAccount` Submodule <a name="`dataProtectionBackupPolicyCosmosdbAccount` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyCosmosdbAccount <a name="DataProtectionBackupPolicyCosmosdbAccount" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account azurerm_data_protection_backup_policy_cosmosdb_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

dataprotectionbackuppolicycosmosdbaccount.NewDataProtectionBackupPolicyCosmosdbAccount(scope Construct, id *string, config DataProtectionBackupPolicyCosmosdbAccountConfig) DataProtectionBackupPolicyCosmosdbAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig">DataProtectionBackupPolicyCosmosdbAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig">DataProtectionBackupPolicyCosmosdbAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putMonthlyRetentionRule">PutMonthlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putWeeklyRetentionRule">PutWeeklyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putYearlyRetentionRule">PutYearlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetBackupFrequency">ResetBackupFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetMonthlyRetentionRule">ResetMonthlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetWeeklyRetentionRule">ResetWeeklyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetYearlyRetentionRule">ResetYearlyRetentionRule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMonthlyRetentionRule` <a name="PutMonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putMonthlyRetentionRule"></a>

```go
func PutMonthlyRetentionRule(value DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putMonthlyRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putTimeouts"></a>

```go
func PutTimeouts(value DataProtectionBackupPolicyCosmosdbAccountTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

---

##### `PutWeeklyRetentionRule` <a name="PutWeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putWeeklyRetentionRule"></a>

```go
func PutWeeklyRetentionRule(value DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putWeeklyRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

---

##### `PutYearlyRetentionRule` <a name="PutYearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putYearlyRetentionRule"></a>

```go
func PutYearlyRetentionRule(value DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.putYearlyRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

---

##### `ResetBackupFrequency` <a name="ResetBackupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetBackupFrequency"></a>

```go
func ResetBackupFrequency()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetMonthlyRetentionRule` <a name="ResetMonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetMonthlyRetentionRule"></a>

```go
func ResetMonthlyRetentionRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWeeklyRetentionRule` <a name="ResetWeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetWeeklyRetentionRule"></a>

```go
func ResetWeeklyRetentionRule()
```

##### `ResetYearlyRetentionRule` <a name="ResetYearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.resetYearlyRetentionRule"></a>

```go
func ResetYearlyRetentionRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupPolicyCosmosdbAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

dataprotectionbackuppolicycosmosdbaccount.DataProtectionBackupPolicyCosmosdbAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

dataprotectionbackuppolicycosmosdbaccount.DataProtectionBackupPolicyCosmosdbAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

dataprotectionbackuppolicycosmosdbaccount.DataProtectionBackupPolicyCosmosdbAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

dataprotectionbackuppolicycosmosdbaccount.DataProtectionBackupPolicyCosmosdbAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataProtectionBackupPolicyCosmosdbAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataProtectionBackupPolicyCosmosdbAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataProtectionBackupPolicyCosmosdbAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyCosmosdbAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.incrementalBackupSchedules">IncrementalBackupSchedules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRule">MonthlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference">DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRule">WeeklyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRule">YearlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequencyInput">BackupFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupScheduleInput">BackupScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultIdInput">DataProtectionBackupVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDurationInput">DefaultRetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRuleInput">MonthlyRetentionRuleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRuleInput">WeeklyRetentionRuleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRuleInput">YearlyRetentionRuleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequency">BackupFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupSchedule">BackupSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDuration">DefaultRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IncrementalBackupSchedules`<sup>Required</sup> <a name="IncrementalBackupSchedules" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.incrementalBackupSchedules"></a>

```go
func IncrementalBackupSchedules() *[]*string
```

- *Type:* *[]*string

---

##### `MonthlyRetentionRule`<sup>Required</sup> <a name="MonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRule"></a>

```go
func MonthlyRetentionRule() DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeouts"></a>

```go
func Timeouts() DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference">DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference</a>

---

##### `WeeklyRetentionRule`<sup>Required</sup> <a name="WeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRule"></a>

```go
func WeeklyRetentionRule() DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference</a>

---

##### `YearlyRetentionRule`<sup>Required</sup> <a name="YearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRule"></a>

```go
func YearlyRetentionRule() DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference</a>

---

##### `BackupFrequencyInput`<sup>Optional</sup> <a name="BackupFrequencyInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequencyInput"></a>

```go
func BackupFrequencyInput() *string
```

- *Type:* *string

---

##### `BackupScheduleInput`<sup>Optional</sup> <a name="BackupScheduleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupScheduleInput"></a>

```go
func BackupScheduleInput() *string
```

- *Type:* *string

---

##### `DataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="DataProtectionBackupVaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultIdInput"></a>

```go
func DataProtectionBackupVaultIdInput() *string
```

- *Type:* *string

---

##### `DefaultRetentionDurationInput`<sup>Optional</sup> <a name="DefaultRetentionDurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDurationInput"></a>

```go
func DefaultRetentionDurationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MonthlyRetentionRuleInput`<sup>Optional</sup> <a name="MonthlyRetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.monthlyRetentionRuleInput"></a>

```go
func MonthlyRetentionRuleInput() DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WeeklyRetentionRuleInput`<sup>Optional</sup> <a name="WeeklyRetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.weeklyRetentionRuleInput"></a>

```go
func WeeklyRetentionRuleInput() DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

---

##### `YearlyRetentionRuleInput`<sup>Optional</sup> <a name="YearlyRetentionRuleInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.yearlyRetentionRuleInput"></a>

```go
func YearlyRetentionRuleInput() DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

---

##### `BackupFrequency`<sup>Required</sup> <a name="BackupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupFrequency"></a>

```go
func BackupFrequency() *string
```

- *Type:* *string

---

##### `BackupSchedule`<sup>Required</sup> <a name="BackupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.backupSchedule"></a>

```go
func BackupSchedule() *string
```

- *Type:* *string

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.dataProtectionBackupVaultId"></a>

```go
func DataProtectionBackupVaultId() *string
```

- *Type:* *string

---

##### `DefaultRetentionDuration`<sup>Required</sup> <a name="DefaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.defaultRetentionDuration"></a>

```go
func DefaultRetentionDuration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyCosmosdbAccountConfig <a name="DataProtectionBackupPolicyCosmosdbAccountConfig" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

&dataprotectionbackuppolicycosmosdbaccount.DataProtectionBackupPolicyCosmosdbAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BackupSchedule: *string,
	DataProtectionBackupVaultId: *string,
	DefaultRetentionDuration: *string,
	Name: *string,
	BackupFrequency: *string,
	Id: *string,
	MonthlyRetentionRule: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts,
	WeeklyRetentionRule: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule,
	YearlyRetentionRule: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupSchedule">BackupSchedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_schedule DataProtectionBackupPolicyCosmosdbAccount#backup_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dataProtectionBackupVaultId">DataProtectionBackupVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupPolicyCosmosdbAccount#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.defaultRetentionDuration">DefaultRetentionDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#default_retention_duration DataProtectionBackupPolicyCosmosdbAccount#default_retention_duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#name DataProtectionBackupPolicyCosmosdbAccount#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupFrequency">BackupFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_frequency DataProtectionBackupPolicyCosmosdbAccount#backup_frequency}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#id DataProtectionBackupPolicyCosmosdbAccount#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.monthlyRetentionRule">MonthlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | monthly_retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.weeklyRetentionRule">WeeklyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | weekly_retention_rule block. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.yearlyRetentionRule">YearlyRetentionRule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | yearly_retention_rule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupSchedule`<sup>Required</sup> <a name="BackupSchedule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupSchedule"></a>

```go
BackupSchedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_schedule DataProtectionBackupPolicyCosmosdbAccount#backup_schedule}.

---

##### `DataProtectionBackupVaultId`<sup>Required</sup> <a name="DataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.dataProtectionBackupVaultId"></a>

```go
DataProtectionBackupVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupPolicyCosmosdbAccount#data_protection_backup_vault_id}.

---

##### `DefaultRetentionDuration`<sup>Required</sup> <a name="DefaultRetentionDuration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.defaultRetentionDuration"></a>

```go
DefaultRetentionDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#default_retention_duration DataProtectionBackupPolicyCosmosdbAccount#default_retention_duration}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#name DataProtectionBackupPolicyCosmosdbAccount#name}.

---

##### `BackupFrequency`<sup>Optional</sup> <a name="BackupFrequency" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.backupFrequency"></a>

```go
BackupFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_frequency DataProtectionBackupPolicyCosmosdbAccount#backup_frequency}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#id DataProtectionBackupPolicyCosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonthlyRetentionRule`<sup>Optional</sup> <a name="MonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.monthlyRetentionRule"></a>

```go
MonthlyRetentionRule DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

monthly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#monthly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#monthly_retention_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.timeouts"></a>

```go
Timeouts DataProtectionBackupPolicyCosmosdbAccountTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts">DataProtectionBackupPolicyCosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#timeouts DataProtectionBackupPolicyCosmosdbAccount#timeouts}

---

##### `WeeklyRetentionRule`<sup>Optional</sup> <a name="WeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.weeklyRetentionRule"></a>

```go
WeeklyRetentionRule DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

weekly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weekly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#weekly_retention_rule}

---

##### `YearlyRetentionRule`<sup>Optional</sup> <a name="YearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountConfig.property.yearlyRetentionRule"></a>

```go
YearlyRetentionRule DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

yearly_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#yearly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#yearly_retention_rule}

---

### DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule <a name="DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

&dataprotectionbackuppolicycosmosdbaccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule {
	Duration: *string,
	DaysOfWeek: *[]*string,
	WeeksOfMonth: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule.property.weeksOfMonth"></a>

```go
WeeksOfMonth *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}.

---

### DataProtectionBackupPolicyCosmosdbAccountTimeouts <a name="DataProtectionBackupPolicyCosmosdbAccountTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

&dataprotectionbackuppolicycosmosdbaccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#create DataProtectionBackupPolicyCosmosdbAccount#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#delete DataProtectionBackupPolicyCosmosdbAccount#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#read DataProtectionBackupPolicyCosmosdbAccount#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#create DataProtectionBackupPolicyCosmosdbAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#delete DataProtectionBackupPolicyCosmosdbAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#read DataProtectionBackupPolicyCosmosdbAccount#read}.

---

### DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule <a name="DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

&dataprotectionbackuppolicycosmosdbaccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule {
	Duration: *string,
	DaysOfWeek: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}.

---

### DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule <a name="DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

&dataprotectionbackuppolicycosmosdbaccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule {
	Duration: *string,
	DaysOfWeek: *[]*string,
	MonthsOfYear: *[]*string,
	WeeksOfMonth: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.monthsOfYear">MonthsOfYear</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#months_of_year DataProtectionBackupPolicyCosmosdbAccount#months_of_year}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}.

---

##### `MonthsOfYear`<sup>Optional</sup> <a name="MonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.monthsOfYear"></a>

```go
MonthsOfYear *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#months_of_year DataProtectionBackupPolicyCosmosdbAccount#months_of_year}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule.property.weeksOfMonth"></a>

```go
WeeksOfMonth *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.11.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

dataprotectionbackuppolicycosmosdbaccount.NewDataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.resetWeeksOfMonth"></a>

```go
func ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonthInput"></a>

```go
func WeeksOfMonthInput() *[]*string
```

- *Type:* *[]*string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule</a>

---


### DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

dataprotectionbackuppolicycosmosdbaccount.NewDataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

dataprotectionbackuppolicycosmosdbaccount.NewDataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule</a>

---


### DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference <a name="DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/dataprotectionbackuppolicycosmosdbaccount"

dataprotectionbackuppolicycosmosdbaccount.NewDataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetMonthsOfYear">ResetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetMonthsOfYear` <a name="ResetMonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetMonthsOfYear"></a>

```go
func ResetMonthsOfYear()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.resetWeeksOfMonth"></a>

```go
func ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYearInput">MonthsOfYearInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYear">MonthsOfYear</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `MonthsOfYearInput`<sup>Optional</sup> <a name="MonthsOfYearInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYearInput"></a>

```go
func MonthsOfYearInput() *[]*string
```

- *Type:* *[]*string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonthInput"></a>

```go
func WeeksOfMonthInput() *[]*string
```

- *Type:* *[]*string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `MonthsOfYear`<sup>Required</sup> <a name="MonthsOfYear" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.monthsOfYear"></a>

```go
func MonthsOfYear() *[]*string
```

- *Type:* *[]*string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupPolicyCosmosdbAccount.DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule">DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule</a>

---



