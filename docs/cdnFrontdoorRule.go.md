# `cdnFrontdoorRule` Submodule <a name="`cdnFrontdoorRule` Submodule" id="@cdktn/provider-azurerm.cdnFrontdoorRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorRule <a name="CdnFrontdoorRule" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule azurerm_cdn_frontdoor_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRule(scope Construct, id *string, config CdnFrontdoorRuleConfig) CdnFrontdoorRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig">CdnFrontdoorRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig">CdnFrontdoorRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetBehaviourOnMatch">ResetBehaviourOnMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putActions"></a>

```go
func PutActions(value CdnFrontdoorRuleActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putConditions"></a>

```go
func PutConditions(value CdnFrontdoorRuleConditions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putTimeouts"></a>

```go
func PutTimeouts(value CdnFrontdoorRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a>

---

##### `ResetBehaviourOnMatch` <a name="ResetBehaviourOnMatch" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetBehaviourOnMatch"></a>

```go
func ResetBehaviourOnMatch()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CdnFrontdoorRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.CdnFrontdoorRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.CdnFrontdoorRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.CdnFrontdoorRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.CdnFrontdoorRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CdnFrontdoorRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CdnFrontdoorRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CdnFrontdoorRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference">CdnFrontdoorRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetName">CdnFrontdoorRuleSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference">CdnFrontdoorRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference">CdnFrontdoorRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.behaviourOnMatchInput">BehaviourOnMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetIdInput">CdnFrontdoorRuleSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.conditionsInput">ConditionsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.behaviourOnMatch">BehaviourOnMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetId">CdnFrontdoorRuleSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.order">Order</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.actions"></a>

```go
func Actions() CdnFrontdoorRuleActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference">CdnFrontdoorRuleActionsOutputReference</a>

---

##### `CdnFrontdoorRuleSetName`<sup>Required</sup> <a name="CdnFrontdoorRuleSetName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetName"></a>

```go
func CdnFrontdoorRuleSetName() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.conditions"></a>

```go
func Conditions() CdnFrontdoorRuleConditionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference">CdnFrontdoorRuleConditionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.timeouts"></a>

```go
func Timeouts() CdnFrontdoorRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference">CdnFrontdoorRuleTimeoutsOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.actionsInput"></a>

```go
func ActionsInput() CdnFrontdoorRuleActions
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

---

##### `BehaviourOnMatchInput`<sup>Optional</sup> <a name="BehaviourOnMatchInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.behaviourOnMatchInput"></a>

```go
func BehaviourOnMatchInput() *string
```

- *Type:* *string

---

##### `CdnFrontdoorRuleSetIdInput`<sup>Optional</sup> <a name="CdnFrontdoorRuleSetIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetIdInput"></a>

```go
func CdnFrontdoorRuleSetIdInput() *string
```

- *Type:* *string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.conditionsInput"></a>

```go
func ConditionsInput() CdnFrontdoorRuleConditions
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BehaviourOnMatch`<sup>Required</sup> <a name="BehaviourOnMatch" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.behaviourOnMatch"></a>

```go
func BehaviourOnMatch() *string
```

- *Type:* *string

---

##### `CdnFrontdoorRuleSetId`<sup>Required</sup> <a name="CdnFrontdoorRuleSetId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.cdnFrontdoorRuleSetId"></a>

```go
func CdnFrontdoorRuleSetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorRuleActions <a name="CdnFrontdoorRuleActions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleActions {
	ModifyRequestHeader: interface{},
	ModifyResponseHeader: interface{},
	RouteConfigurationOverride: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride,
	UrlRedirect: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect,
	UrlRewrite: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.modifyRequestHeader">ModifyRequestHeader</a></code> | <code>interface{}</code> | modify_request_header block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.modifyResponseHeader">ModifyResponseHeader</a></code> | <code>interface{}</code> | modify_response_header block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.routeConfigurationOverride">RouteConfigurationOverride</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a></code> | route_configuration_override block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.urlRedirect">UrlRedirect</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a></code> | url_redirect block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a></code> | url_rewrite block. |

---

##### `ModifyRequestHeader`<sup>Optional</sup> <a name="ModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.modifyRequestHeader"></a>

```go
ModifyRequestHeader interface{}
```

- *Type:* interface{}

modify_request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#modify_request_header CdnFrontdoorRule#modify_request_header}

---

##### `ModifyResponseHeader`<sup>Optional</sup> <a name="ModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.modifyResponseHeader"></a>

```go
ModifyResponseHeader interface{}
```

- *Type:* interface{}

modify_response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#modify_response_header CdnFrontdoorRule#modify_response_header}

---

##### `RouteConfigurationOverride`<sup>Optional</sup> <a name="RouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.routeConfigurationOverride"></a>

```go
RouteConfigurationOverride CdnFrontdoorRuleActionsRouteConfigurationOverride
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a>

route_configuration_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#route_configuration_override CdnFrontdoorRule#route_configuration_override}

---

##### `UrlRedirect`<sup>Optional</sup> <a name="UrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.urlRedirect"></a>

```go
UrlRedirect CdnFrontdoorRuleActionsUrlRedirect
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a>

url_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#url_redirect CdnFrontdoorRule#url_redirect}

---

##### `UrlRewrite`<sup>Optional</sup> <a name="UrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions.property.urlRewrite"></a>

```go
UrlRewrite CdnFrontdoorRuleActionsUrlRewrite
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#url_rewrite CdnFrontdoorRule#url_rewrite}

---

### CdnFrontdoorRuleActionsModifyRequestHeader <a name="CdnFrontdoorRuleActionsModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleActionsModifyRequestHeader {
	HeaderName: *string,
	Operator: *string,
	HeaderValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.property.headerName">HeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.property.headerValue">HeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#header_value CdnFrontdoorRule#header_value}. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `HeaderValue`<sup>Optional</sup> <a name="HeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeader.property.headerValue"></a>

```go
HeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#header_value CdnFrontdoorRule#header_value}.

---

### CdnFrontdoorRuleActionsModifyResponseHeader <a name="CdnFrontdoorRuleActionsModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleActionsModifyResponseHeader {
	HeaderName: *string,
	Operator: *string,
	HeaderValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.property.headerName">HeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.property.headerValue">HeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#header_value CdnFrontdoorRule#header_value}. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `HeaderValue`<sup>Optional</sup> <a name="HeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeader.property.headerValue"></a>

```go
HeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#header_value CdnFrontdoorRule#header_value}.

---

### CdnFrontdoorRuleActionsRouteConfigurationOverride <a name="CdnFrontdoorRuleActionsRouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleActionsRouteConfigurationOverride {
	Caching: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching,
	OriginGroup: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride.property.caching">Caching</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a></code> | caching block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride.property.originGroup">OriginGroup</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a></code> | origin_group block. |

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride.property.caching"></a>

```go
Caching CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a>

caching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#caching CdnFrontdoorRule#caching}

---

##### `OriginGroup`<sup>Optional</sup> <a name="OriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride.property.originGroup"></a>

```go
OriginGroup CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a>

origin_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#origin_group CdnFrontdoorRule#origin_group}

---

### CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching <a name="CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching {
	Behaviour: *string,
	CompressionEnabled: interface{},
	Duration: *string,
	QueryStringBehaviour: *string,
	QueryStringParameters: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.behaviour">Behaviour</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#behaviour CdnFrontdoorRule#behaviour}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.compressionEnabled">CompressionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#compression_enabled CdnFrontdoorRule#compression_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#duration CdnFrontdoorRule#duration}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.queryStringBehaviour">QueryStringBehaviour</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#query_string_behaviour CdnFrontdoorRule#query_string_behaviour}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.queryStringParameters">QueryStringParameters</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#query_string_parameters CdnFrontdoorRule#query_string_parameters}. |

---

##### `Behaviour`<sup>Required</sup> <a name="Behaviour" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.behaviour"></a>

```go
Behaviour *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#behaviour CdnFrontdoorRule#behaviour}.

---

##### `CompressionEnabled`<sup>Optional</sup> <a name="CompressionEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.compressionEnabled"></a>

```go
CompressionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#compression_enabled CdnFrontdoorRule#compression_enabled}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#duration CdnFrontdoorRule#duration}.

---

##### `QueryStringBehaviour`<sup>Optional</sup> <a name="QueryStringBehaviour" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.queryStringBehaviour"></a>

```go
QueryStringBehaviour *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#query_string_behaviour CdnFrontdoorRule#query_string_behaviour}.

---

##### `QueryStringParameters`<sup>Optional</sup> <a name="QueryStringParameters" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching.property.queryStringParameters"></a>

```go
QueryStringParameters *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#query_string_parameters CdnFrontdoorRule#query_string_parameters}.

---

### CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup <a name="CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup {
	CdnFrontdoorOriginGroupId: *string,
	ForwardingProtocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup.property.cdnFrontdoorOriginGroupId">CdnFrontdoorOriginGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_origin_group_id CdnFrontdoorRule#cdn_frontdoor_origin_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup.property.forwardingProtocol">ForwardingProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#forwarding_protocol CdnFrontdoorRule#forwarding_protocol}. |

---

##### `CdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="CdnFrontdoorOriginGroupId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup.property.cdnFrontdoorOriginGroupId"></a>

```go
CdnFrontdoorOriginGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_origin_group_id CdnFrontdoorRule#cdn_frontdoor_origin_group_id}.

---

##### `ForwardingProtocol`<sup>Required</sup> <a name="ForwardingProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup.property.forwardingProtocol"></a>

```go
ForwardingProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#forwarding_protocol CdnFrontdoorRule#forwarding_protocol}.

---

### CdnFrontdoorRuleActionsUrlRedirect <a name="CdnFrontdoorRuleActionsUrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleActionsUrlRedirect {
	RedirectType: *string,
	DestinationFragment: *string,
	DestinationHostName: *string,
	DestinationPath: *string,
	QueryString: *string,
	RedirectProtocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.redirectType">RedirectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#redirect_type CdnFrontdoorRule#redirect_type}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.destinationFragment">DestinationFragment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#destination_fragment CdnFrontdoorRule#destination_fragment}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.destinationHostName">DestinationHostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#destination_host_name CdnFrontdoorRule#destination_host_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.queryString">QueryString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#query_string CdnFrontdoorRule#query_string}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.redirectProtocol">RedirectProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#redirect_protocol CdnFrontdoorRule#redirect_protocol}. |

---

##### `RedirectType`<sup>Required</sup> <a name="RedirectType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.redirectType"></a>

```go
RedirectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#redirect_type CdnFrontdoorRule#redirect_type}.

---

##### `DestinationFragment`<sup>Optional</sup> <a name="DestinationFragment" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.destinationFragment"></a>

```go
DestinationFragment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#destination_fragment CdnFrontdoorRule#destination_fragment}.

---

##### `DestinationHostName`<sup>Optional</sup> <a name="DestinationHostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.destinationHostName"></a>

```go
DestinationHostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#destination_host_name CdnFrontdoorRule#destination_host_name}.

---

##### `DestinationPath`<sup>Optional</sup> <a name="DestinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.destinationPath"></a>

```go
DestinationPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}.

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.queryString"></a>

