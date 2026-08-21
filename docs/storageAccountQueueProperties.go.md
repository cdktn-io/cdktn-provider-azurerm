# `storageAccountQueueProperties` Submodule <a name="`storageAccountQueueProperties` Submodule" id="@cdktn/provider-azurerm.storageAccountQueueProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountQueueProperties <a name="StorageAccountQueueProperties" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties azurerm_storage_account_queue_properties}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueueProperties(scope Construct, id *string, config StorageAccountQueuePropertiesConfig) StorageAccountQueueProperties
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig">StorageAccountQueuePropertiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig">StorageAccountQueuePropertiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putCorsRule">PutCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putHourMetrics">PutHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putMinuteMetrics">PutMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetCorsRule">ResetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetHourMetrics">ResetHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetMinuteMetrics">ResetMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putCorsRule"></a>

```go
func PutCorsRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putCorsRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHourMetrics` <a name="PutHourMetrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putHourMetrics"></a>

```go
func PutHourMetrics(value StorageAccountQueuePropertiesHourMetrics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putHourMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putLogging"></a>

```go
func PutLogging(value StorageAccountQueuePropertiesLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---

##### `PutMinuteMetrics` <a name="PutMinuteMetrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putMinuteMetrics"></a>

```go
func PutMinuteMetrics(value StorageAccountQueuePropertiesMinuteMetrics)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putMinuteMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putTimeouts"></a>

```go
func PutTimeouts(value StorageAccountQueuePropertiesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

---

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetCorsRule"></a>

```go
func ResetCorsRule()
```

##### `ResetHourMetrics` <a name="ResetHourMetrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetHourMetrics"></a>

```go
func ResetHourMetrics()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetId"></a>

```go
func ResetId()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetMinuteMetrics` <a name="ResetMinuteMetrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetMinuteMetrics"></a>

```go
func ResetMinuteMetrics()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageAccountQueueProperties resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

storageaccountqueueproperties.StorageAccountQueueProperties_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

storageaccountqueueproperties.StorageAccountQueueProperties_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

storageaccountqueueproperties.StorageAccountQueueProperties_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

storageaccountqueueproperties.StorageAccountQueueProperties_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StorageAccountQueueProperties resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageAccountQueueProperties to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageAccountQueueProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StorageAccountQueueProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.hourMetrics">HourMetrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.minuteMetrics">MinuteMetrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.corsRuleInput">CorsRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.hourMetricsInput">HourMetricsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.minuteMetricsInput">MinuteMetricsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.corsRule"></a>

```go
func CorsRule() StorageAccountQueuePropertiesCorsRuleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList">StorageAccountQueuePropertiesCorsRuleList</a>

---

##### `HourMetrics`<sup>Required</sup> <a name="HourMetrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.hourMetrics"></a>

```go
func HourMetrics() StorageAccountQueuePropertiesHourMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference">StorageAccountQueuePropertiesHourMetricsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.logging"></a>

```go
func Logging() StorageAccountQueuePropertiesLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference">StorageAccountQueuePropertiesLoggingOutputReference</a>

---

##### `MinuteMetrics`<sup>Required</sup> <a name="MinuteMetrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.minuteMetrics"></a>

```go
func MinuteMetrics() StorageAccountQueuePropertiesMinuteMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference">StorageAccountQueuePropertiesMinuteMetricsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.timeouts"></a>

```go
func Timeouts() StorageAccountQueuePropertiesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a>

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.corsRuleInput"></a>

```go
func CorsRuleInput() interface{}
```

- *Type:* interface{}

---

##### `HourMetricsInput`<sup>Optional</sup> <a name="HourMetricsInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.hourMetricsInput"></a>

```go
func HourMetricsInput() StorageAccountQueuePropertiesHourMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.loggingInput"></a>

```go
func LoggingInput() StorageAccountQueuePropertiesLogging
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---

##### `MinuteMetricsInput`<sup>Optional</sup> <a name="MinuteMetricsInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.minuteMetricsInput"></a>

```go
func MinuteMetricsInput() StorageAccountQueuePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueueProperties.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountQueuePropertiesConfig <a name="StorageAccountQueuePropertiesConfig" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

&storageaccountqueueproperties.StorageAccountQueuePropertiesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	StorageAccountId: *string,
	CorsRule: interface{},
	HourMetrics: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics,
	Id: *string,
	Logging: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging,
	MinuteMetrics: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueueProperties#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.corsRule">CorsRule</a></code> | <code>interface{}</code> | cors_rule block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.hourMetrics">HourMetrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | hour_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#id StorageAccountQueueProperties#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.minuteMetrics">MinuteMetrics</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | minute_metrics block. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueueProperties#storage_account_id}.

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.corsRule"></a>

```go
CorsRule interface{}
```

- *Type:* interface{}

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#cors_rule StorageAccountQueueProperties#cors_rule}

---

##### `HourMetrics`<sup>Optional</sup> <a name="HourMetrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.hourMetrics"></a>

```go
HourMetrics StorageAccountQueuePropertiesHourMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#hour_metrics StorageAccountQueueProperties#hour_metrics}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#id StorageAccountQueueProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.logging"></a>

```go
Logging StorageAccountQueuePropertiesLogging
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#logging StorageAccountQueueProperties#logging}

---

##### `MinuteMetrics`<sup>Optional</sup> <a name="MinuteMetrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.minuteMetrics"></a>

```go
MinuteMetrics StorageAccountQueuePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#minute_metrics StorageAccountQueueProperties#minute_metrics}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesConfig.property.timeouts"></a>

```go
Timeouts StorageAccountQueuePropertiesTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#timeouts StorageAccountQueueProperties#timeouts}

---

### StorageAccountQueuePropertiesCorsRule <a name="StorageAccountQueuePropertiesCorsRule" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

&storageaccountqueueproperties.StorageAccountQueuePropertiesCorsRule {
	AllowedHeaders: *[]*string,
	AllowedMethods: *[]*string,
	AllowedOrigins: *[]*string,
	ExposedHeaders: *[]*string,
	MaxAgeInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueueProperties#allowed_headers}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueueProperties#allowed_methods}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueueProperties#allowed_origins}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders">ExposedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueueProperties#exposed_headers}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueueProperties#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.allowedHeaders"></a>

```go
AllowedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueueProperties#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueueProperties#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueueProperties#allowed_origins}.

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.exposedHeaders"></a>

```go
ExposedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueueProperties#exposed_headers}.

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRule.property.maxAgeInSeconds"></a>

```go
MaxAgeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueueProperties#max_age_in_seconds}.

---

### StorageAccountQueuePropertiesHourMetrics <a name="StorageAccountQueuePropertiesHourMetrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

&storageaccountqueueproperties.StorageAccountQueuePropertiesHourMetrics {
	Version: *string,
	IncludeApis: interface{},
	RetentionPolicyDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.property.includeApis">IncludeApis</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueueProperties#include_apis}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}.

---

##### `IncludeApis`<sup>Optional</sup> <a name="IncludeApis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.property.includeApis"></a>

```go
IncludeApis interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueueProperties#include_apis}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics.property.retentionPolicyDays"></a>

```go
RetentionPolicyDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}.

---

### StorageAccountQueuePropertiesLogging <a name="StorageAccountQueuePropertiesLogging" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

&storageaccountqueueproperties.StorageAccountQueuePropertiesLogging {
	Delete: interface{},
	Read: interface{},
	Version: *string,
	Write: interface{},
	RetentionPolicyDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.delete">Delete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueueProperties#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.read">Read</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#read StorageAccountQueueProperties#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.write">Write</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#write StorageAccountQueueProperties#write}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}. |

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.delete"></a>

```go
Delete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueueProperties#delete}.

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.read"></a>

```go
Read interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#read StorageAccountQueueProperties#read}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}.

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.write"></a>

```go
Write interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#write StorageAccountQueueProperties#write}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging.property.retentionPolicyDays"></a>

```go
RetentionPolicyDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}.

---

### StorageAccountQueuePropertiesMinuteMetrics <a name="StorageAccountQueuePropertiesMinuteMetrics" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

&storageaccountqueueproperties.StorageAccountQueuePropertiesMinuteMetrics {
	Version: *string,
	IncludeApis: interface{},
	RetentionPolicyDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis">IncludeApis</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueueProperties#include_apis}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}.

---

##### `IncludeApis`<sup>Optional</sup> <a name="IncludeApis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.property.includeApis"></a>

```go
IncludeApis interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueueProperties#include_apis}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics.property.retentionPolicyDays"></a>

```go
RetentionPolicyDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}.

---

### StorageAccountQueuePropertiesTimeouts <a name="StorageAccountQueuePropertiesTimeouts" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

&storageaccountqueueproperties.StorageAccountQueuePropertiesTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#create StorageAccountQueueProperties#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueueProperties#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#read StorageAccountQueueProperties#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#update StorageAccountQueueProperties#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#create StorageAccountQueueProperties#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueueProperties#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#read StorageAccountQueueProperties#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#update StorageAccountQueueProperties#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountQueuePropertiesCorsRuleList <a name="StorageAccountQueuePropertiesCorsRuleList" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesCorsRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageAccountQueuePropertiesCorsRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.get"></a>

```go
func Get(index *f64) StorageAccountQueuePropertiesCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountQueuePropertiesCorsRuleOutputReference <a name="StorageAccountQueuePropertiesCorsRuleOutputReference" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesCorsRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageAccountQueuePropertiesCorsRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeadersInput"></a>

```go
func AllowedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethodsInput"></a>

```go
func AllowedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeadersInput"></a>

```go
func ExposedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```go
func MaxAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedHeaders"></a>

```go
func AllowedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.exposedHeaders"></a>

```go
func ExposedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```go
func MaxAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountQueuePropertiesHourMetricsOutputReference <a name="StorageAccountQueuePropertiesHourMetricsOutputReference" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesHourMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountQueuePropertiesHourMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis">ResetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeApis` <a name="ResetIncludeApis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resetIncludeApis"></a>

```go
func ResetIncludeApis()
```

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.resetRetentionPolicyDays"></a>

```go
func ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput">IncludeApisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis">IncludeApis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeApisInput`<sup>Optional</sup> <a name="IncludeApisInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApisInput"></a>

```go
func IncludeApisInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```go
func RetentionPolicyDaysInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `IncludeApis`<sup>Required</sup> <a name="IncludeApis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.includeApis"></a>

```go
func IncludeApis() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.retentionPolicyDays"></a>

```go
func RetentionPolicyDays() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountQueuePropertiesHourMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetrics">StorageAccountQueuePropertiesHourMetrics</a>

---


### StorageAccountQueuePropertiesLoggingOutputReference <a name="StorageAccountQueuePropertiesLoggingOutputReference" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountQueuePropertiesLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.resetRetentionPolicyDays"></a>

```go
func ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput">DeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput">ReadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput">WriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.delete">Delete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.read">Read</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.write">Write</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.deleteInput"></a>

```go
func DeleteInput() interface{}
```

- *Type:* interface{}

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.readInput"></a>

```go
func ReadInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDaysInput"></a>

```go
func RetentionPolicyDaysInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.writeInput"></a>

```go
func WriteInput() interface{}
```

- *Type:* interface{}

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.delete"></a>

```go
func Delete() interface{}
```

- *Type:* interface{}

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.read"></a>

```go
func Read() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.retentionPolicyDays"></a>

```go
func RetentionPolicyDays() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.write"></a>

```go
func Write() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountQueuePropertiesLogging
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLogging">StorageAccountQueuePropertiesLogging</a>

---


### StorageAccountQueuePropertiesMinuteMetricsOutputReference <a name="StorageAccountQueuePropertiesMinuteMetricsOutputReference" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesMinuteMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountQueuePropertiesMinuteMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis">ResetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeApis` <a name="ResetIncludeApis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetIncludeApis"></a>

```go
func ResetIncludeApis()
```

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.resetRetentionPolicyDays"></a>

```go
func ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput">IncludeApisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis">IncludeApis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeApisInput`<sup>Optional</sup> <a name="IncludeApisInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApisInput"></a>

```go
func IncludeApisInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDaysInput"></a>

```go
func RetentionPolicyDaysInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `IncludeApis`<sup>Required</sup> <a name="IncludeApis" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.includeApis"></a>

```go
func IncludeApis() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.retentionPolicyDays"></a>

```go
func RetentionPolicyDays() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountQueuePropertiesMinuteMetrics
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetrics">StorageAccountQueuePropertiesMinuteMetrics</a>

---


### StorageAccountQueuePropertiesTimeoutsOutputReference <a name="StorageAccountQueuePropertiesTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountQueuePropertiesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



