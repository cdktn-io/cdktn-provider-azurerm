# `logAnalyticsWorkspaceTableMicrosoft` Submodule <a name="`logAnalyticsWorkspaceTableMicrosoft` Submodule" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsWorkspaceTableMicrosoft <a name="LogAnalyticsWorkspaceTableMicrosoft" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft azurerm_log_analytics_workspace_table_microsoft}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

loganalyticsworkspacetablemicrosoft.NewLogAnalyticsWorkspaceTableMicrosoft(scope Construct, id *string, config LogAnalyticsWorkspaceTableMicrosoftConfig) LogAnalyticsWorkspaceTableMicrosoft
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig">LogAnalyticsWorkspaceTableMicrosoftConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig">LogAnalyticsWorkspaceTableMicrosoftConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetTotalRetentionInDays">ResetTotalRetentionInDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutColumn` <a name="PutColumn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.putColumn"></a>

```go
func PutColumn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.putColumn.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.putTimeouts"></a>

```go
func PutTimeouts(value LogAnalyticsWorkspaceTableMicrosoftTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts">LogAnalyticsWorkspaceTableMicrosoftTimeouts</a>

---

##### `ResetColumn` <a name="ResetColumn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetColumn"></a>

```go
func ResetColumn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetRetentionInDays"></a>

```go
func ResetRetentionInDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTotalRetentionInDays` <a name="ResetTotalRetentionInDays" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.resetTotalRetentionInDays"></a>

```go
func ResetTotalRetentionInDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LogAnalyticsWorkspaceTableMicrosoft resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

loganalyticsworkspacetablemicrosoft.LogAnalyticsWorkspaceTableMicrosoft_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

loganalyticsworkspacetablemicrosoft.LogAnalyticsWorkspaceTableMicrosoft_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

loganalyticsworkspacetablemicrosoft.LogAnalyticsWorkspaceTableMicrosoft_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

loganalyticsworkspacetablemicrosoft.LogAnalyticsWorkspaceTableMicrosoft_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LogAnalyticsWorkspaceTableMicrosoft resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogAnalyticsWorkspaceTableMicrosoft to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogAnalyticsWorkspaceTableMicrosoft that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LogAnalyticsWorkspaceTableMicrosoft to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.column">Column</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList">LogAnalyticsWorkspaceTableMicrosoftColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.solutions">Solutions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.standardColumn">StandardColumn</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList">LogAnalyticsWorkspaceTableMicrosoftStandardColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference">LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.columnInput">ColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.totalRetentionInDaysInput">TotalRetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.totalRetentionInDays">TotalRetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.column"></a>

```go
func Column() LogAnalyticsWorkspaceTableMicrosoftColumnList
```

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList">LogAnalyticsWorkspaceTableMicrosoftColumnList</a>

---

##### `Solutions`<sup>Required</sup> <a name="Solutions" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.solutions"></a>

```go
func Solutions() *[]*string
```

- *Type:* *[]*string

---

##### `StandardColumn`<sup>Required</sup> <a name="StandardColumn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.standardColumn"></a>

```go
func StandardColumn() LogAnalyticsWorkspaceTableMicrosoftStandardColumnList
```

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList">LogAnalyticsWorkspaceTableMicrosoftStandardColumnList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.timeouts"></a>

```go
func Timeouts() LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference">LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.columnInput"></a>

```go
func ColumnInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.retentionInDaysInput"></a>

```go
func RetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TotalRetentionInDaysInput`<sup>Optional</sup> <a name="TotalRetentionInDaysInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.totalRetentionInDaysInput"></a>

```go
func TotalRetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.retentionInDays"></a>

```go
func RetentionInDays() *f64
```

- *Type:* *f64

---

##### `TotalRetentionInDays`<sup>Required</sup> <a name="TotalRetentionInDays" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.totalRetentionInDays"></a>

```go
func TotalRetentionInDays() *f64
```

- *Type:* *f64

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoft.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsWorkspaceTableMicrosoftColumn <a name="LogAnalyticsWorkspaceTableMicrosoftColumn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

&loganalyticsworkspacetablemicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn {
	Name: *string,
	Type: *string,
	Description: *string,
	DisplayByDefault: interface{},
	DisplayName: *string,
	Hidden: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#name LogAnalyticsWorkspaceTableMicrosoft#name}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#type LogAnalyticsWorkspaceTableMicrosoft#type}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#description LogAnalyticsWorkspaceTableMicrosoft#description}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.property.displayByDefault">DisplayByDefault</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#display_by_default LogAnalyticsWorkspaceTableMicrosoft#display_by_default}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#display_name LogAnalyticsWorkspaceTableMicrosoft#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.property.hidden">Hidden</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#hidden LogAnalyticsWorkspaceTableMicrosoft#hidden}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#name LogAnalyticsWorkspaceTableMicrosoft#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#type LogAnalyticsWorkspaceTableMicrosoft#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#description LogAnalyticsWorkspaceTableMicrosoft#description}.

---

##### `DisplayByDefault`<sup>Optional</sup> <a name="DisplayByDefault" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.property.displayByDefault"></a>

```go
DisplayByDefault interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#display_by_default LogAnalyticsWorkspaceTableMicrosoft#display_by_default}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#display_name LogAnalyticsWorkspaceTableMicrosoft#display_name}.

---

##### `Hidden`<sup>Optional</sup> <a name="Hidden" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumn.property.hidden"></a>

```go
Hidden interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#hidden LogAnalyticsWorkspaceTableMicrosoft#hidden}.

---

### LogAnalyticsWorkspaceTableMicrosoftConfig <a name="LogAnalyticsWorkspaceTableMicrosoftConfig" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

&loganalyticsworkspacetablemicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	WorkspaceId: *string,
	Column: interface{},
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *[]*string,
	RetentionInDays: *f64,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts,
	TotalRetentionInDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#name LogAnalyticsWorkspaceTableMicrosoft#name}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#workspace_id LogAnalyticsWorkspaceTableMicrosoft#workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.column">Column</a></code> | <code>interface{}</code> | column block. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#description LogAnalyticsWorkspaceTableMicrosoft#description}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#display_name LogAnalyticsWorkspaceTableMicrosoft#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#id LogAnalyticsWorkspaceTableMicrosoft#id}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.labels">Labels</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#labels LogAnalyticsWorkspaceTableMicrosoft#labels}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#retention_in_days LogAnalyticsWorkspaceTableMicrosoft#retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts">LogAnalyticsWorkspaceTableMicrosoftTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.totalRetentionInDays">TotalRetentionInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#total_retention_in_days LogAnalyticsWorkspaceTableMicrosoft#total_retention_in_days}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#name LogAnalyticsWorkspaceTableMicrosoft#name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#workspace_id LogAnalyticsWorkspaceTableMicrosoft#workspace_id}.

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.column"></a>

```go
Column interface{}
```

- *Type:* interface{}

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#column LogAnalyticsWorkspaceTableMicrosoft#column}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#description LogAnalyticsWorkspaceTableMicrosoft#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#display_name LogAnalyticsWorkspaceTableMicrosoft#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#id LogAnalyticsWorkspaceTableMicrosoft#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#labels LogAnalyticsWorkspaceTableMicrosoft#labels}.

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.retentionInDays"></a>

```go
RetentionInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#retention_in_days LogAnalyticsWorkspaceTableMicrosoft#retention_in_days}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.timeouts"></a>

```go
Timeouts LogAnalyticsWorkspaceTableMicrosoftTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts">LogAnalyticsWorkspaceTableMicrosoftTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#timeouts LogAnalyticsWorkspaceTableMicrosoft#timeouts}

---

##### `TotalRetentionInDays`<sup>Optional</sup> <a name="TotalRetentionInDays" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftConfig.property.totalRetentionInDays"></a>

```go
TotalRetentionInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#total_retention_in_days LogAnalyticsWorkspaceTableMicrosoft#total_retention_in_days}.

---

### LogAnalyticsWorkspaceTableMicrosoftStandardColumn <a name="LogAnalyticsWorkspaceTableMicrosoftStandardColumn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

&loganalyticsworkspacetablemicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumn {

}
```


### LogAnalyticsWorkspaceTableMicrosoftTimeouts <a name="LogAnalyticsWorkspaceTableMicrosoftTimeouts" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

&loganalyticsworkspacetablemicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#create LogAnalyticsWorkspaceTableMicrosoft#create}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#delete LogAnalyticsWorkspaceTableMicrosoft#delete}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#read LogAnalyticsWorkspaceTableMicrosoft#read}. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#update LogAnalyticsWorkspaceTableMicrosoft#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#create LogAnalyticsWorkspaceTableMicrosoft#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#delete LogAnalyticsWorkspaceTableMicrosoft#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#read LogAnalyticsWorkspaceTableMicrosoft#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/log_analytics_workspace_table_microsoft#update LogAnalyticsWorkspaceTableMicrosoft#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsWorkspaceTableMicrosoftColumnList <a name="LogAnalyticsWorkspaceTableMicrosoftColumnList" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

loganalyticsworkspacetablemicrosoft.NewLogAnalyticsWorkspaceTableMicrosoftColumnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogAnalyticsWorkspaceTableMicrosoftColumnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.get"></a>

```go
func Get(index *f64) LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference <a name="LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

loganalyticsworkspacetablemicrosoft.NewLogAnalyticsWorkspaceTableMicrosoftColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.resetDisplayByDefault">ResetDisplayByDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.resetHidden">ResetHidden</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayByDefault` <a name="ResetDisplayByDefault" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.resetDisplayByDefault"></a>

```go
func ResetDisplayByDefault()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetHidden` <a name="ResetHidden" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.resetHidden"></a>

```go
func ResetHidden()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.displayByDefaultInput">DisplayByDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.hiddenInput">HiddenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.displayByDefault">DisplayByDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.hidden">Hidden</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayByDefaultInput`<sup>Optional</sup> <a name="DisplayByDefaultInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.displayByDefaultInput"></a>

```go
func DisplayByDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `HiddenInput`<sup>Optional</sup> <a name="HiddenInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.hiddenInput"></a>

```go
func HiddenInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayByDefault`<sup>Required</sup> <a name="DisplayByDefault" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.displayByDefault"></a>

```go
func DisplayByDefault() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Hidden`<sup>Required</sup> <a name="Hidden" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.hidden"></a>

```go
func Hidden() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LogAnalyticsWorkspaceTableMicrosoftStandardColumnList <a name="LogAnalyticsWorkspaceTableMicrosoftStandardColumnList" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

loganalyticsworkspacetablemicrosoft.NewLogAnalyticsWorkspaceTableMicrosoftStandardColumnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogAnalyticsWorkspaceTableMicrosoftStandardColumnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.get"></a>

```go
func Get(index *f64) LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference <a name="LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

loganalyticsworkspacetablemicrosoft.NewLogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.displayByDefault">DisplayByDefault</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.hidden">Hidden</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.typeHint">TypeHint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumn">LogAnalyticsWorkspaceTableMicrosoftStandardColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayByDefault`<sup>Required</sup> <a name="DisplayByDefault" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.displayByDefault"></a>

```go
func DisplayByDefault() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Hidden`<sup>Required</sup> <a name="Hidden" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.hidden"></a>

```go
func Hidden() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeHint`<sup>Required</sup> <a name="TypeHint" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.typeHint"></a>

```go
func TypeHint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() LogAnalyticsWorkspaceTableMicrosoftStandardColumn
```

- *Type:* <a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftStandardColumn">LogAnalyticsWorkspaceTableMicrosoftStandardColumn</a>

---


### LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference <a name="LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/loganalyticsworkspacetablemicrosoft"

loganalyticsworkspacetablemicrosoft.NewLogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.logAnalyticsWorkspaceTableMicrosoft.LogAnalyticsWorkspaceTableMicrosoftTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