```go
QueryString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#query_string CdnFrontdoorRule#query_string}.

---

##### `RedirectProtocol`<sup>Optional</sup> <a name="RedirectProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect.property.redirectProtocol"></a>

```go
RedirectProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#redirect_protocol CdnFrontdoorRule#redirect_protocol}.

---

### CdnFrontdoorRuleActionsUrlRewrite <a name="CdnFrontdoorRuleActionsUrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleActionsUrlRewrite {
	DestinationPath: *string,
	SourcePattern: *string,
	PreserveUnmatchedPathEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.property.sourcePattern">SourcePattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#source_pattern CdnFrontdoorRule#source_pattern}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.property.preserveUnmatchedPathEnabled">PreserveUnmatchedPathEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#preserve_unmatched_path_enabled CdnFrontdoorRule#preserve_unmatched_path_enabled}. |

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.property.destinationPath"></a>

```go
DestinationPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}.

---

##### `SourcePattern`<sup>Required</sup> <a name="SourcePattern" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.property.sourcePattern"></a>

```go
SourcePattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#source_pattern CdnFrontdoorRule#source_pattern}.

---

##### `PreserveUnmatchedPathEnabled`<sup>Optional</sup> <a name="PreserveUnmatchedPathEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite.property.preserveUnmatchedPathEnabled"></a>

