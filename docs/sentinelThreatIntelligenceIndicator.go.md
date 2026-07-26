# `sentinelThreatIntelligenceIndicator` Submodule <a name="`sentinelThreatIntelligenceIndicator` Submodule" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelThreatIntelligenceIndicator <a name="SentinelThreatIntelligenceIndicator" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator azurerm_sentinel_threat_intelligence_indicator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.NewSentinelThreatIntelligenceIndicator(scope Construct, id *string, config SentinelThreatIntelligenceIndicatorConfig) SentinelThreatIntelligenceIndicator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig">SentinelThreatIntelligenceIndicatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig">SentinelThreatIntelligenceIndicatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putExternalReference">PutExternalReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putGranularMarking">PutGranularMarking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putKillChainPhase">PutKillChainPhase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetConfidence">ResetConfidence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetExtension">ResetExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetExternalReference">ResetExternalReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetGranularMarking">ResetGranularMarking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetKillChainPhase">ResetKillChainPhase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetObjectMarkingRefs">ResetObjectMarkingRefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetPatternVersion">ResetPatternVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetRevoked">ResetRevoked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetThreatTypes">ResetThreatTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetValidateUntilUtc">ResetValidateUntilUtc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalReference` <a name="PutExternalReference" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putExternalReference"></a>

```go
func PutExternalReference(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putExternalReference.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGranularMarking` <a name="PutGranularMarking" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putGranularMarking"></a>

