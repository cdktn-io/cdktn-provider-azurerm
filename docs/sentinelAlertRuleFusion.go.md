# `sentinelAlertRuleFusion` Submodule <a name="`sentinelAlertRuleFusion` Submodule" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleFusion <a name="SentinelAlertRuleFusion" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion azurerm_sentinel_alert_rule_fusion}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

sentinelalertrulefusion.NewSentinelAlertRuleFusion(scope Construct, id *string, config SentinelAlertRuleFusionConfig) SentinelAlertRuleFusion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig">SentinelAlertRuleFusionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig">SentinelAlertRuleFusionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.putSource"></a>

```go
func PutSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.putSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.putTimeouts"></a>

```go
func PutTimeouts(value SentinelAlertRuleFusionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts">SentinelAlertRuleFusionTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.resetName"></a>

```go
func ResetName()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.resetSource"></a>

```go
func ResetSource()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SentinelAlertRuleFusion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

sentinelalertrulefusion.SentinelAlertRuleFusion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

sentinelalertrulefusion.SentinelAlertRuleFusion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

sentinelalertrulefusion.SentinelAlertRuleFusion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

sentinelalertrulefusion.SentinelAlertRuleFusion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SentinelAlertRuleFusion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SentinelAlertRuleFusion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SentinelAlertRuleFusion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SentinelAlertRuleFusion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.source">Source</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList">SentinelAlertRuleFusionSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference">SentinelAlertRuleFusionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.alertRuleTemplateGuidInput">AlertRuleTemplateGuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.alertRuleTemplateGuid">AlertRuleTemplateGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.source"></a>

```go
func Source() SentinelAlertRuleFusionSourceList
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList">SentinelAlertRuleFusionSourceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.timeouts"></a>

```go
func Timeouts() SentinelAlertRuleFusionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference">SentinelAlertRuleFusionTimeoutsOutputReference</a>

---

##### `AlertRuleTemplateGuidInput`<sup>Optional</sup> <a name="AlertRuleTemplateGuidInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.alertRuleTemplateGuidInput"></a>

```go
func AlertRuleTemplateGuidInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AlertRuleTemplateGuid`<sup>Required</sup> <a name="AlertRuleTemplateGuid" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.alertRuleTemplateGuid"></a>

```go
func AlertRuleTemplateGuid() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleFusionConfig <a name="SentinelAlertRuleFusionConfig" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

&sentinelalertrulefusion.SentinelAlertRuleFusionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AlertRuleTemplateGuid: *string,
	LogAnalyticsWorkspaceId: *string,
	Enabled: interface{},
	Id: *string,
	Name: *string,
	Source: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.alertRuleTemplateGuid">AlertRuleTemplateGuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#alert_rule_template_guid SentinelAlertRuleFusion#alert_rule_template_guid}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#log_analytics_workspace_id SentinelAlertRuleFusion#log_analytics_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#enabled SentinelAlertRuleFusion#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#id SentinelAlertRuleFusion#id}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#name SentinelAlertRuleFusion#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.source">Source</a></code> | <code>interface{}</code> | source block. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts">SentinelAlertRuleFusionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlertRuleTemplateGuid`<sup>Required</sup> <a name="AlertRuleTemplateGuid" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.alertRuleTemplateGuid"></a>

```go
AlertRuleTemplateGuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#alert_rule_template_guid SentinelAlertRuleFusion#alert_rule_template_guid}.

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#log_analytics_workspace_id SentinelAlertRuleFusion#log_analytics_workspace_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#enabled SentinelAlertRuleFusion#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#id SentinelAlertRuleFusion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#name SentinelAlertRuleFusion#name}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.source"></a>

```go
Source interface{}
```

- *Type:* interface{}

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#source SentinelAlertRuleFusion#source}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionConfig.property.timeouts"></a>

```go
Timeouts SentinelAlertRuleFusionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts">SentinelAlertRuleFusionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#timeouts SentinelAlertRuleFusion#timeouts}

---

### SentinelAlertRuleFusionSource <a name="SentinelAlertRuleFusionSource" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

&sentinelalertrulefusion.SentinelAlertRuleFusionSource {
	Name: *string,
	Enabled: interface{},
	SubType: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSource.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#name SentinelAlertRuleFusion#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSource.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#enabled SentinelAlertRuleFusion#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSource.property.subType">SubType</a></code> | <code>interface{}</code> | sub_type block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#name SentinelAlertRuleFusion#name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSource.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#enabled SentinelAlertRuleFusion#enabled}.

---

##### `SubType`<sup>Optional</sup> <a name="SubType" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSource.property.subType"></a>

```go
SubType interface{}
```

- *Type:* interface{}

sub_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#sub_type SentinelAlertRuleFusion#sub_type}

---

### SentinelAlertRuleFusionSourceSubType <a name="SentinelAlertRuleFusionSourceSubType" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

&sentinelalertrulefusion.SentinelAlertRuleFusionSourceSubType {
	Name: *string,
	SeveritiesAllowed: *[]*string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubType.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#name SentinelAlertRuleFusion#name}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubType.property.severitiesAllowed">SeveritiesAllowed</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#severities_allowed SentinelAlertRuleFusion#severities_allowed}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubType.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#enabled SentinelAlertRuleFusion#enabled}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubType.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#name SentinelAlertRuleFusion#name}.

---

##### `SeveritiesAllowed`<sup>Required</sup> <a name="SeveritiesAllowed" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubType.property.severitiesAllowed"></a>

```go
SeveritiesAllowed *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#severities_allowed SentinelAlertRuleFusion#severities_allowed}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubType.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#enabled SentinelAlertRuleFusion#enabled}.

---

### SentinelAlertRuleFusionTimeouts <a name="SentinelAlertRuleFusionTimeouts" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

&sentinelalertrulefusion.SentinelAlertRuleFusionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#create SentinelAlertRuleFusion#create}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#delete SentinelAlertRuleFusion#delete}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#read SentinelAlertRuleFusion#read}. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#update SentinelAlertRuleFusion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#create SentinelAlertRuleFusion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#delete SentinelAlertRuleFusion#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#read SentinelAlertRuleFusion#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/sentinel_alert_rule_fusion#update SentinelAlertRuleFusion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleFusionSourceList <a name="SentinelAlertRuleFusionSourceList" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

sentinelalertrulefusion.NewSentinelAlertRuleFusionSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleFusionSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleFusionSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleFusionSourceOutputReference <a name="SentinelAlertRuleFusionSourceOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

sentinelalertrulefusion.NewSentinelAlertRuleFusionSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleFusionSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.putSubType">PutSubType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.resetSubType">ResetSubType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubType` <a name="PutSubType" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.putSubType"></a>

```go
func PutSubType(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.putSubType.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetSubType` <a name="ResetSubType" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.resetSubType"></a>

```go
func ResetSubType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.subType">SubType</a></code> | <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList">SentinelAlertRuleFusionSourceSubTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.subTypeInput">SubTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubType`<sup>Required</sup> <a name="SubType" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.subType"></a>

```go
func SubType() SentinelAlertRuleFusionSourceSubTypeList
```

- *Type:* <a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList">SentinelAlertRuleFusionSourceSubTypeList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SubTypeInput`<sup>Optional</sup> <a name="SubTypeInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.subTypeInput"></a>

```go
func SubTypeInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleFusionSourceSubTypeList <a name="SentinelAlertRuleFusionSourceSubTypeList" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

sentinelalertrulefusion.NewSentinelAlertRuleFusionSourceSubTypeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleFusionSourceSubTypeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleFusionSourceSubTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleFusionSourceSubTypeOutputReference <a name="SentinelAlertRuleFusionSourceSubTypeOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

sentinelalertrulefusion.NewSentinelAlertRuleFusionSourceSubTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleFusionSourceSubTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.severitiesAllowedInput">SeveritiesAllowedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.severitiesAllowed">SeveritiesAllowed</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SeveritiesAllowedInput`<sup>Optional</sup> <a name="SeveritiesAllowedInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.severitiesAllowedInput"></a>

```go
func SeveritiesAllowedInput() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SeveritiesAllowed`<sup>Required</sup> <a name="SeveritiesAllowed" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.severitiesAllowed"></a>

```go
func SeveritiesAllowed() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionSourceSubTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleFusionTimeoutsOutputReference <a name="SentinelAlertRuleFusionTimeoutsOutputReference" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sentinelalertrulefusion"

sentinelalertrulefusion.NewSentinelAlertRuleFusionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelAlertRuleFusionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sentinelAlertRuleFusion.SentinelAlertRuleFusionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