```go
PreserveUnmatchedPathEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#preserve_unmatched_path_enabled CdnFrontdoorRule#preserve_unmatched_path_enabled}.

---

### CdnFrontdoorRuleConditions <a name="CdnFrontdoorRuleConditions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditions {
	ClientPort: interface{},
	DeviceType: interface{},
	HostName: interface{},
	HttpVersion: interface{},
	PostArgument: interface{},
	QueryString: interface{},
	RemoteAddress: interface{},
	RequestBody: interface{},
	RequestCookies: interface{},
	RequestFileExtension: interface{},
	RequestFilename: interface{},
	RequestHeader: interface{},
	RequestMethod: interface{},
	RequestPath: interface{},
	RequestScheme: interface{},
	RequestUrl: interface{},
	ServerPort: interface{},
	SocketAddress: interface{},
	SslProtocol: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.clientPort">ClientPort</a></code> | <code>interface{}</code> | client_port block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.deviceType">DeviceType</a></code> | <code>interface{}</code> | device_type block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.hostName">HostName</a></code> | <code>interface{}</code> | host_name block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.httpVersion">HttpVersion</a></code> | <code>interface{}</code> | http_version block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.postArgument">PostArgument</a></code> | <code>interface{}</code> | post_argument block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.queryString">QueryString</a></code> | <code>interface{}</code> | query_string block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.remoteAddress">RemoteAddress</a></code> | <code>interface{}</code> | remote_address block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestBody">RequestBody</a></code> | <code>interface{}</code> | request_body block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestCookies">RequestCookies</a></code> | <code>interface{}</code> | request_cookies block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestFileExtension">RequestFileExtension</a></code> | <code>interface{}</code> | request_file_extension block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestFilename">RequestFilename</a></code> | <code>interface{}</code> | request_filename block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestHeader">RequestHeader</a></code> | <code>interface{}</code> | request_header block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestMethod">RequestMethod</a></code> | <code>interface{}</code> | request_method block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestPath">RequestPath</a></code> | <code>interface{}</code> | request_path block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestScheme">RequestScheme</a></code> | <code>interface{}</code> | request_scheme block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestUrl">RequestUrl</a></code> | <code>interface{}</code> | request_url block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.serverPort">ServerPort</a></code> | <code>interface{}</code> | server_port block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.socketAddress">SocketAddress</a></code> | <code>interface{}</code> | socket_address block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.sslProtocol">SslProtocol</a></code> | <code>interface{}</code> | ssl_protocol block. |

---

##### `ClientPort`<sup>Optional</sup> <a name="ClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.clientPort"></a>

```go
ClientPort interface{}
```

- *Type:* interface{}

client_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#client_port CdnFrontdoorRule#client_port}

---

##### `DeviceType`<sup>Optional</sup> <a name="DeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.deviceType"></a>

```go
DeviceType interface{}
```

- *Type:* interface{}

device_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#device_type CdnFrontdoorRule#device_type}

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.hostName"></a>

```go
HostName interface{}
```

- *Type:* interface{}

host_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#host_name CdnFrontdoorRule#host_name}

---

##### `HttpVersion`<sup>Optional</sup> <a name="HttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.httpVersion"></a>

```go
HttpVersion interface{}
```

- *Type:* interface{}

http_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#http_version CdnFrontdoorRule#http_version}

---

##### `PostArgument`<sup>Optional</sup> <a name="PostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.postArgument"></a>

```go
PostArgument interface{}
```

- *Type:* interface{}

post_argument block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#post_argument CdnFrontdoorRule#post_argument}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.queryString"></a>

```go
QueryString interface{}
```

- *Type:* interface{}

query_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#query_string CdnFrontdoorRule#query_string}

---

##### `RemoteAddress`<sup>Optional</sup> <a name="RemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.remoteAddress"></a>

```go
RemoteAddress interface{}
```

- *Type:* interface{}

remote_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#remote_address CdnFrontdoorRule#remote_address}

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestBody"></a>

```go
RequestBody interface{}
```

- *Type:* interface{}

request_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#request_body CdnFrontdoorRule#request_body}

---

##### `RequestCookies`<sup>Optional</sup> <a name="RequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestCookies"></a>

```go
RequestCookies interface{}
```

- *Type:* interface{}

request_cookies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#request_cookies CdnFrontdoorRule#request_cookies}

---

##### `RequestFileExtension`<sup>Optional</sup> <a name="RequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestFileExtension"></a>

```go
RequestFileExtension interface{}
```

- *Type:* interface{}

request_file_extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#request_file_extension CdnFrontdoorRule#request_file_extension}

---

##### `RequestFilename`<sup>Optional</sup> <a name="RequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestFilename"></a>

```go
RequestFilename interface{}
```

- *Type:* interface{}

request_filename block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#request_filename CdnFrontdoorRule#request_filename}

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestHeader"></a>

```go
RequestHeader interface{}
```

- *Type:* interface{}

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#request_header CdnFrontdoorRule#request_header}

---

##### `RequestMethod`<sup>Optional</sup> <a name="RequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestMethod"></a>

```go
RequestMethod interface{}
```

- *Type:* interface{}

request_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#request_method CdnFrontdoorRule#request_method}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestPath"></a>

```go
RequestPath interface{}
```

- *Type:* interface{}

request_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#request_path CdnFrontdoorRule#request_path}

---

##### `RequestScheme`<sup>Optional</sup> <a name="RequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestScheme"></a>

```go
RequestScheme interface{}
```

- *Type:* interface{}

request_scheme block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#request_scheme CdnFrontdoorRule#request_scheme}

---

##### `RequestUrl`<sup>Optional</sup> <a name="RequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.requestUrl"></a>

```go
RequestUrl interface{}
```

- *Type:* interface{}

request_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#request_url CdnFrontdoorRule#request_url}

---

##### `ServerPort`<sup>Optional</sup> <a name="ServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.serverPort"></a>

```go
ServerPort interface{}
```

- *Type:* interface{}

server_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#server_port CdnFrontdoorRule#server_port}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.socketAddress"></a>

```go
SocketAddress interface{}
```

- *Type:* interface{}

socket_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#socket_address CdnFrontdoorRule#socket_address}

---

##### `SslProtocol`<sup>Optional</sup> <a name="SslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions.property.sslProtocol"></a>

```go
SslProtocol interface{}
```

- *Type:* interface{}

ssl_protocol block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#ssl_protocol CdnFrontdoorRule#ssl_protocol}

---

### CdnFrontdoorRuleConditionsClientPort <a name="CdnFrontdoorRuleConditionsClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsClientPort {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPort.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsDeviceType <a name="CdnFrontdoorRuleConditionsDeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsDeviceType {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceType.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsHostName <a name="CdnFrontdoorRuleConditionsHostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsHostName {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostName.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsHttpVersion <a name="CdnFrontdoorRuleConditionsHttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsHttpVersion {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersion.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsPostArgument <a name="CdnFrontdoorRuleConditionsPostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsPostArgument {
	Name: *string,
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgument.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsQueryString <a name="CdnFrontdoorRuleConditionsQueryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsQueryString {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryString.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRemoteAddress <a name="CdnFrontdoorRuleConditionsRemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsRemoteAddress {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddress.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestBody <a name="CdnFrontdoorRuleConditionsRequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsRequestBody {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBody.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestCookies <a name="CdnFrontdoorRuleConditionsRequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsRequestCookies {
	Name: *string,
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookies.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestFileExtension <a name="CdnFrontdoorRuleConditionsRequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsRequestFileExtension {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestFilename <a name="CdnFrontdoorRuleConditionsRequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsRequestFilename {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilename.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestHeader <a name="CdnFrontdoorRuleConditionsRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsRequestHeader {
	Name: *string,
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeader.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestMethod <a name="CdnFrontdoorRuleConditionsRequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsRequestMethod {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethod.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestPath <a name="CdnFrontdoorRuleConditionsRequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsRequestPath {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPath.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestScheme <a name="CdnFrontdoorRuleConditionsRequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsRequestScheme {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestScheme.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsRequestUrl <a name="CdnFrontdoorRuleConditionsRequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsRequestUrl {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrl.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsServerPort <a name="CdnFrontdoorRuleConditionsServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsServerPort {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPort.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsSocketAddress <a name="CdnFrontdoorRuleConditionsSocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsSocketAddress {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddress.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConditionsSslProtocol <a name="CdnFrontdoorRuleConditionsSslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConditionsSslProtocol {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocol.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}.

---

### CdnFrontdoorRuleConfig <a name="CdnFrontdoorRuleConfig" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Actions: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.cdnFrontdoorRule.CdnFrontdoorRuleActions,
	CdnFrontdoorRuleSetId: *string,
	Name: *string,
	Order: *f64,
	BehaviourOnMatch: *string,
	Conditions: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.cdnFrontdoorRule.CdnFrontdoorRuleConditions,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a></code> | actions block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.cdnFrontdoorRuleSetId">CdnFrontdoorRuleSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_rule_set_id CdnFrontdoorRule#cdn_frontdoor_rule_set_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.order">Order</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#order CdnFrontdoorRule#order}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.behaviourOnMatch">BehaviourOnMatch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#behaviour_on_match CdnFrontdoorRule#behaviour_on_match}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a></code> | conditions block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#id CdnFrontdoorRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.actions"></a>

```go
Actions CdnFrontdoorRuleActions
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#actions CdnFrontdoorRule#actions}

---

##### `CdnFrontdoorRuleSetId`<sup>Required</sup> <a name="CdnFrontdoorRuleSetId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.cdnFrontdoorRuleSetId"></a>