```go
func PutGranularMarking(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putGranularMarking.parameter.value"></a>

- *Type:* interface{}

---

##### `PutKillChainPhase` <a name="PutKillChainPhase" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putKillChainPhase"></a>

```go
func PutKillChainPhase(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putKillChainPhase.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putTimeouts"></a>

```go
func PutTimeouts(value SentinelThreatIntelligenceIndicatorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a>

---

##### `ResetConfidence` <a name="ResetConfidence" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetConfidence"></a>

```go
func ResetConfidence()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExtension` <a name="ResetExtension" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetExtension"></a>

```go
func ResetExtension()
```

##### `ResetExternalReference` <a name="ResetExternalReference" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetExternalReference"></a>

```go
func ResetExternalReference()
```

##### `ResetGranularMarking` <a name="ResetGranularMarking" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetGranularMarking"></a>

```go
func ResetGranularMarking()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetId"></a>

```go
func ResetId()
```

##### `ResetKillChainPhase` <a name="ResetKillChainPhase" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetKillChainPhase"></a>

```go
func ResetKillChainPhase()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetLanguage"></a>

```go
func ResetLanguage()
```

##### `ResetObjectMarkingRefs` <a name="ResetObjectMarkingRefs" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetObjectMarkingRefs"></a>

```go
func ResetObjectMarkingRefs()
```

##### `ResetPatternVersion` <a name="ResetPatternVersion" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetPatternVersion"></a>

```go
func ResetPatternVersion()
```

##### `ResetRevoked` <a name="ResetRevoked" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetRevoked"></a>

```go
func ResetRevoked()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThreatTypes` <a name="ResetThreatTypes" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetThreatTypes"></a>

```go
func ResetThreatTypes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetValidateUntilUtc` <a name="ResetValidateUntilUtc" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.resetValidateUntilUtc"></a>

```go
func ResetValidateUntilUtc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SentinelThreatIntelligenceIndicator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.SentinelThreatIntelligenceIndicator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.SentinelThreatIntelligenceIndicator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.SentinelThreatIntelligenceIndicator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.SentinelThreatIntelligenceIndicator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SentinelThreatIntelligenceIndicator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SentinelThreatIntelligenceIndicator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SentinelThreatIntelligenceIndicator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SentinelThreatIntelligenceIndicator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.defanged">Defanged</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalLastUpdatedTimeUtc">ExternalLastUpdatedTimeUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalReference">ExternalReference</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList">SentinelThreatIntelligenceIndicatorExternalReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.granularMarking">GranularMarking</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList">SentinelThreatIntelligenceIndicatorGranularMarkingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.indicatorType">IndicatorType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.killChainPhase">KillChainPhase</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList">SentinelThreatIntelligenceIndicatorKillChainPhaseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.lastUpdatedTimeUtc">LastUpdatedTimeUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.parsedPattern">ParsedPattern</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList">SentinelThreatIntelligenceIndicatorParsedPatternList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference">SentinelThreatIntelligenceIndicatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.confidenceInput">ConfidenceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.extensionInput">ExtensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalReferenceInput">ExternalReferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.granularMarkingInput">GranularMarkingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.killChainPhaseInput">KillChainPhaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.objectMarkingRefsInput">ObjectMarkingRefsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternTypeInput">PatternTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternVersionInput">PatternVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.revokedInput">RevokedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.threatTypesInput">ThreatTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateFromUtcInput">ValidateFromUtcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateUntilUtcInput">ValidateUntilUtcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.confidence">Confidence</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.extension">Extension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.objectMarkingRefs">ObjectMarkingRefs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternType">PatternType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternVersion">PatternVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.revoked">Revoked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.threatTypes">ThreatTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateFromUtc">ValidateFromUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateUntilUtc">ValidateUntilUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Defanged`<sup>Required</sup> <a name="Defanged" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.defanged"></a>

```go
func Defanged() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `ExternalLastUpdatedTimeUtc`<sup>Required</sup> <a name="ExternalLastUpdatedTimeUtc" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalLastUpdatedTimeUtc"></a>

```go
func ExternalLastUpdatedTimeUtc() *string
```

- *Type:* *string

---

##### `ExternalReference`<sup>Required</sup> <a name="ExternalReference" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalReference"></a>

```go
func ExternalReference() SentinelThreatIntelligenceIndicatorExternalReferenceList
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList">SentinelThreatIntelligenceIndicatorExternalReferenceList</a>

---

##### `GranularMarking`<sup>Required</sup> <a name="GranularMarking" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.granularMarking"></a>

```go
func GranularMarking() SentinelThreatIntelligenceIndicatorGranularMarkingList
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList">SentinelThreatIntelligenceIndicatorGranularMarkingList</a>

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `IndicatorType`<sup>Required</sup> <a name="IndicatorType" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.indicatorType"></a>

```go
func IndicatorType() *[]*string
```

- *Type:* *[]*string

---

##### `KillChainPhase`<sup>Required</sup> <a name="KillChainPhase" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.killChainPhase"></a>

```go
func KillChainPhase() SentinelThreatIntelligenceIndicatorKillChainPhaseList
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList">SentinelThreatIntelligenceIndicatorKillChainPhaseList</a>

---

##### `LastUpdatedTimeUtc`<sup>Required</sup> <a name="LastUpdatedTimeUtc" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.lastUpdatedTimeUtc"></a>

```go
func LastUpdatedTimeUtc() *string
```

- *Type:* *string

---

##### `ParsedPattern`<sup>Required</sup> <a name="ParsedPattern" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.parsedPattern"></a>

```go
func ParsedPattern() SentinelThreatIntelligenceIndicatorParsedPatternList
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList">SentinelThreatIntelligenceIndicatorParsedPatternList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.timeouts"></a>

```go
func Timeouts() SentinelThreatIntelligenceIndicatorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference">SentinelThreatIntelligenceIndicatorTimeoutsOutputReference</a>

---

##### `ConfidenceInput`<sup>Optional</sup> <a name="ConfidenceInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.confidenceInput"></a>

```go
func ConfidenceInput() *f64
```

- *Type:* *f64

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.extensionInput"></a>

```go
func ExtensionInput() *string
```

- *Type:* *string

---

##### `ExternalReferenceInput`<sup>Optional</sup> <a name="ExternalReferenceInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.externalReferenceInput"></a>

```go
func ExternalReferenceInput() interface{}
```

- *Type:* interface{}

---

##### `GranularMarkingInput`<sup>Optional</sup> <a name="GranularMarkingInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.granularMarkingInput"></a>

```go
func GranularMarkingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KillChainPhaseInput`<sup>Optional</sup> <a name="KillChainPhaseInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.killChainPhaseInput"></a>

```go
func KillChainPhaseInput() interface{}
```

- *Type:* interface{}

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `ObjectMarkingRefsInput`<sup>Optional</sup> <a name="ObjectMarkingRefsInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.objectMarkingRefsInput"></a>

```go
func ObjectMarkingRefsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `PatternTypeInput`<sup>Optional</sup> <a name="PatternTypeInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternTypeInput"></a>

```go
func PatternTypeInput() *string
```

- *Type:* *string

---

##### `PatternVersionInput`<sup>Optional</sup> <a name="PatternVersionInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternVersionInput"></a>

```go
func PatternVersionInput() *string
```

- *Type:* *string

---

##### `RevokedInput`<sup>Optional</sup> <a name="RevokedInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.revokedInput"></a>

```go
func RevokedInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ThreatTypesInput`<sup>Optional</sup> <a name="ThreatTypesInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.threatTypesInput"></a>

```go
func ThreatTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidateFromUtcInput`<sup>Optional</sup> <a name="ValidateFromUtcInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateFromUtcInput"></a>

```go
func ValidateFromUtcInput() *string
```

- *Type:* *string

---

##### `ValidateUntilUtcInput`<sup>Optional</sup> <a name="ValidateUntilUtcInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateUntilUtcInput"></a>

```go
func ValidateUntilUtcInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Confidence`<sup>Required</sup> <a name="Confidence" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.confidence"></a>

```go
func Confidence() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.extension"></a>

```go
func Extension() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `ObjectMarkingRefs`<sup>Required</sup> <a name="ObjectMarkingRefs" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.objectMarkingRefs"></a>

```go
func ObjectMarkingRefs() *[]*string
```

- *Type:* *[]*string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternType"></a>

```go
func PatternType() *string
```

- *Type:* *string

---

##### `PatternVersion`<sup>Required</sup> <a name="PatternVersion" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.patternVersion"></a>

```go
func PatternVersion() *string
```

- *Type:* *string

---

##### `Revoked`<sup>Required</sup> <a name="Revoked" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.revoked"></a>

```go
func Revoked() interface{}
```

- *Type:* interface{}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `ThreatTypes`<sup>Required</sup> <a name="ThreatTypes" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.threatTypes"></a>

```go
func ThreatTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ValidateFromUtc`<sup>Required</sup> <a name="ValidateFromUtc" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateFromUtc"></a>

```go
func ValidateFromUtc() *string
```

- *Type:* *string

---

##### `ValidateUntilUtc`<sup>Required</sup> <a name="ValidateUntilUtc" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.validateUntilUtc"></a>

```go
func ValidateUntilUtc() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelThreatIntelligenceIndicatorConfig <a name="SentinelThreatIntelligenceIndicatorConfig" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

&sentinelthreatintelligenceindicator.SentinelThreatIntelligenceIndicatorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Pattern: *string,
	PatternType: *string,
	Source: *string,
	ValidateFromUtc: *string,
	WorkspaceId: *string,
	Confidence: *f64,
	CreatedBy: *string,
	Description: *string,
	Extension: *string,
	ExternalReference: interface{},
	GranularMarking: interface{},
	Id: *string,
	KillChainPhase: interface{},
	Language: *string,
	ObjectMarkingRefs: *[]*string,
	PatternVersion: *string,
	Revoked: interface{},
	Tags: *[]*string,
	ThreatTypes: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts,
	ValidateUntilUtc: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#display_name SentinelThreatIntelligenceIndicator#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.pattern">Pattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#pattern SentinelThreatIntelligenceIndicator#pattern}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.patternType">PatternType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_type SentinelThreatIntelligenceIndicator#pattern_type}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#source SentinelThreatIntelligenceIndicator#source}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.validateFromUtc">ValidateFromUtc</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#validate_from_utc SentinelThreatIntelligenceIndicator#validate_from_utc}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#workspace_id SentinelThreatIntelligenceIndicator#workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.confidence">Confidence</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#confidence SentinelThreatIntelligenceIndicator#confidence}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#created_by SentinelThreatIntelligenceIndicator#created_by}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.extension">Extension</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#extension SentinelThreatIntelligenceIndicator#extension}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.externalReference">ExternalReference</a></code> | <code>interface{}</code> | external_reference block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.granularMarking">GranularMarking</a></code> | <code>interface{}</code> | granular_marking block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#id SentinelThreatIntelligenceIndicator#id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.killChainPhase">KillChainPhase</a></code> | <code>interface{}</code> | kill_chain_phase block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.language">Language</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.objectMarkingRefs">ObjectMarkingRefs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#object_marking_refs SentinelThreatIntelligenceIndicator#object_marking_refs}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.patternVersion">PatternVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_version SentinelThreatIntelligenceIndicator#pattern_version}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.revoked">Revoked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#revoked SentinelThreatIntelligenceIndicator#revoked}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#tags SentinelThreatIntelligenceIndicator#tags}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.threatTypes">ThreatTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#threat_types SentinelThreatIntelligenceIndicator#threat_types}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.validateUntilUtc">ValidateUntilUtc</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#validate_until_utc SentinelThreatIntelligenceIndicator#validate_until_utc}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#display_name SentinelThreatIntelligenceIndicator#display_name}.

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#pattern SentinelThreatIntelligenceIndicator#pattern}.

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.patternType"></a>

```go
PatternType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_type SentinelThreatIntelligenceIndicator#pattern_type}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#source SentinelThreatIntelligenceIndicator#source}.

---

##### `ValidateFromUtc`<sup>Required</sup> <a name="ValidateFromUtc" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.validateFromUtc"></a>

```go
ValidateFromUtc *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#validate_from_utc SentinelThreatIntelligenceIndicator#validate_from_utc}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#workspace_id SentinelThreatIntelligenceIndicator#workspace_id}.

---

##### `Confidence`<sup>Optional</sup> <a name="Confidence" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.confidence"></a>

```go
Confidence *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#confidence SentinelThreatIntelligenceIndicator#confidence}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#created_by SentinelThreatIntelligenceIndicator#created_by}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}.

---

##### `Extension`<sup>Optional</sup> <a name="Extension" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.extension"></a>

```go
Extension *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#extension SentinelThreatIntelligenceIndicator#extension}.

---

##### `ExternalReference`<sup>Optional</sup> <a name="ExternalReference" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.externalReference"></a>

```go
ExternalReference interface{}
```

- *Type:* interface{}

external_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#external_reference SentinelThreatIntelligenceIndicator#external_reference}

---

##### `GranularMarking`<sup>Optional</sup> <a name="GranularMarking" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.granularMarking"></a>

```go
GranularMarking interface{}
```

- *Type:* interface{}

granular_marking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#granular_marking SentinelThreatIntelligenceIndicator#granular_marking}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#id SentinelThreatIntelligenceIndicator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KillChainPhase`<sup>Optional</sup> <a name="KillChainPhase" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.killChainPhase"></a>

```go
KillChainPhase interface{}
```

- *Type:* interface{}

kill_chain_phase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#kill_chain_phase SentinelThreatIntelligenceIndicator#kill_chain_phase}

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.language"></a>

```go
Language *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}.

---

##### `ObjectMarkingRefs`<sup>Optional</sup> <a name="ObjectMarkingRefs" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.objectMarkingRefs"></a>

```go
ObjectMarkingRefs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#object_marking_refs SentinelThreatIntelligenceIndicator#object_marking_refs}.

---

##### `PatternVersion`<sup>Optional</sup> <a name="PatternVersion" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.patternVersion"></a>

```go
PatternVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#pattern_version SentinelThreatIntelligenceIndicator#pattern_version}.

---

##### `Revoked`<sup>Optional</sup> <a name="Revoked" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.revoked"></a>

```go
Revoked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#revoked SentinelThreatIntelligenceIndicator#revoked}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#tags SentinelThreatIntelligenceIndicator#tags}.

---

##### `ThreatTypes`<sup>Optional</sup> <a name="ThreatTypes" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.threatTypes"></a>

```go
ThreatTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#threat_types SentinelThreatIntelligenceIndicator#threat_types}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.timeouts"></a>

```go
Timeouts SentinelThreatIntelligenceIndicatorTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts">SentinelThreatIntelligenceIndicatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#timeouts SentinelThreatIntelligenceIndicator#timeouts}

---

##### `ValidateUntilUtc`<sup>Optional</sup> <a name="ValidateUntilUtc" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorConfig.property.validateUntilUtc"></a>

```go
ValidateUntilUtc *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#validate_until_utc SentinelThreatIntelligenceIndicator#validate_until_utc}.

---

### SentinelThreatIntelligenceIndicatorExternalReference <a name="SentinelThreatIntelligenceIndicatorExternalReference" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

&sentinelthreatintelligenceindicator.SentinelThreatIntelligenceIndicatorExternalReference {
	Description: *string,
	Hashes: *map[string]*string,
	SourceName: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.hashes">Hashes</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#hashes SentinelThreatIntelligenceIndicator#hashes}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.sourceName">SourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#source_name SentinelThreatIntelligenceIndicator#source_name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#url SentinelThreatIntelligenceIndicator#url}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#description SentinelThreatIntelligenceIndicator#description}.

---

##### `Hashes`<sup>Optional</sup> <a name="Hashes" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.hashes"></a>

```go
Hashes *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#hashes SentinelThreatIntelligenceIndicator#hashes}.

---

##### `SourceName`<sup>Optional</sup> <a name="SourceName" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.sourceName"></a>

```go
SourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#source_name SentinelThreatIntelligenceIndicator#source_name}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReference.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#url SentinelThreatIntelligenceIndicator#url}.

---

### SentinelThreatIntelligenceIndicatorGranularMarking <a name="SentinelThreatIntelligenceIndicatorGranularMarking" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

&sentinelthreatintelligenceindicator.SentinelThreatIntelligenceIndicatorGranularMarking {
	Language: *string,
	MarkingRef: *string,
	Selectors: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.language">Language</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.markingRef">MarkingRef</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#marking_ref SentinelThreatIntelligenceIndicator#marking_ref}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.selectors">Selectors</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#selectors SentinelThreatIntelligenceIndicator#selectors}. |

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.language"></a>

```go
Language *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#language SentinelThreatIntelligenceIndicator#language}.

---

##### `MarkingRef`<sup>Optional</sup> <a name="MarkingRef" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.markingRef"></a>

```go
MarkingRef *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#marking_ref SentinelThreatIntelligenceIndicator#marking_ref}.

---

##### `Selectors`<sup>Optional</sup> <a name="Selectors" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarking.property.selectors"></a>

```go
Selectors *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#selectors SentinelThreatIntelligenceIndicator#selectors}.

---

### SentinelThreatIntelligenceIndicatorKillChainPhase <a name="SentinelThreatIntelligenceIndicatorKillChainPhase" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

&sentinelthreatintelligenceindicator.SentinelThreatIntelligenceIndicatorKillChainPhase {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#name SentinelThreatIntelligenceIndicator#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhase.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#name SentinelThreatIntelligenceIndicator#name}.

---

### SentinelThreatIntelligenceIndicatorParsedPattern <a name="SentinelThreatIntelligenceIndicatorParsedPattern" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

&sentinelthreatintelligenceindicator.SentinelThreatIntelligenceIndicatorParsedPattern {

}
```


### SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues <a name="SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

&sentinelthreatintelligenceindicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues {

}
```


### SentinelThreatIntelligenceIndicatorTimeouts <a name="SentinelThreatIntelligenceIndicatorTimeouts" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

&sentinelthreatintelligenceindicator.SentinelThreatIntelligenceIndicatorTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#create SentinelThreatIntelligenceIndicator#create}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#delete SentinelThreatIntelligenceIndicator#delete}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#read SentinelThreatIntelligenceIndicator#read}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#update SentinelThreatIntelligenceIndicator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#create SentinelThreatIntelligenceIndicator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#delete SentinelThreatIntelligenceIndicator#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#read SentinelThreatIntelligenceIndicator#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_threat_intelligence_indicator#update SentinelThreatIntelligenceIndicator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelThreatIntelligenceIndicatorExternalReferenceList <a name="SentinelThreatIntelligenceIndicatorExternalReferenceList" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.NewSentinelThreatIntelligenceIndicatorExternalReferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelThreatIntelligenceIndicatorExternalReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.get"></a>

```go
func Get(index *f64) SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference <a name="SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.NewSentinelThreatIntelligenceIndicatorExternalReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetHashes">ResetHashes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetSourceName">ResetSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHashes` <a name="ResetHashes" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetHashes"></a>

```go
func ResetHashes()
```

##### `ResetSourceName` <a name="ResetSourceName" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetSourceName"></a>

```go
func ResetSourceName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.hashesInput">HashesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.hashes">Hashes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HashesInput`<sup>Optional</sup> <a name="HashesInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.hashesInput"></a>

```go
func HashesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.sourceNameInput"></a>

```go
func SourceNameInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Hashes`<sup>Required</sup> <a name="Hashes" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.hashes"></a>

```go
func Hashes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorExternalReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelThreatIntelligenceIndicatorGranularMarkingList <a name="SentinelThreatIntelligenceIndicatorGranularMarkingList" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.NewSentinelThreatIntelligenceIndicatorGranularMarkingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelThreatIntelligenceIndicatorGranularMarkingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.get"></a>

```go
func Get(index *f64) SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference <a name="SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.NewSentinelThreatIntelligenceIndicatorGranularMarkingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetMarkingRef">ResetMarkingRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetSelectors">ResetSelectors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetLanguage"></a>

```go
func ResetLanguage()
```

##### `ResetMarkingRef` <a name="ResetMarkingRef" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetMarkingRef"></a>

```go
func ResetMarkingRef()
```

##### `ResetSelectors` <a name="ResetSelectors" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.resetSelectors"></a>

```go
func ResetSelectors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.markingRefInput">MarkingRefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.selectorsInput">SelectorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.markingRef">MarkingRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.selectors">Selectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `MarkingRefInput`<sup>Optional</sup> <a name="MarkingRefInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.markingRefInput"></a>

```go
func MarkingRefInput() *string
```

- *Type:* *string

---

##### `SelectorsInput`<sup>Optional</sup> <a name="SelectorsInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.selectorsInput"></a>

```go
func SelectorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `MarkingRef`<sup>Required</sup> <a name="MarkingRef" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.markingRef"></a>

```go
func MarkingRef() *string
```

- *Type:* *string

---

##### `Selectors`<sup>Required</sup> <a name="Selectors" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.selectors"></a>

```go
func Selectors() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorGranularMarkingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelThreatIntelligenceIndicatorKillChainPhaseList <a name="SentinelThreatIntelligenceIndicatorKillChainPhaseList" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.NewSentinelThreatIntelligenceIndicatorKillChainPhaseList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelThreatIntelligenceIndicatorKillChainPhaseList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.get"></a>

```go
func Get(index *f64) SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference <a name="SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.NewSentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorKillChainPhaseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelThreatIntelligenceIndicatorParsedPatternList <a name="SentinelThreatIntelligenceIndicatorParsedPatternList" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.NewSentinelThreatIntelligenceIndicatorParsedPatternList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelThreatIntelligenceIndicatorParsedPatternList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.get"></a>

```go
func Get(index *f64) SentinelThreatIntelligenceIndicatorParsedPatternOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SentinelThreatIntelligenceIndicatorParsedPatternOutputReference <a name="SentinelThreatIntelligenceIndicatorParsedPatternOutputReference" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.NewSentinelThreatIntelligenceIndicatorParsedPatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelThreatIntelligenceIndicatorParsedPatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.patternTypeKey">PatternTypeKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.patternTypeValues">PatternTypeValues</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList">SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern">SentinelThreatIntelligenceIndicatorParsedPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PatternTypeKey`<sup>Required</sup> <a name="PatternTypeKey" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.patternTypeKey"></a>

```go
func PatternTypeKey() *string
```

- *Type:* *string

---

##### `PatternTypeValues`<sup>Required</sup> <a name="PatternTypeValues" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.patternTypeValues"></a>

```go
func PatternTypeValues() SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList">SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelThreatIntelligenceIndicatorParsedPattern
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPattern">SentinelThreatIntelligenceIndicatorParsedPattern</a>

---


### SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList <a name="SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.NewSentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.get"></a>

```go
func Get(index *f64) SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference <a name="SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.NewSentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues">SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues">SentinelThreatIntelligenceIndicatorParsedPatternPatternTypeValues</a>

---


### SentinelThreatIntelligenceIndicatorTimeoutsOutputReference <a name="SentinelThreatIntelligenceIndicatorTimeoutsOutputReference" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/sentinelthreatintelligenceindicator"

sentinelthreatintelligenceindicator.NewSentinelThreatIntelligenceIndicatorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelThreatIntelligenceIndicatorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelThreatIntelligenceIndicator.SentinelThreatIntelligenceIndicatorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