```go
CdnFrontdoorRuleSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_rule_set_id CdnFrontdoorRule#cdn_frontdoor_rule_set_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}.

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#order CdnFrontdoorRule#order}.

---

##### `BehaviourOnMatch`<sup>Optional</sup> <a name="BehaviourOnMatch" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.behaviourOnMatch"></a>

```go
BehaviourOnMatch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#behaviour_on_match CdnFrontdoorRule#behaviour_on_match}.

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.conditions"></a>

```go
Conditions CdnFrontdoorRuleConditions
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#conditions CdnFrontdoorRule#conditions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#id CdnFrontdoorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConfig.property.timeouts"></a>

```go
Timeouts CdnFrontdoorRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts">CdnFrontdoorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#timeouts CdnFrontdoorRule#timeouts}

---

### CdnFrontdoorRuleTimeouts <a name="CdnFrontdoorRuleTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

&cdnfrontdoorrule.CdnFrontdoorRuleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#create CdnFrontdoorRule#create}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#delete CdnFrontdoorRule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#read CdnFrontdoorRule#read}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#update CdnFrontdoorRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#create CdnFrontdoorRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#delete CdnFrontdoorRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#read CdnFrontdoorRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/cdn_frontdoor_rule#update CdnFrontdoorRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorRuleActionsModifyRequestHeaderList <a name="CdnFrontdoorRuleActionsModifyRequestHeaderList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleActionsModifyRequestHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleActionsModifyRequestHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference <a name="CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleActionsModifyRequestHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.resetHeaderValue">ResetHeaderValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderValue` <a name="ResetHeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.resetHeaderValue"></a>

```go
func ResetHeaderValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerValueInput"></a>

```go
func HeaderValueInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleActionsModifyResponseHeaderList <a name="CdnFrontdoorRuleActionsModifyResponseHeaderList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleActionsModifyResponseHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleActionsModifyResponseHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference <a name="CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleActionsModifyResponseHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.resetHeaderValue">ResetHeaderValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderValue` <a name="ResetHeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.resetHeaderValue"></a>

```go
func ResetHeaderValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerValueInput"></a>

```go
func HeaderValueInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleActionsOutputReference <a name="CdnFrontdoorRuleActionsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorRuleActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putModifyRequestHeader">PutModifyRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putModifyResponseHeader">PutModifyResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putRouteConfigurationOverride">PutRouteConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRedirect">PutUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRewrite">PutUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetModifyRequestHeader">ResetModifyRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetModifyResponseHeader">ResetModifyResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetRouteConfigurationOverride">ResetRouteConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetUrlRedirect">ResetUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetUrlRewrite">ResetUrlRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModifyRequestHeader` <a name="PutModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putModifyRequestHeader"></a>

```go
func PutModifyRequestHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putModifyRequestHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutModifyResponseHeader` <a name="PutModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putModifyResponseHeader"></a>

```go
func PutModifyResponseHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putModifyResponseHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRouteConfigurationOverride` <a name="PutRouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putRouteConfigurationOverride"></a>

```go
func PutRouteConfigurationOverride(value CdnFrontdoorRuleActionsRouteConfigurationOverride)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putRouteConfigurationOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a>

---

##### `PutUrlRedirect` <a name="PutUrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRedirect"></a>

```go
func PutUrlRedirect(value CdnFrontdoorRuleActionsUrlRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a>

---

##### `PutUrlRewrite` <a name="PutUrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRewrite"></a>

```go
func PutUrlRewrite(value CdnFrontdoorRuleActionsUrlRewrite)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a>

---

##### `ResetModifyRequestHeader` <a name="ResetModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetModifyRequestHeader"></a>

```go
func ResetModifyRequestHeader()
```

##### `ResetModifyResponseHeader` <a name="ResetModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetModifyResponseHeader"></a>

```go
func ResetModifyResponseHeader()
```

##### `ResetRouteConfigurationOverride` <a name="ResetRouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetRouteConfigurationOverride"></a>

```go
func ResetRouteConfigurationOverride()
```

##### `ResetUrlRedirect` <a name="ResetUrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetUrlRedirect"></a>

```go
func ResetUrlRedirect()
```

##### `ResetUrlRewrite` <a name="ResetUrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.resetUrlRewrite"></a>

```go
func ResetUrlRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyRequestHeader">ModifyRequestHeader</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList">CdnFrontdoorRuleActionsModifyRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyResponseHeader">ModifyResponseHeader</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList">CdnFrontdoorRuleActionsModifyResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.routeConfigurationOverride">RouteConfigurationOverride</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRedirect">UrlRedirect</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference">CdnFrontdoorRuleActionsUrlRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference">CdnFrontdoorRuleActionsUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyRequestHeaderInput">ModifyRequestHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyResponseHeaderInput">ModifyResponseHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.routeConfigurationOverrideInput">RouteConfigurationOverrideInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRedirectInput">UrlRedirectInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRewriteInput">UrlRewriteInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModifyRequestHeader`<sup>Required</sup> <a name="ModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyRequestHeader"></a>

```go
func ModifyRequestHeader() CdnFrontdoorRuleActionsModifyRequestHeaderList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyRequestHeaderList">CdnFrontdoorRuleActionsModifyRequestHeaderList</a>

---

##### `ModifyResponseHeader`<sup>Required</sup> <a name="ModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyResponseHeader"></a>

```go
func ModifyResponseHeader() CdnFrontdoorRuleActionsModifyResponseHeaderList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsModifyResponseHeaderList">CdnFrontdoorRuleActionsModifyResponseHeaderList</a>

---

##### `RouteConfigurationOverride`<sup>Required</sup> <a name="RouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.routeConfigurationOverride"></a>

```go
func RouteConfigurationOverride() CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference</a>

---

##### `UrlRedirect`<sup>Required</sup> <a name="UrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRedirect"></a>

```go
func UrlRedirect() CdnFrontdoorRuleActionsUrlRedirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference">CdnFrontdoorRuleActionsUrlRedirectOutputReference</a>

---

##### `UrlRewrite`<sup>Required</sup> <a name="UrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRewrite"></a>

```go
func UrlRewrite() CdnFrontdoorRuleActionsUrlRewriteOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference">CdnFrontdoorRuleActionsUrlRewriteOutputReference</a>

---

##### `ModifyRequestHeaderInput`<sup>Optional</sup> <a name="ModifyRequestHeaderInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyRequestHeaderInput"></a>

```go
func ModifyRequestHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `ModifyResponseHeaderInput`<sup>Optional</sup> <a name="ModifyResponseHeaderInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.modifyResponseHeaderInput"></a>

```go
func ModifyResponseHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RouteConfigurationOverrideInput`<sup>Optional</sup> <a name="RouteConfigurationOverrideInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.routeConfigurationOverrideInput"></a>

```go
func RouteConfigurationOverrideInput() CdnFrontdoorRuleActionsRouteConfigurationOverride
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a>

---

##### `UrlRedirectInput`<sup>Optional</sup> <a name="UrlRedirectInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRedirectInput"></a>

```go
func UrlRedirectInput() CdnFrontdoorRuleActionsUrlRedirect
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a>

---

##### `UrlRewriteInput`<sup>Optional</sup> <a name="UrlRewriteInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.urlRewriteInput"></a>

```go
func UrlRewriteInput() CdnFrontdoorRuleActionsUrlRewrite
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorRuleActions
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActions">CdnFrontdoorRuleActions</a>

---


### CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference <a name="CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetCompressionEnabled">ResetCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetQueryStringBehaviour">ResetQueryStringBehaviour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetQueryStringParameters">ResetQueryStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompressionEnabled` <a name="ResetCompressionEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetCompressionEnabled"></a>

```go
func ResetCompressionEnabled()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetQueryStringBehaviour` <a name="ResetQueryStringBehaviour" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetQueryStringBehaviour"></a>

```go
func ResetQueryStringBehaviour()
```

##### `ResetQueryStringParameters` <a name="ResetQueryStringParameters" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.resetQueryStringParameters"></a>

```go
func ResetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.behaviourInput">BehaviourInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.compressionEnabledInput">CompressionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringBehaviourInput">QueryStringBehaviourInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringParametersInput">QueryStringParametersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.behaviour">Behaviour</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.compressionEnabled">CompressionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringBehaviour">QueryStringBehaviour</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BehaviourInput`<sup>Optional</sup> <a name="BehaviourInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.behaviourInput"></a>

```go
func BehaviourInput() *string
```

- *Type:* *string

---

##### `CompressionEnabledInput`<sup>Optional</sup> <a name="CompressionEnabledInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.compressionEnabledInput"></a>

```go
func CompressionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `QueryStringBehaviourInput`<sup>Optional</sup> <a name="QueryStringBehaviourInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringBehaviourInput"></a>

```go
func QueryStringBehaviourInput() *string
```

- *Type:* *string

---

##### `QueryStringParametersInput`<sup>Optional</sup> <a name="QueryStringParametersInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringParametersInput"></a>

```go
func QueryStringParametersInput() *[]*string
```

- *Type:* *[]*string

---

##### `Behaviour`<sup>Required</sup> <a name="Behaviour" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.behaviour"></a>

```go
func Behaviour() *string
```

- *Type:* *string

---

##### `CompressionEnabled`<sup>Required</sup> <a name="CompressionEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.compressionEnabled"></a>

```go
func CompressionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `QueryStringBehaviour`<sup>Required</sup> <a name="QueryStringBehaviour" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringBehaviour"></a>

```go
func QueryStringBehaviour() *string
```

- *Type:* *string

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringParameters"></a>

```go
func QueryStringParameters() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a>

---


### CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference <a name="CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.cdnFrontdoorOriginGroupIdInput">CdnFrontdoorOriginGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.forwardingProtocolInput">ForwardingProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.cdnFrontdoorOriginGroupId">CdnFrontdoorOriginGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.forwardingProtocol">ForwardingProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CdnFrontdoorOriginGroupIdInput`<sup>Optional</sup> <a name="CdnFrontdoorOriginGroupIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.cdnFrontdoorOriginGroupIdInput"></a>

```go
func CdnFrontdoorOriginGroupIdInput() *string
```

- *Type:* *string

---

##### `ForwardingProtocolInput`<sup>Optional</sup> <a name="ForwardingProtocolInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.forwardingProtocolInput"></a>

```go
func ForwardingProtocolInput() *string
```

- *Type:* *string

---

##### `CdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="CdnFrontdoorOriginGroupId" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.cdnFrontdoorOriginGroupId"></a>

```go
func CdnFrontdoorOriginGroupId() *string
```

- *Type:* *string

---

##### `ForwardingProtocol`<sup>Required</sup> <a name="ForwardingProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.forwardingProtocol"></a>

```go
func ForwardingProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a>

---


### CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference <a name="CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.putCaching">PutCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.putOriginGroup">PutOriginGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.resetOriginGroup">ResetOriginGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaching` <a name="PutCaching" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.putCaching"></a>

```go
func PutCaching(value CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.putCaching.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a>

---

##### `PutOriginGroup` <a name="PutOriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.putOriginGroup"></a>

```go
func PutOriginGroup(value CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.putOriginGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a>

---

##### `ResetOriginGroup` <a name="ResetOriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.resetOriginGroup"></a>

```go
func ResetOriginGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.caching">Caching</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.originGroup">OriginGroup</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.cachingInput">CachingInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.originGroupInput">OriginGroupInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.caching"></a>

```go
func Caching() CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference</a>

---

##### `OriginGroup`<sup>Required</sup> <a name="OriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.originGroup"></a>

```go
func OriginGroup() CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference</a>

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.cachingInput"></a>

```go
func CachingInput() CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching</a>

---

##### `OriginGroupInput`<sup>Optional</sup> <a name="OriginGroupInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.originGroupInput"></a>

```go
func OriginGroupInput() CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorRuleActionsRouteConfigurationOverride
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsRouteConfigurationOverride">CdnFrontdoorRuleActionsRouteConfigurationOverride</a>

---


### CdnFrontdoorRuleActionsUrlRedirectOutputReference <a name="CdnFrontdoorRuleActionsUrlRedirectOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleActionsUrlRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorRuleActionsUrlRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetDestinationFragment">ResetDestinationFragment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetDestinationHostName">ResetDestinationHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetDestinationPath">ResetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetRedirectProtocol">ResetRedirectProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationFragment` <a name="ResetDestinationFragment" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetDestinationFragment"></a>

```go
func ResetDestinationFragment()
```

##### `ResetDestinationHostName` <a name="ResetDestinationHostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetDestinationHostName"></a>

```go
func ResetDestinationHostName()
```

##### `ResetDestinationPath` <a name="ResetDestinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetDestinationPath"></a>

```go
func ResetDestinationPath()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```

##### `ResetRedirectProtocol` <a name="ResetRedirectProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.resetRedirectProtocol"></a>

```go
func ResetRedirectProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationFragmentInput">DestinationFragmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationHostNameInput">DestinationHostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectProtocolInput">RedirectProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectTypeInput">RedirectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationFragment">DestinationFragment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationHostName">DestinationHostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectProtocol">RedirectProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectType">RedirectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationFragmentInput`<sup>Optional</sup> <a name="DestinationFragmentInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationFragmentInput"></a>

```go
func DestinationFragmentInput() *string
```

- *Type:* *string

---

##### `DestinationHostNameInput`<sup>Optional</sup> <a name="DestinationHostNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationHostNameInput"></a>

```go
func DestinationHostNameInput() *string
```

- *Type:* *string

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationPathInput"></a>

```go
func DestinationPathInput() *string
```

- *Type:* *string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() *string
```

- *Type:* *string

---

##### `RedirectProtocolInput`<sup>Optional</sup> <a name="RedirectProtocolInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectProtocolInput"></a>

```go
func RedirectProtocolInput() *string
```

- *Type:* *string

---

##### `RedirectTypeInput`<sup>Optional</sup> <a name="RedirectTypeInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectTypeInput"></a>

```go
func RedirectTypeInput() *string
```

- *Type:* *string

---

##### `DestinationFragment`<sup>Required</sup> <a name="DestinationFragment" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationFragment"></a>

```go
func DestinationFragment() *string
```

- *Type:* *string

---

##### `DestinationHostName`<sup>Required</sup> <a name="DestinationHostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationHostName"></a>

```go
func DestinationHostName() *string
```

- *Type:* *string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.destinationPath"></a>

```go
func DestinationPath() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `RedirectProtocol`<sup>Required</sup> <a name="RedirectProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectProtocol"></a>

```go
func RedirectProtocol() *string
```

- *Type:* *string

---

##### `RedirectType`<sup>Required</sup> <a name="RedirectType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.redirectType"></a>

```go
func RedirectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorRuleActionsUrlRedirect
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRedirect">CdnFrontdoorRuleActionsUrlRedirect</a>

---


### CdnFrontdoorRuleActionsUrlRewriteOutputReference <a name="CdnFrontdoorRuleActionsUrlRewriteOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleActionsUrlRewriteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorRuleActionsUrlRewriteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.resetPreserveUnmatchedPathEnabled">ResetPreserveUnmatchedPathEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreserveUnmatchedPathEnabled` <a name="ResetPreserveUnmatchedPathEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.resetPreserveUnmatchedPathEnabled"></a>

```go
func ResetPreserveUnmatchedPathEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.preserveUnmatchedPathEnabledInput">PreserveUnmatchedPathEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.sourcePatternInput">SourcePatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.preserveUnmatchedPathEnabled">PreserveUnmatchedPathEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.sourcePattern">SourcePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.destinationPathInput"></a>

```go
func DestinationPathInput() *string
```

- *Type:* *string

---

##### `PreserveUnmatchedPathEnabledInput`<sup>Optional</sup> <a name="PreserveUnmatchedPathEnabledInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.preserveUnmatchedPathEnabledInput"></a>

```go
func PreserveUnmatchedPathEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SourcePatternInput`<sup>Optional</sup> <a name="SourcePatternInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.sourcePatternInput"></a>

```go
func SourcePatternInput() *string
```

- *Type:* *string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.destinationPath"></a>

```go
func DestinationPath() *string
```

- *Type:* *string

---

##### `PreserveUnmatchedPathEnabled`<sup>Required</sup> <a name="PreserveUnmatchedPathEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.preserveUnmatchedPathEnabled"></a>

```go
func PreserveUnmatchedPathEnabled() interface{}
```

- *Type:* interface{}

---

##### `SourcePattern`<sup>Required</sup> <a name="SourcePattern" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.sourcePattern"></a>

```go
func SourcePattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewriteOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorRuleActionsUrlRewrite
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleActionsUrlRewrite">CdnFrontdoorRuleActionsUrlRewrite</a>

---


### CdnFrontdoorRuleConditionsClientPortList <a name="CdnFrontdoorRuleConditionsClientPortList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsClientPortList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsClientPortList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsClientPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsClientPortOutputReference <a name="CdnFrontdoorRuleConditionsClientPortOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsClientPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsClientPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsDeviceTypeList <a name="CdnFrontdoorRuleConditionsDeviceTypeList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsDeviceTypeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsDeviceTypeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsDeviceTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsDeviceTypeOutputReference <a name="CdnFrontdoorRuleConditionsDeviceTypeOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsDeviceTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsDeviceTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsHostNameList <a name="CdnFrontdoorRuleConditionsHostNameList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsHostNameList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsHostNameList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsHostNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsHostNameOutputReference <a name="CdnFrontdoorRuleConditionsHostNameOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsHostNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsHostNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsHttpVersionList <a name="CdnFrontdoorRuleConditionsHttpVersionList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsHttpVersionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsHttpVersionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsHttpVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsHttpVersionOutputReference <a name="CdnFrontdoorRuleConditionsHttpVersionOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsHttpVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsHttpVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsOutputReference <a name="CdnFrontdoorRuleConditionsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorRuleConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putClientPort">PutClientPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putDeviceType">PutDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHostName">PutHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHttpVersion">PutHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putPostArgument">PutPostArgument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putQueryString">PutQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRemoteAddress">PutRemoteAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestBody">PutRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestCookies">PutRequestCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestFileExtension">PutRequestFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestFilename">PutRequestFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestMethod">PutRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestPath">PutRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestScheme">PutRequestScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestUrl">PutRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putServerPort">PutServerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSslProtocol">PutSslProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetClientPort">ResetClientPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetDeviceType">ResetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetHttpVersion">ResetHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetPostArgument">ResetPostArgument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRemoteAddress">ResetRemoteAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestBody">ResetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestCookies">ResetRequestCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestFileExtension">ResetRequestFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestFilename">ResetRequestFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestMethod">ResetRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestScheme">ResetRequestScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestUrl">ResetRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetServerPort">ResetServerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetSslProtocol">ResetSslProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientPort` <a name="PutClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putClientPort"></a>

```go
func PutClientPort(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putClientPort.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeviceType` <a name="PutDeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putDeviceType"></a>

```go
func PutDeviceType(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putDeviceType.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHostName` <a name="PutHostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHostName"></a>

```go
func PutHostName(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHostName.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHttpVersion` <a name="PutHttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHttpVersion"></a>

```go
func PutHttpVersion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putHttpVersion.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPostArgument` <a name="PutPostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putPostArgument"></a>

```go
func PutPostArgument(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putPostArgument.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryString` <a name="PutQueryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putQueryString"></a>

```go
func PutQueryString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putQueryString.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRemoteAddress` <a name="PutRemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRemoteAddress"></a>

```go
func PutRemoteAddress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRemoteAddress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestBody` <a name="PutRequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestBody"></a>

```go
func PutRequestBody(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestBody.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestCookies` <a name="PutRequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestCookies"></a>

```go
func PutRequestCookies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestCookies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestFileExtension` <a name="PutRequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestFileExtension"></a>

```go
func PutRequestFileExtension(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestFileExtension.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestFilename` <a name="PutRequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestFilename"></a>

```go
func PutRequestFilename(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestFilename.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestHeader"></a>

```go
func PutRequestHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestMethod` <a name="PutRequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestMethod"></a>

```go
func PutRequestMethod(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestMethod.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestPath` <a name="PutRequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestPath"></a>

```go
func PutRequestPath(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestPath.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestScheme` <a name="PutRequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestScheme"></a>

```go
func PutRequestScheme(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestScheme.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestUrl` <a name="PutRequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestUrl"></a>

```go
func PutRequestUrl(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putRequestUrl.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServerPort` <a name="PutServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putServerPort"></a>

```go
func PutServerPort(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putServerPort.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSocketAddress"></a>

```go
func PutSocketAddress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSslProtocol` <a name="PutSslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSslProtocol"></a>

```go
func PutSslProtocol(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.putSslProtocol.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientPort` <a name="ResetClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetClientPort"></a>

```go
func ResetClientPort()
```

##### `ResetDeviceType` <a name="ResetDeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetDeviceType"></a>

```go
func ResetDeviceType()
```

##### `ResetHostName` <a name="ResetHostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetHostName"></a>

```go
func ResetHostName()
```

##### `ResetHttpVersion` <a name="ResetHttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetHttpVersion"></a>

```go
func ResetHttpVersion()
```

##### `ResetPostArgument` <a name="ResetPostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetPostArgument"></a>

```go
func ResetPostArgument()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```

##### `ResetRemoteAddress` <a name="ResetRemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRemoteAddress"></a>

```go
func ResetRemoteAddress()
```

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestBody"></a>

```go
func ResetRequestBody()
```

##### `ResetRequestCookies` <a name="ResetRequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestCookies"></a>

```go
func ResetRequestCookies()
```

##### `ResetRequestFileExtension` <a name="ResetRequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestFileExtension"></a>

```go
func ResetRequestFileExtension()
```

##### `ResetRequestFilename` <a name="ResetRequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestFilename"></a>

```go
func ResetRequestFilename()
```

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestHeader"></a>

```go
func ResetRequestHeader()
```

##### `ResetRequestMethod` <a name="ResetRequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestMethod"></a>

```go
func ResetRequestMethod()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetRequestScheme` <a name="ResetRequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestScheme"></a>

```go
func ResetRequestScheme()
```

##### `ResetRequestUrl` <a name="ResetRequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetRequestUrl"></a>

```go
func ResetRequestUrl()
```

##### `ResetServerPort` <a name="ResetServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetServerPort"></a>

```go
func ResetServerPort()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetSocketAddress"></a>

```go
func ResetSocketAddress()
```

##### `ResetSslProtocol` <a name="ResetSslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.resetSslProtocol"></a>

```go
func ResetSslProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.clientPort">ClientPort</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList">CdnFrontdoorRuleConditionsClientPortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.deviceType">DeviceType</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList">CdnFrontdoorRuleConditionsDeviceTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.hostName">HostName</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList">CdnFrontdoorRuleConditionsHostNameList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.httpVersion">HttpVersion</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList">CdnFrontdoorRuleConditionsHttpVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.postArgument">PostArgument</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList">CdnFrontdoorRuleConditionsPostArgumentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.queryString">QueryString</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList">CdnFrontdoorRuleConditionsQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.remoteAddress">RemoteAddress</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList">CdnFrontdoorRuleConditionsRemoteAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestBody">RequestBody</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList">CdnFrontdoorRuleConditionsRequestBodyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestCookies">RequestCookies</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList">CdnFrontdoorRuleConditionsRequestCookiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFileExtension">RequestFileExtension</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList">CdnFrontdoorRuleConditionsRequestFileExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFilename">RequestFilename</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList">CdnFrontdoorRuleConditionsRequestFilenameList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList">CdnFrontdoorRuleConditionsRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestMethod">RequestMethod</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList">CdnFrontdoorRuleConditionsRequestMethodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestPath">RequestPath</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList">CdnFrontdoorRuleConditionsRequestPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestScheme">RequestScheme</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList">CdnFrontdoorRuleConditionsRequestSchemeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestUrl">RequestUrl</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList">CdnFrontdoorRuleConditionsRequestUrlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.serverPort">ServerPort</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList">CdnFrontdoorRuleConditionsServerPortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList">CdnFrontdoorRuleConditionsSocketAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.sslProtocol">SslProtocol</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList">CdnFrontdoorRuleConditionsSslProtocolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.clientPortInput">ClientPortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.deviceTypeInput">DeviceTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.httpVersionInput">HttpVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.postArgumentInput">PostArgumentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.remoteAddressInput">RemoteAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestBodyInput">RequestBodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestCookiesInput">RequestCookiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFileExtensionInput">RequestFileExtensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFilenameInput">RequestFilenameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestMethodInput">RequestMethodInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestSchemeInput">RequestSchemeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestUrlInput">RequestUrlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.serverPortInput">ServerPortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.sslProtocolInput">SslProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientPort`<sup>Required</sup> <a name="ClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.clientPort"></a>

```go
func ClientPort() CdnFrontdoorRuleConditionsClientPortList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsClientPortList">CdnFrontdoorRuleConditionsClientPortList</a>

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.deviceType"></a>

```go
func DeviceType() CdnFrontdoorRuleConditionsDeviceTypeList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsDeviceTypeList">CdnFrontdoorRuleConditionsDeviceTypeList</a>

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.hostName"></a>

```go
func HostName() CdnFrontdoorRuleConditionsHostNameList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHostNameList">CdnFrontdoorRuleConditionsHostNameList</a>

---

##### `HttpVersion`<sup>Required</sup> <a name="HttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.httpVersion"></a>

```go
func HttpVersion() CdnFrontdoorRuleConditionsHttpVersionList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsHttpVersionList">CdnFrontdoorRuleConditionsHttpVersionList</a>

---

##### `PostArgument`<sup>Required</sup> <a name="PostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.postArgument"></a>

```go
func PostArgument() CdnFrontdoorRuleConditionsPostArgumentList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList">CdnFrontdoorRuleConditionsPostArgumentList</a>

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.queryString"></a>

```go
func QueryString() CdnFrontdoorRuleConditionsQueryStringList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList">CdnFrontdoorRuleConditionsQueryStringList</a>

---

##### `RemoteAddress`<sup>Required</sup> <a name="RemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.remoteAddress"></a>

```go
func RemoteAddress() CdnFrontdoorRuleConditionsRemoteAddressList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList">CdnFrontdoorRuleConditionsRemoteAddressList</a>

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestBody"></a>

```go
func RequestBody() CdnFrontdoorRuleConditionsRequestBodyList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList">CdnFrontdoorRuleConditionsRequestBodyList</a>

---

##### `RequestCookies`<sup>Required</sup> <a name="RequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestCookies"></a>

```go
func RequestCookies() CdnFrontdoorRuleConditionsRequestCookiesList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList">CdnFrontdoorRuleConditionsRequestCookiesList</a>

---

##### `RequestFileExtension`<sup>Required</sup> <a name="RequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFileExtension"></a>

```go
func RequestFileExtension() CdnFrontdoorRuleConditionsRequestFileExtensionList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList">CdnFrontdoorRuleConditionsRequestFileExtensionList</a>

---

##### `RequestFilename`<sup>Required</sup> <a name="RequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFilename"></a>

```go
func RequestFilename() CdnFrontdoorRuleConditionsRequestFilenameList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList">CdnFrontdoorRuleConditionsRequestFilenameList</a>

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestHeader"></a>

```go
func RequestHeader() CdnFrontdoorRuleConditionsRequestHeaderList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList">CdnFrontdoorRuleConditionsRequestHeaderList</a>

---

##### `RequestMethod`<sup>Required</sup> <a name="RequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestMethod"></a>

```go
func RequestMethod() CdnFrontdoorRuleConditionsRequestMethodList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList">CdnFrontdoorRuleConditionsRequestMethodList</a>

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestPath"></a>

```go
func RequestPath() CdnFrontdoorRuleConditionsRequestPathList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList">CdnFrontdoorRuleConditionsRequestPathList</a>

---

##### `RequestScheme`<sup>Required</sup> <a name="RequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestScheme"></a>

```go
func RequestScheme() CdnFrontdoorRuleConditionsRequestSchemeList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList">CdnFrontdoorRuleConditionsRequestSchemeList</a>

---

##### `RequestUrl`<sup>Required</sup> <a name="RequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestUrl"></a>

```go
func RequestUrl() CdnFrontdoorRuleConditionsRequestUrlList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList">CdnFrontdoorRuleConditionsRequestUrlList</a>

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.serverPort"></a>

```go
func ServerPort() CdnFrontdoorRuleConditionsServerPortList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList">CdnFrontdoorRuleConditionsServerPortList</a>

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.socketAddress"></a>

```go
func SocketAddress() CdnFrontdoorRuleConditionsSocketAddressList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList">CdnFrontdoorRuleConditionsSocketAddressList</a>

---

##### `SslProtocol`<sup>Required</sup> <a name="SslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.sslProtocol"></a>

```go
func SslProtocol() CdnFrontdoorRuleConditionsSslProtocolList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList">CdnFrontdoorRuleConditionsSslProtocolList</a>

---

##### `ClientPortInput`<sup>Optional</sup> <a name="ClientPortInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.clientPortInput"></a>

```go
func ClientPortInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceTypeInput`<sup>Optional</sup> <a name="DeviceTypeInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.deviceTypeInput"></a>

```go
func DeviceTypeInput() interface{}
```

- *Type:* interface{}

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() interface{}
```

- *Type:* interface{}

---

##### `HttpVersionInput`<sup>Optional</sup> <a name="HttpVersionInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.httpVersionInput"></a>

```go
func HttpVersionInput() interface{}
```

- *Type:* interface{}

---

##### `PostArgumentInput`<sup>Optional</sup> <a name="PostArgumentInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.postArgumentInput"></a>

```go
func PostArgumentInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `RemoteAddressInput`<sup>Optional</sup> <a name="RemoteAddressInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.remoteAddressInput"></a>

```go
func RemoteAddressInput() interface{}
```

- *Type:* interface{}

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestBodyInput"></a>

```go
func RequestBodyInput() interface{}
```

- *Type:* interface{}

---

##### `RequestCookiesInput`<sup>Optional</sup> <a name="RequestCookiesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestCookiesInput"></a>

```go
func RequestCookiesInput() interface{}
```

- *Type:* interface{}

---

##### `RequestFileExtensionInput`<sup>Optional</sup> <a name="RequestFileExtensionInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFileExtensionInput"></a>

```go
func RequestFileExtensionInput() interface{}
```

- *Type:* interface{}

---

##### `RequestFilenameInput`<sup>Optional</sup> <a name="RequestFilenameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestFilenameInput"></a>

```go
func RequestFilenameInput() interface{}
```

- *Type:* interface{}

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestHeaderInput"></a>

```go
func RequestHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RequestMethodInput`<sup>Optional</sup> <a name="RequestMethodInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestMethodInput"></a>

```go
func RequestMethodInput() interface{}
```

- *Type:* interface{}

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestPathInput"></a>

```go
func RequestPathInput() interface{}
```

- *Type:* interface{}

---

##### `RequestSchemeInput`<sup>Optional</sup> <a name="RequestSchemeInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestSchemeInput"></a>

```go
func RequestSchemeInput() interface{}
```

- *Type:* interface{}

---

##### `RequestUrlInput`<sup>Optional</sup> <a name="RequestUrlInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.requestUrlInput"></a>

```go
func RequestUrlInput() interface{}
```

- *Type:* interface{}

---

##### `ServerPortInput`<sup>Optional</sup> <a name="ServerPortInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.serverPortInput"></a>

```go
func ServerPortInput() interface{}
```

- *Type:* interface{}

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.socketAddressInput"></a>

```go
func SocketAddressInput() interface{}
```

- *Type:* interface{}

---

##### `SslProtocolInput`<sup>Optional</sup> <a name="SslProtocolInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.sslProtocolInput"></a>

```go
func SslProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorRuleConditions
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditions">CdnFrontdoorRuleConditions</a>

---


### CdnFrontdoorRuleConditionsPostArgumentList <a name="CdnFrontdoorRuleConditionsPostArgumentList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsPostArgumentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsPostArgumentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsPostArgumentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsPostArgumentOutputReference <a name="CdnFrontdoorRuleConditionsPostArgumentOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsPostArgumentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsPostArgumentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsPostArgumentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsQueryStringList <a name="CdnFrontdoorRuleConditionsQueryStringList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsQueryStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsQueryStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsQueryStringOutputReference <a name="CdnFrontdoorRuleConditionsQueryStringOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsQueryStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsQueryStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsQueryStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRemoteAddressList <a name="CdnFrontdoorRuleConditionsRemoteAddressList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRemoteAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsRemoteAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsRemoteAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRemoteAddressOutputReference <a name="CdnFrontdoorRuleConditionsRemoteAddressOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRemoteAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsRemoteAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRemoteAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestBodyList <a name="CdnFrontdoorRuleConditionsRequestBodyList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestBodyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsRequestBodyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsRequestBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestBodyOutputReference <a name="CdnFrontdoorRuleConditionsRequestBodyOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsRequestBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestCookiesList <a name="CdnFrontdoorRuleConditionsRequestCookiesList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestCookiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsRequestCookiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsRequestCookiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestCookiesOutputReference <a name="CdnFrontdoorRuleConditionsRequestCookiesOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestCookiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsRequestCookiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestCookiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestFileExtensionList <a name="CdnFrontdoorRuleConditionsRequestFileExtensionList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestFileExtensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsRequestFileExtensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference <a name="CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestFileExtensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestFilenameList <a name="CdnFrontdoorRuleConditionsRequestFilenameList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestFilenameList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsRequestFilenameList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsRequestFilenameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestFilenameOutputReference <a name="CdnFrontdoorRuleConditionsRequestFilenameOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestFilenameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsRequestFilenameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestFilenameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestHeaderList <a name="CdnFrontdoorRuleConditionsRequestHeaderList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsRequestHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestHeaderOutputReference <a name="CdnFrontdoorRuleConditionsRequestHeaderOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsRequestHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestMethodList <a name="CdnFrontdoorRuleConditionsRequestMethodList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestMethodList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsRequestMethodList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsRequestMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestMethodOutputReference <a name="CdnFrontdoorRuleConditionsRequestMethodOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsRequestMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestPathList <a name="CdnFrontdoorRuleConditionsRequestPathList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestPathList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsRequestPathList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsRequestPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestPathOutputReference <a name="CdnFrontdoorRuleConditionsRequestPathOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsRequestPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestPathOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestSchemeList <a name="CdnFrontdoorRuleConditionsRequestSchemeList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestSchemeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsRequestSchemeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsRequestSchemeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestSchemeOutputReference <a name="CdnFrontdoorRuleConditionsRequestSchemeOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestSchemeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsRequestSchemeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestSchemeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestUrlList <a name="CdnFrontdoorRuleConditionsRequestUrlList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestUrlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsRequestUrlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsRequestUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsRequestUrlOutputReference <a name="CdnFrontdoorRuleConditionsRequestUrlOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsRequestUrlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsRequestUrlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsRequestUrlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsServerPortList <a name="CdnFrontdoorRuleConditionsServerPortList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsServerPortList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsServerPortList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsServerPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsServerPortOutputReference <a name="CdnFrontdoorRuleConditionsServerPortOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsServerPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsServerPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsServerPortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsSocketAddressList <a name="CdnFrontdoorRuleConditionsSocketAddressList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsSocketAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsSocketAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsSocketAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsSocketAddressOutputReference <a name="CdnFrontdoorRuleConditionsSocketAddressOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsSslProtocolList <a name="CdnFrontdoorRuleConditionsSslProtocolList" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsSslProtocolList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorRuleConditionsSslProtocolList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.get"></a>

```go
func Get(index *f64) CdnFrontdoorRuleConditionsSslProtocolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleConditionsSslProtocolOutputReference <a name="CdnFrontdoorRuleConditionsSslProtocolOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleConditionsSslProtocolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorRuleConditionsSslProtocolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleConditionsSslProtocolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorRuleTimeoutsOutputReference <a name="CdnFrontdoorRuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/cdnfrontdoorrule"

cdnfrontdoorrule.NewCdnFrontdoorRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRule.CdnFrontdoorRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



