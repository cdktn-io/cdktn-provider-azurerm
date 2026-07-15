# `cdnFrontdoorBatchRuleSet` Submodule <a name="`cdnFrontdoorBatchRuleSet` Submodule" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorBatchRuleSet <a name="CdnFrontdoorBatchRuleSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set azurerm_cdn_frontdoor_batch_rule_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSet(scope Construct, id *string, config CdnFrontdoorBatchRuleSetConfig) CdnFrontdoorBatchRuleSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig">CdnFrontdoorBatchRuleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig">CdnFrontdoorBatchRuleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.putTimeouts"></a>

```go
func PutTimeouts(value CdnFrontdoorBatchRuleSetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts">CdnFrontdoorBatchRuleSetTimeouts</a>

---

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CdnFrontdoorBatchRuleSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CdnFrontdoorBatchRuleSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CdnFrontdoorBatchRuleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CdnFrontdoorBatchRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorBatchRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList">CdnFrontdoorBatchRuleSetRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference">CdnFrontdoorBatchRuleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.cdnFrontdoorProfileIdInput">CdnFrontdoorProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.cdnFrontdoorProfileId">CdnFrontdoorProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.rule"></a>

```go
func Rule() CdnFrontdoorBatchRuleSetRuleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList">CdnFrontdoorBatchRuleSetRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.timeouts"></a>

```go
func Timeouts() CdnFrontdoorBatchRuleSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference">CdnFrontdoorBatchRuleSetTimeoutsOutputReference</a>

---

##### `CdnFrontdoorProfileIdInput`<sup>Optional</sup> <a name="CdnFrontdoorProfileIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.cdnFrontdoorProfileIdInput"></a>

```go
func CdnFrontdoorProfileIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CdnFrontdoorProfileId`<sup>Required</sup> <a name="CdnFrontdoorProfileId" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.cdnFrontdoorProfileId"></a>

```go
func CdnFrontdoorProfileId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorBatchRuleSetConfig <a name="CdnFrontdoorBatchRuleSetConfig" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CdnFrontdoorProfileId: *string,
	Name: *string,
	Rule: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.cdnFrontdoorProfileId">CdnFrontdoorProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#cdn_frontdoor_profile_id CdnFrontdoorBatchRuleSet#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts">CdnFrontdoorBatchRuleSetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CdnFrontdoorProfileId`<sup>Required</sup> <a name="CdnFrontdoorProfileId" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.cdnFrontdoorProfileId"></a>

```go
CdnFrontdoorProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#cdn_frontdoor_profile_id CdnFrontdoorBatchRuleSet#cdn_frontdoor_profile_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#rule CdnFrontdoorBatchRuleSet#rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetConfig.property.timeouts"></a>

```go
Timeouts CdnFrontdoorBatchRuleSetTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts">CdnFrontdoorBatchRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#timeouts CdnFrontdoorBatchRuleSet#timeouts}

---

### CdnFrontdoorBatchRuleSetRule <a name="CdnFrontdoorBatchRuleSetRule" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRule {
	Actions: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions,
	Name: *string,
	Order: *f64,
	BehaviourOnMatch: *string,
	Conditions: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRule.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions">CdnFrontdoorBatchRuleSetRuleActions</a></code> | actions block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRule.property.order">Order</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#order CdnFrontdoorBatchRuleSet#order}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRule.property.behaviourOnMatch">BehaviourOnMatch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#behaviour_on_match CdnFrontdoorBatchRuleSet#behaviour_on_match}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions">CdnFrontdoorBatchRuleSetRuleConditions</a></code> | conditions block. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRule.property.actions"></a>

```go
Actions CdnFrontdoorBatchRuleSetRuleActions
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions">CdnFrontdoorBatchRuleSetRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#actions CdnFrontdoorBatchRuleSet#actions}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}.

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRule.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#order CdnFrontdoorBatchRuleSet#order}.

---

##### `BehaviourOnMatch`<sup>Optional</sup> <a name="BehaviourOnMatch" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRule.property.behaviourOnMatch"></a>

```go
BehaviourOnMatch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#behaviour_on_match CdnFrontdoorBatchRuleSet#behaviour_on_match}.

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRule.property.conditions"></a>

```go
Conditions CdnFrontdoorBatchRuleSetRuleConditions
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions">CdnFrontdoorBatchRuleSetRuleConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#conditions CdnFrontdoorBatchRuleSet#conditions}

---

### CdnFrontdoorBatchRuleSetRuleActions <a name="CdnFrontdoorBatchRuleSetRuleActions" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleActions {
	ModifyRequestHeader: interface{},
	ModifyResponseHeader: interface{},
	RouteConfigurationOverride: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride,
	UrlRedirect: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect,
	UrlRewrite: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions.property.modifyRequestHeader">ModifyRequestHeader</a></code> | <code>interface{}</code> | modify_request_header block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions.property.modifyResponseHeader">ModifyResponseHeader</a></code> | <code>interface{}</code> | modify_response_header block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions.property.routeConfigurationOverride">RouteConfigurationOverride</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride</a></code> | route_configuration_override block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions.property.urlRedirect">UrlRedirect</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect">CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect</a></code> | url_redirect block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite">CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite</a></code> | url_rewrite block. |

---

##### `ModifyRequestHeader`<sup>Optional</sup> <a name="ModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions.property.modifyRequestHeader"></a>

```go
ModifyRequestHeader interface{}
```

- *Type:* interface{}

modify_request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#modify_request_header CdnFrontdoorBatchRuleSet#modify_request_header}

---

##### `ModifyResponseHeader`<sup>Optional</sup> <a name="ModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions.property.modifyResponseHeader"></a>

```go
ModifyResponseHeader interface{}
```

- *Type:* interface{}

modify_response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#modify_response_header CdnFrontdoorBatchRuleSet#modify_response_header}

---

##### `RouteConfigurationOverride`<sup>Optional</sup> <a name="RouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions.property.routeConfigurationOverride"></a>

```go
RouteConfigurationOverride CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride</a>

route_configuration_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#route_configuration_override CdnFrontdoorBatchRuleSet#route_configuration_override}

---

##### `UrlRedirect`<sup>Optional</sup> <a name="UrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions.property.urlRedirect"></a>

```go
UrlRedirect CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect">CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect</a>

url_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#url_redirect CdnFrontdoorBatchRuleSet#url_redirect}

---

##### `UrlRewrite`<sup>Optional</sup> <a name="UrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions.property.urlRewrite"></a>

```go
UrlRewrite CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite">CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#url_rewrite CdnFrontdoorBatchRuleSet#url_rewrite}

---

### CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader <a name="CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader {
	HeaderName: *string,
	Operator: *string,
	HeaderValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader.property.headerName">HeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#header_name CdnFrontdoorBatchRuleSet#header_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader.property.headerValue">HeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#header_value CdnFrontdoorBatchRuleSet#header_value}. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#header_name CdnFrontdoorBatchRuleSet#header_name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `HeaderValue`<sup>Optional</sup> <a name="HeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader.property.headerValue"></a>

```go
HeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#header_value CdnFrontdoorBatchRuleSet#header_value}.

---

### CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader <a name="CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader {
	HeaderName: *string,
	Operator: *string,
	HeaderValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader.property.headerName">HeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#header_name CdnFrontdoorBatchRuleSet#header_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader.property.headerValue">HeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#header_value CdnFrontdoorBatchRuleSet#header_value}. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#header_name CdnFrontdoorBatchRuleSet#header_name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `HeaderValue`<sup>Optional</sup> <a name="HeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader.property.headerValue"></a>

```go
HeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#header_value CdnFrontdoorBatchRuleSet#header_value}.

---

### CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride <a name="CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride {
	Caching: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching,
	OriginGroup: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride.property.caching">Caching</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching</a></code> | caching block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride.property.originGroup">OriginGroup</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup</a></code> | origin_group block. |

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride.property.caching"></a>

```go
Caching CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching</a>

caching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#caching CdnFrontdoorBatchRuleSet#caching}

---

##### `OriginGroup`<sup>Optional</sup> <a name="OriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride.property.originGroup"></a>

```go
OriginGroup CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup</a>

origin_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#origin_group CdnFrontdoorBatchRuleSet#origin_group}

---

### CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching <a name="CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching {
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
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching.property.behaviour">Behaviour</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#behaviour CdnFrontdoorBatchRuleSet#behaviour}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching.property.compressionEnabled">CompressionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#compression_enabled CdnFrontdoorBatchRuleSet#compression_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#duration CdnFrontdoorBatchRuleSet#duration}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching.property.queryStringBehaviour">QueryStringBehaviour</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#query_string_behaviour CdnFrontdoorBatchRuleSet#query_string_behaviour}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching.property.queryStringParameters">QueryStringParameters</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#query_string_parameters CdnFrontdoorBatchRuleSet#query_string_parameters}. |

---

##### `Behaviour`<sup>Required</sup> <a name="Behaviour" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching.property.behaviour"></a>

```go
Behaviour *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#behaviour CdnFrontdoorBatchRuleSet#behaviour}.

---

##### `CompressionEnabled`<sup>Optional</sup> <a name="CompressionEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching.property.compressionEnabled"></a>

```go
CompressionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#compression_enabled CdnFrontdoorBatchRuleSet#compression_enabled}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#duration CdnFrontdoorBatchRuleSet#duration}.

---

##### `QueryStringBehaviour`<sup>Optional</sup> <a name="QueryStringBehaviour" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching.property.queryStringBehaviour"></a>

```go
QueryStringBehaviour *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#query_string_behaviour CdnFrontdoorBatchRuleSet#query_string_behaviour}.

---

##### `QueryStringParameters`<sup>Optional</sup> <a name="QueryStringParameters" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching.property.queryStringParameters"></a>

```go
QueryStringParameters *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#query_string_parameters CdnFrontdoorBatchRuleSet#query_string_parameters}.

---

### CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup <a name="CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup {
	CdnFrontdoorOriginGroupId: *string,
	ForwardingProtocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup.property.cdnFrontdoorOriginGroupId">CdnFrontdoorOriginGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#cdn_frontdoor_origin_group_id CdnFrontdoorBatchRuleSet#cdn_frontdoor_origin_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup.property.forwardingProtocol">ForwardingProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#forwarding_protocol CdnFrontdoorBatchRuleSet#forwarding_protocol}. |

---

##### `CdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="CdnFrontdoorOriginGroupId" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup.property.cdnFrontdoorOriginGroupId"></a>

```go
CdnFrontdoorOriginGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#cdn_frontdoor_origin_group_id CdnFrontdoorBatchRuleSet#cdn_frontdoor_origin_group_id}.

---

##### `ForwardingProtocol`<sup>Required</sup> <a name="ForwardingProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup.property.forwardingProtocol"></a>

```go
ForwardingProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#forwarding_protocol CdnFrontdoorBatchRuleSet#forwarding_protocol}.

---

### CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect <a name="CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect {
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
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.property.redirectType">RedirectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#redirect_type CdnFrontdoorBatchRuleSet#redirect_type}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.property.destinationFragment">DestinationFragment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#destination_fragment CdnFrontdoorBatchRuleSet#destination_fragment}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.property.destinationHostName">DestinationHostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#destination_host_name CdnFrontdoorBatchRuleSet#destination_host_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#destination_path CdnFrontdoorBatchRuleSet#destination_path}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.property.queryString">QueryString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#query_string CdnFrontdoorBatchRuleSet#query_string}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.property.redirectProtocol">RedirectProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#redirect_protocol CdnFrontdoorBatchRuleSet#redirect_protocol}. |

---

##### `RedirectType`<sup>Required</sup> <a name="RedirectType" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.property.redirectType"></a>

```go
RedirectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#redirect_type CdnFrontdoorBatchRuleSet#redirect_type}.

---

##### `DestinationFragment`<sup>Optional</sup> <a name="DestinationFragment" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.property.destinationFragment"></a>

```go
DestinationFragment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#destination_fragment CdnFrontdoorBatchRuleSet#destination_fragment}.

---

##### `DestinationHostName`<sup>Optional</sup> <a name="DestinationHostName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.property.destinationHostName"></a>

```go
DestinationHostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#destination_host_name CdnFrontdoorBatchRuleSet#destination_host_name}.

---

##### `DestinationPath`<sup>Optional</sup> <a name="DestinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.property.destinationPath"></a>

```go
DestinationPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#destination_path CdnFrontdoorBatchRuleSet#destination_path}.

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.property.queryString"></a>

```go
QueryString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#query_string CdnFrontdoorBatchRuleSet#query_string}.

---

##### `RedirectProtocol`<sup>Optional</sup> <a name="RedirectProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect.property.redirectProtocol"></a>

```go
RedirectProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#redirect_protocol CdnFrontdoorBatchRuleSet#redirect_protocol}.

---

### CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite <a name="CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite {
	DestinationPath: *string,
	SourcePattern: *string,
	PreserveUnmatchedPathEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#destination_path CdnFrontdoorBatchRuleSet#destination_path}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite.property.sourcePattern">SourcePattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#source_pattern CdnFrontdoorBatchRuleSet#source_pattern}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite.property.preserveUnmatchedPathEnabled">PreserveUnmatchedPathEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#preserve_unmatched_path_enabled CdnFrontdoorBatchRuleSet#preserve_unmatched_path_enabled}. |

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite.property.destinationPath"></a>

```go
DestinationPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#destination_path CdnFrontdoorBatchRuleSet#destination_path}.

---

##### `SourcePattern`<sup>Required</sup> <a name="SourcePattern" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite.property.sourcePattern"></a>

```go
SourcePattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#source_pattern CdnFrontdoorBatchRuleSet#source_pattern}.

---

##### `PreserveUnmatchedPathEnabled`<sup>Optional</sup> <a name="PreserveUnmatchedPathEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite.property.preserveUnmatchedPathEnabled"></a>

```go
PreserveUnmatchedPathEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#preserve_unmatched_path_enabled CdnFrontdoorBatchRuleSet#preserve_unmatched_path_enabled}.

---

### CdnFrontdoorBatchRuleSetRuleConditions <a name="CdnFrontdoorBatchRuleSetRuleConditions" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditions {
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
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.clientPort">ClientPort</a></code> | <code>interface{}</code> | client_port block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.deviceType">DeviceType</a></code> | <code>interface{}</code> | device_type block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.hostName">HostName</a></code> | <code>interface{}</code> | host_name block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.httpVersion">HttpVersion</a></code> | <code>interface{}</code> | http_version block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.postArgument">PostArgument</a></code> | <code>interface{}</code> | post_argument block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.queryString">QueryString</a></code> | <code>interface{}</code> | query_string block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.remoteAddress">RemoteAddress</a></code> | <code>interface{}</code> | remote_address block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestBody">RequestBody</a></code> | <code>interface{}</code> | request_body block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestCookies">RequestCookies</a></code> | <code>interface{}</code> | request_cookies block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestFileExtension">RequestFileExtension</a></code> | <code>interface{}</code> | request_file_extension block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestFilename">RequestFilename</a></code> | <code>interface{}</code> | request_filename block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestHeader">RequestHeader</a></code> | <code>interface{}</code> | request_header block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestMethod">RequestMethod</a></code> | <code>interface{}</code> | request_method block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestPath">RequestPath</a></code> | <code>interface{}</code> | request_path block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestScheme">RequestScheme</a></code> | <code>interface{}</code> | request_scheme block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestUrl">RequestUrl</a></code> | <code>interface{}</code> | request_url block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.serverPort">ServerPort</a></code> | <code>interface{}</code> | server_port block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.socketAddress">SocketAddress</a></code> | <code>interface{}</code> | socket_address block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.sslProtocol">SslProtocol</a></code> | <code>interface{}</code> | ssl_protocol block. |

---

##### `ClientPort`<sup>Optional</sup> <a name="ClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.clientPort"></a>

```go
ClientPort interface{}
```

- *Type:* interface{}

client_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#client_port CdnFrontdoorBatchRuleSet#client_port}

---

##### `DeviceType`<sup>Optional</sup> <a name="DeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.deviceType"></a>

```go
DeviceType interface{}
```

- *Type:* interface{}

device_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#device_type CdnFrontdoorBatchRuleSet#device_type}

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.hostName"></a>

```go
HostName interface{}
```

- *Type:* interface{}

host_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#host_name CdnFrontdoorBatchRuleSet#host_name}

---

##### `HttpVersion`<sup>Optional</sup> <a name="HttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.httpVersion"></a>

```go
HttpVersion interface{}
```

- *Type:* interface{}

http_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#http_version CdnFrontdoorBatchRuleSet#http_version}

---

##### `PostArgument`<sup>Optional</sup> <a name="PostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.postArgument"></a>

```go
PostArgument interface{}
```

- *Type:* interface{}

post_argument block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#post_argument CdnFrontdoorBatchRuleSet#post_argument}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.queryString"></a>

```go
QueryString interface{}
```

- *Type:* interface{}

query_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#query_string CdnFrontdoorBatchRuleSet#query_string}

---

##### `RemoteAddress`<sup>Optional</sup> <a name="RemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.remoteAddress"></a>

```go
RemoteAddress interface{}
```

- *Type:* interface{}

remote_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#remote_address CdnFrontdoorBatchRuleSet#remote_address}

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestBody"></a>

```go
RequestBody interface{}
```

- *Type:* interface{}

request_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_body CdnFrontdoorBatchRuleSet#request_body}

---

##### `RequestCookies`<sup>Optional</sup> <a name="RequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestCookies"></a>

```go
RequestCookies interface{}
```

- *Type:* interface{}

request_cookies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_cookies CdnFrontdoorBatchRuleSet#request_cookies}

---

##### `RequestFileExtension`<sup>Optional</sup> <a name="RequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestFileExtension"></a>

```go
RequestFileExtension interface{}
```

- *Type:* interface{}

request_file_extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_file_extension CdnFrontdoorBatchRuleSet#request_file_extension}

---

##### `RequestFilename`<sup>Optional</sup> <a name="RequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestFilename"></a>

```go
RequestFilename interface{}
```

- *Type:* interface{}

request_filename block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_filename CdnFrontdoorBatchRuleSet#request_filename}

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestHeader"></a>

```go
RequestHeader interface{}
```

- *Type:* interface{}

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_header CdnFrontdoorBatchRuleSet#request_header}

---

##### `RequestMethod`<sup>Optional</sup> <a name="RequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestMethod"></a>

```go
RequestMethod interface{}
```

- *Type:* interface{}

request_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_method CdnFrontdoorBatchRuleSet#request_method}

---

##### `RequestPath`<sup>Optional</sup> <a name="RequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestPath"></a>

```go
RequestPath interface{}
```

- *Type:* interface{}

request_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_path CdnFrontdoorBatchRuleSet#request_path}

---

##### `RequestScheme`<sup>Optional</sup> <a name="RequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestScheme"></a>

```go
RequestScheme interface{}
```

- *Type:* interface{}

request_scheme block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_scheme CdnFrontdoorBatchRuleSet#request_scheme}

---

##### `RequestUrl`<sup>Optional</sup> <a name="RequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.requestUrl"></a>

```go
RequestUrl interface{}
```

- *Type:* interface{}

request_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_url CdnFrontdoorBatchRuleSet#request_url}

---

##### `ServerPort`<sup>Optional</sup> <a name="ServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.serverPort"></a>

```go
ServerPort interface{}
```

- *Type:* interface{}

server_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#server_port CdnFrontdoorBatchRuleSet#server_port}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.socketAddress"></a>

```go
SocketAddress interface{}
```

- *Type:* interface{}

socket_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#socket_address CdnFrontdoorBatchRuleSet#socket_address}

---

##### `SslProtocol`<sup>Optional</sup> <a name="SslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions.property.sslProtocol"></a>

```go
SslProtocol interface{}
```

- *Type:* interface{}

ssl_protocol block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#ssl_protocol CdnFrontdoorBatchRuleSet#ssl_protocol}

---

### CdnFrontdoorBatchRuleSetRuleConditionsClientPort <a name="CdnFrontdoorBatchRuleSetRuleConditionsClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsClientPort {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPort.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPort.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPort.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPort.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsDeviceType <a name="CdnFrontdoorBatchRuleSetRuleConditionsDeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsDeviceType {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceType.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceType.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceType.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceType.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsHostName <a name="CdnFrontdoorBatchRuleSetRuleConditionsHostName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostName.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsHostName {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostName.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostName.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostName.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostName.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostName.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostName.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion <a name="CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsPostArgument <a name="CdnFrontdoorBatchRuleSetRuleConditionsPostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgument.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsPostArgument {
	Name: *string,
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgument.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgument.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgument.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgument.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgument.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgument.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgument.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgument.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsQueryString <a name="CdnFrontdoorBatchRuleSetRuleConditionsQueryString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryString.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsQueryString {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryString.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryString.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryString.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryString.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryString.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryString.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress <a name="CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsRequestBody <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBody.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsRequestBody {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBody.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBody.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBody.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBody.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBody.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBody.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies {
	Name: *string,
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader {
	Name: *string,
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsRequestPath <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPath.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsRequestPath {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPath.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPath.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPath.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPath.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPath.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPath.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl {
	Operator: *string,
	Transforms: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl.property.transforms">Transforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Transforms`<sup>Optional</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl.property.transforms"></a>

```go
Transforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsServerPort <a name="CdnFrontdoorBatchRuleSetRuleConditionsServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsServerPort {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPort.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPort.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPort.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPort.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress <a name="CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol <a name="CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}.

---

### CdnFrontdoorBatchRuleSetTimeouts <a name="CdnFrontdoorBatchRuleSetTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

&cdnfrontdoorbatchruleset.CdnFrontdoorBatchRuleSetTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#create CdnFrontdoorBatchRuleSet#create}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#delete CdnFrontdoorBatchRuleSet#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#read CdnFrontdoorBatchRuleSet#read}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#update CdnFrontdoorBatchRuleSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#create CdnFrontdoorBatchRuleSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#delete CdnFrontdoorBatchRuleSet#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#read CdnFrontdoorBatchRuleSet#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#update CdnFrontdoorBatchRuleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList <a name="CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference <a name="CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.resetHeaderValue">ResetHeaderValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderValue` <a name="ResetHeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.resetHeaderValue"></a>

```go
func ResetHeaderValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.headerValueInput"></a>

```go
func HeaderValueInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList <a name="CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference <a name="CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.resetHeaderValue">ResetHeaderValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderValue` <a name="ResetHeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.resetHeaderValue"></a>

```go
func ResetHeaderValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.headerValueInput"></a>

```go
func HeaderValueInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleActionsOutputReference <a name="CdnFrontdoorBatchRuleSetRuleActionsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorBatchRuleSetRuleActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putModifyRequestHeader">PutModifyRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putModifyResponseHeader">PutModifyResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putRouteConfigurationOverride">PutRouteConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putUrlRedirect">PutUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putUrlRewrite">PutUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resetModifyRequestHeader">ResetModifyRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resetModifyResponseHeader">ResetModifyResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resetRouteConfigurationOverride">ResetRouteConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resetUrlRedirect">ResetUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resetUrlRewrite">ResetUrlRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModifyRequestHeader` <a name="PutModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putModifyRequestHeader"></a>

```go
func PutModifyRequestHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putModifyRequestHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutModifyResponseHeader` <a name="PutModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putModifyResponseHeader"></a>

```go
func PutModifyResponseHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putModifyResponseHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRouteConfigurationOverride` <a name="PutRouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putRouteConfigurationOverride"></a>

```go
func PutRouteConfigurationOverride(value CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putRouteConfigurationOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride</a>

---

##### `PutUrlRedirect` <a name="PutUrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putUrlRedirect"></a>

```go
func PutUrlRedirect(value CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putUrlRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect">CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect</a>

---

##### `PutUrlRewrite` <a name="PutUrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putUrlRewrite"></a>

```go
func PutUrlRewrite(value CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite">CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite</a>

---

##### `ResetModifyRequestHeader` <a name="ResetModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resetModifyRequestHeader"></a>

```go
func ResetModifyRequestHeader()
```

##### `ResetModifyResponseHeader` <a name="ResetModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resetModifyResponseHeader"></a>

```go
func ResetModifyResponseHeader()
```

##### `ResetRouteConfigurationOverride` <a name="ResetRouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resetRouteConfigurationOverride"></a>

```go
func ResetRouteConfigurationOverride()
```

##### `ResetUrlRedirect` <a name="ResetUrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resetUrlRedirect"></a>

```go
func ResetUrlRedirect()
```

##### `ResetUrlRewrite` <a name="ResetUrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.resetUrlRewrite"></a>

```go
func ResetUrlRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.modifyRequestHeader">ModifyRequestHeader</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList">CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.modifyResponseHeader">ModifyResponseHeader</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList">CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.routeConfigurationOverride">RouteConfigurationOverride</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.urlRedirect">UrlRedirect</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference">CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.urlRewrite">UrlRewrite</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference">CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.modifyRequestHeaderInput">ModifyRequestHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.modifyResponseHeaderInput">ModifyResponseHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.routeConfigurationOverrideInput">RouteConfigurationOverrideInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.urlRedirectInput">UrlRedirectInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect">CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.urlRewriteInput">UrlRewriteInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite">CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions">CdnFrontdoorBatchRuleSetRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModifyRequestHeader`<sup>Required</sup> <a name="ModifyRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.modifyRequestHeader"></a>

```go
func ModifyRequestHeader() CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList">CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList</a>

---

##### `ModifyResponseHeader`<sup>Required</sup> <a name="ModifyResponseHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.modifyResponseHeader"></a>

```go
func ModifyResponseHeader() CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList">CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList</a>

---

##### `RouteConfigurationOverride`<sup>Required</sup> <a name="RouteConfigurationOverride" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.routeConfigurationOverride"></a>

```go
func RouteConfigurationOverride() CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference</a>

---

##### `UrlRedirect`<sup>Required</sup> <a name="UrlRedirect" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.urlRedirect"></a>

```go
func UrlRedirect() CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference">CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference</a>

---

##### `UrlRewrite`<sup>Required</sup> <a name="UrlRewrite" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.urlRewrite"></a>

```go
func UrlRewrite() CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference">CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference</a>

---

##### `ModifyRequestHeaderInput`<sup>Optional</sup> <a name="ModifyRequestHeaderInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.modifyRequestHeaderInput"></a>

```go
func ModifyRequestHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `ModifyResponseHeaderInput`<sup>Optional</sup> <a name="ModifyResponseHeaderInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.modifyResponseHeaderInput"></a>

```go
func ModifyResponseHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RouteConfigurationOverrideInput`<sup>Optional</sup> <a name="RouteConfigurationOverrideInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.routeConfigurationOverrideInput"></a>

```go
func RouteConfigurationOverrideInput() CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride</a>

---

##### `UrlRedirectInput`<sup>Optional</sup> <a name="UrlRedirectInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.urlRedirectInput"></a>

```go
func UrlRedirectInput() CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect">CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect</a>

---

##### `UrlRewriteInput`<sup>Optional</sup> <a name="UrlRewriteInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.urlRewriteInput"></a>

```go
func UrlRewriteInput() CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite">CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorBatchRuleSetRuleActions
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions">CdnFrontdoorBatchRuleSetRuleActions</a>

---


### CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference <a name="CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.resetCompressionEnabled">ResetCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.resetQueryStringBehaviour">ResetQueryStringBehaviour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.resetQueryStringParameters">ResetQueryStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompressionEnabled` <a name="ResetCompressionEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.resetCompressionEnabled"></a>

```go
func ResetCompressionEnabled()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetQueryStringBehaviour` <a name="ResetQueryStringBehaviour" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.resetQueryStringBehaviour"></a>

```go
func ResetQueryStringBehaviour()
```

##### `ResetQueryStringParameters` <a name="ResetQueryStringParameters" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.resetQueryStringParameters"></a>

```go
func ResetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.behaviourInput">BehaviourInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.compressionEnabledInput">CompressionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringBehaviourInput">QueryStringBehaviourInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringParametersInput">QueryStringParametersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.behaviour">Behaviour</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.compressionEnabled">CompressionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringBehaviour">QueryStringBehaviour</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BehaviourInput`<sup>Optional</sup> <a name="BehaviourInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.behaviourInput"></a>

```go
func BehaviourInput() *string
```

- *Type:* *string

---

##### `CompressionEnabledInput`<sup>Optional</sup> <a name="CompressionEnabledInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.compressionEnabledInput"></a>

```go
func CompressionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `QueryStringBehaviourInput`<sup>Optional</sup> <a name="QueryStringBehaviourInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringBehaviourInput"></a>

```go
func QueryStringBehaviourInput() *string
```

- *Type:* *string

---

##### `QueryStringParametersInput`<sup>Optional</sup> <a name="QueryStringParametersInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringParametersInput"></a>

```go
func QueryStringParametersInput() *[]*string
```

- *Type:* *[]*string

---

##### `Behaviour`<sup>Required</sup> <a name="Behaviour" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.behaviour"></a>

```go
func Behaviour() *string
```

- *Type:* *string

---

##### `CompressionEnabled`<sup>Required</sup> <a name="CompressionEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.compressionEnabled"></a>

```go
func CompressionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `QueryStringBehaviour`<sup>Required</sup> <a name="QueryStringBehaviour" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringBehaviour"></a>

```go
func QueryStringBehaviour() *string
```

- *Type:* *string

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.queryStringParameters"></a>

```go
func QueryStringParameters() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching</a>

---


### CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference <a name="CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.cdnFrontdoorOriginGroupIdInput">CdnFrontdoorOriginGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.forwardingProtocolInput">ForwardingProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.cdnFrontdoorOriginGroupId">CdnFrontdoorOriginGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.forwardingProtocol">ForwardingProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CdnFrontdoorOriginGroupIdInput`<sup>Optional</sup> <a name="CdnFrontdoorOriginGroupIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.cdnFrontdoorOriginGroupIdInput"></a>

```go
func CdnFrontdoorOriginGroupIdInput() *string
```

- *Type:* *string

---

##### `ForwardingProtocolInput`<sup>Optional</sup> <a name="ForwardingProtocolInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.forwardingProtocolInput"></a>

```go
func ForwardingProtocolInput() *string
```

- *Type:* *string

---

##### `CdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="CdnFrontdoorOriginGroupId" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.cdnFrontdoorOriginGroupId"></a>

```go
func CdnFrontdoorOriginGroupId() *string
```

- *Type:* *string

---

##### `ForwardingProtocol`<sup>Required</sup> <a name="ForwardingProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.forwardingProtocol"></a>

```go
func ForwardingProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup</a>

---


### CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference <a name="CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.putCaching">PutCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.putOriginGroup">PutOriginGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.resetOriginGroup">ResetOriginGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaching` <a name="PutCaching" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.putCaching"></a>

```go
func PutCaching(value CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.putCaching.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching</a>

---

##### `PutOriginGroup` <a name="PutOriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.putOriginGroup"></a>

```go
func PutOriginGroup(value CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.putOriginGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup</a>

---

##### `ResetOriginGroup` <a name="ResetOriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.resetOriginGroup"></a>

```go
func ResetOriginGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.caching">Caching</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.originGroup">OriginGroup</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.cachingInput">CachingInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.originGroupInput">OriginGroupInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.caching"></a>

```go
func Caching() CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference</a>

---

##### `OriginGroup`<sup>Required</sup> <a name="OriginGroup" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.originGroup"></a>

```go
func OriginGroup() CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference</a>

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.cachingInput"></a>

```go
func CachingInput() CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching</a>

---

##### `OriginGroupInput`<sup>Optional</sup> <a name="OriginGroupInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.originGroupInput"></a>

```go
func OriginGroupInput() CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride">CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride</a>

---


### CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference <a name="CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resetDestinationFragment">ResetDestinationFragment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resetDestinationHostName">ResetDestinationHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resetDestinationPath">ResetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resetRedirectProtocol">ResetRedirectProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationFragment` <a name="ResetDestinationFragment" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resetDestinationFragment"></a>

```go
func ResetDestinationFragment()
```

##### `ResetDestinationHostName` <a name="ResetDestinationHostName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resetDestinationHostName"></a>

```go
func ResetDestinationHostName()
```

##### `ResetDestinationPath` <a name="ResetDestinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resetDestinationPath"></a>

```go
func ResetDestinationPath()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```

##### `ResetRedirectProtocol` <a name="ResetRedirectProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.resetRedirectProtocol"></a>

```go
func ResetRedirectProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.destinationFragmentInput">DestinationFragmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.destinationHostNameInput">DestinationHostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.redirectProtocolInput">RedirectProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.redirectTypeInput">RedirectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.destinationFragment">DestinationFragment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.destinationHostName">DestinationHostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.redirectProtocol">RedirectProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.redirectType">RedirectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect">CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationFragmentInput`<sup>Optional</sup> <a name="DestinationFragmentInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.destinationFragmentInput"></a>

```go
func DestinationFragmentInput() *string
```

- *Type:* *string

---

##### `DestinationHostNameInput`<sup>Optional</sup> <a name="DestinationHostNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.destinationHostNameInput"></a>

```go
func DestinationHostNameInput() *string
```

- *Type:* *string

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.destinationPathInput"></a>

```go
func DestinationPathInput() *string
```

- *Type:* *string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() *string
```

- *Type:* *string

---

##### `RedirectProtocolInput`<sup>Optional</sup> <a name="RedirectProtocolInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.redirectProtocolInput"></a>

```go
func RedirectProtocolInput() *string
```

- *Type:* *string

---

##### `RedirectTypeInput`<sup>Optional</sup> <a name="RedirectTypeInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.redirectTypeInput"></a>

```go
func RedirectTypeInput() *string
```

- *Type:* *string

---

##### `DestinationFragment`<sup>Required</sup> <a name="DestinationFragment" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.destinationFragment"></a>

```go
func DestinationFragment() *string
```

- *Type:* *string

---

##### `DestinationHostName`<sup>Required</sup> <a name="DestinationHostName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.destinationHostName"></a>

```go
func DestinationHostName() *string
```

- *Type:* *string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.destinationPath"></a>

```go
func DestinationPath() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `RedirectProtocol`<sup>Required</sup> <a name="RedirectProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.redirectProtocol"></a>

```go
func RedirectProtocol() *string
```

- *Type:* *string

---

##### `RedirectType`<sup>Required</sup> <a name="RedirectType" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.redirectType"></a>

```go
func RedirectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect">CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect</a>

---


### CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference <a name="CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.resetPreserveUnmatchedPathEnabled">ResetPreserveUnmatchedPathEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreserveUnmatchedPathEnabled` <a name="ResetPreserveUnmatchedPathEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.resetPreserveUnmatchedPathEnabled"></a>

```go
func ResetPreserveUnmatchedPathEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.preserveUnmatchedPathEnabledInput">PreserveUnmatchedPathEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.sourcePatternInput">SourcePatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.preserveUnmatchedPathEnabled">PreserveUnmatchedPathEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.sourcePattern">SourcePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite">CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.destinationPathInput"></a>

```go
func DestinationPathInput() *string
```

- *Type:* *string

---

##### `PreserveUnmatchedPathEnabledInput`<sup>Optional</sup> <a name="PreserveUnmatchedPathEnabledInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.preserveUnmatchedPathEnabledInput"></a>

```go
func PreserveUnmatchedPathEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SourcePatternInput`<sup>Optional</sup> <a name="SourcePatternInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.sourcePatternInput"></a>

```go
func SourcePatternInput() *string
```

- *Type:* *string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.destinationPath"></a>

```go
func DestinationPath() *string
```

- *Type:* *string

---

##### `PreserveUnmatchedPathEnabled`<sup>Required</sup> <a name="PreserveUnmatchedPathEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.preserveUnmatchedPathEnabled"></a>

```go
func PreserveUnmatchedPathEnabled() interface{}
```

- *Type:* interface{}

---

##### `SourcePattern`<sup>Required</sup> <a name="SourcePattern" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.sourcePattern"></a>

```go
func SourcePattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite">CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite</a>

---


### CdnFrontdoorBatchRuleSetRuleConditionsClientPortList <a name="CdnFrontdoorBatchRuleSetRuleConditionsClientPortList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsClientPortList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsClientPortList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList <a name="CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsHostNameList <a name="CdnFrontdoorBatchRuleSetRuleConditionsHostNameList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsHostNameList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsHostNameList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList <a name="CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorBatchRuleSetRuleConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putClientPort">PutClientPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putDeviceType">PutDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putHostName">PutHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putHttpVersion">PutHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putPostArgument">PutPostArgument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putQueryString">PutQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRemoteAddress">PutRemoteAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestBody">PutRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestCookies">PutRequestCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestFileExtension">PutRequestFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestFilename">PutRequestFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestMethod">PutRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestPath">PutRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestScheme">PutRequestScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestUrl">PutRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putServerPort">PutServerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putSslProtocol">PutSslProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetClientPort">ResetClientPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetDeviceType">ResetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetHttpVersion">ResetHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetPostArgument">ResetPostArgument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRemoteAddress">ResetRemoteAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestBody">ResetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestCookies">ResetRequestCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestFileExtension">ResetRequestFileExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestFilename">ResetRequestFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestMethod">ResetRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestPath">ResetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestScheme">ResetRequestScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestUrl">ResetRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetServerPort">ResetServerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetSslProtocol">ResetSslProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientPort` <a name="PutClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putClientPort"></a>

```go
func PutClientPort(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putClientPort.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeviceType` <a name="PutDeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putDeviceType"></a>

```go
func PutDeviceType(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putDeviceType.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHostName` <a name="PutHostName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putHostName"></a>

```go
func PutHostName(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putHostName.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHttpVersion` <a name="PutHttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putHttpVersion"></a>

```go
func PutHttpVersion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putHttpVersion.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPostArgument` <a name="PutPostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putPostArgument"></a>

```go
func PutPostArgument(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putPostArgument.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryString` <a name="PutQueryString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putQueryString"></a>

```go
func PutQueryString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putQueryString.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRemoteAddress` <a name="PutRemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRemoteAddress"></a>

```go
func PutRemoteAddress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRemoteAddress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestBody` <a name="PutRequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestBody"></a>

```go
func PutRequestBody(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestBody.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestCookies` <a name="PutRequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestCookies"></a>

```go
func PutRequestCookies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestCookies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestFileExtension` <a name="PutRequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestFileExtension"></a>

```go
func PutRequestFileExtension(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestFileExtension.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestFilename` <a name="PutRequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestFilename"></a>

```go
func PutRequestFilename(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestFilename.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestHeader"></a>

```go
func PutRequestHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestMethod` <a name="PutRequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestMethod"></a>

```go
func PutRequestMethod(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestMethod.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestPath` <a name="PutRequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestPath"></a>

```go
func PutRequestPath(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestPath.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestScheme` <a name="PutRequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestScheme"></a>

```go
func PutRequestScheme(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestScheme.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestUrl` <a name="PutRequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestUrl"></a>

```go
func PutRequestUrl(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putRequestUrl.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServerPort` <a name="PutServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putServerPort"></a>

```go
func PutServerPort(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putServerPort.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putSocketAddress"></a>

```go
func PutSocketAddress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSslProtocol` <a name="PutSslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putSslProtocol"></a>

```go
func PutSslProtocol(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.putSslProtocol.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientPort` <a name="ResetClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetClientPort"></a>

```go
func ResetClientPort()
```

##### `ResetDeviceType` <a name="ResetDeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetDeviceType"></a>

```go
func ResetDeviceType()
```

##### `ResetHostName` <a name="ResetHostName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetHostName"></a>

```go
func ResetHostName()
```

##### `ResetHttpVersion` <a name="ResetHttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetHttpVersion"></a>

```go
func ResetHttpVersion()
```

##### `ResetPostArgument` <a name="ResetPostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetPostArgument"></a>

```go
func ResetPostArgument()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```

##### `ResetRemoteAddress` <a name="ResetRemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRemoteAddress"></a>

```go
func ResetRemoteAddress()
```

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestBody"></a>

```go
func ResetRequestBody()
```

##### `ResetRequestCookies` <a name="ResetRequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestCookies"></a>

```go
func ResetRequestCookies()
```

##### `ResetRequestFileExtension` <a name="ResetRequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestFileExtension"></a>

```go
func ResetRequestFileExtension()
```

##### `ResetRequestFilename` <a name="ResetRequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestFilename"></a>

```go
func ResetRequestFilename()
```

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestHeader"></a>

```go
func ResetRequestHeader()
```

##### `ResetRequestMethod` <a name="ResetRequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestMethod"></a>

```go
func ResetRequestMethod()
```

##### `ResetRequestPath` <a name="ResetRequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestPath"></a>

```go
func ResetRequestPath()
```

##### `ResetRequestScheme` <a name="ResetRequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestScheme"></a>

```go
func ResetRequestScheme()
```

##### `ResetRequestUrl` <a name="ResetRequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetRequestUrl"></a>

```go
func ResetRequestUrl()
```

##### `ResetServerPort` <a name="ResetServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetServerPort"></a>

```go
func ResetServerPort()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetSocketAddress"></a>

```go
func ResetSocketAddress()
```

##### `ResetSslProtocol` <a name="ResetSslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.resetSslProtocol"></a>

```go
func ResetSslProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.clientPort">ClientPort</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList">CdnFrontdoorBatchRuleSetRuleConditionsClientPortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.deviceType">DeviceType</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList">CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.hostName">HostName</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList">CdnFrontdoorBatchRuleSetRuleConditionsHostNameList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.httpVersion">HttpVersion</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList">CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.postArgument">PostArgument</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList">CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.queryString">QueryString</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList">CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.remoteAddress">RemoteAddress</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList">CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestBody">RequestBody</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList">CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestCookies">RequestCookies</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList">CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestFileExtension">RequestFileExtension</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList">CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestFilename">RequestFilename</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList">CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList">CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestMethod">RequestMethod</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList">CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestPath">RequestPath</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList">CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestScheme">RequestScheme</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList">CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestUrl">RequestUrl</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList">CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.serverPort">ServerPort</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList">CdnFrontdoorBatchRuleSetRuleConditionsServerPortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList">CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.sslProtocol">SslProtocol</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList">CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.clientPortInput">ClientPortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.deviceTypeInput">DeviceTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.httpVersionInput">HttpVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.postArgumentInput">PostArgumentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.remoteAddressInput">RemoteAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestBodyInput">RequestBodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestCookiesInput">RequestCookiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestFileExtensionInput">RequestFileExtensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestFilenameInput">RequestFilenameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestMethodInput">RequestMethodInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestPathInput">RequestPathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestSchemeInput">RequestSchemeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestUrlInput">RequestUrlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.serverPortInput">ServerPortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.sslProtocolInput">SslProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions">CdnFrontdoorBatchRuleSetRuleConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientPort`<sup>Required</sup> <a name="ClientPort" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.clientPort"></a>

```go
func ClientPort() CdnFrontdoorBatchRuleSetRuleConditionsClientPortList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsClientPortList">CdnFrontdoorBatchRuleSetRuleConditionsClientPortList</a>

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.deviceType"></a>

```go
func DeviceType() CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList">CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList</a>

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.hostName"></a>

```go
func HostName() CdnFrontdoorBatchRuleSetRuleConditionsHostNameList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHostNameList">CdnFrontdoorBatchRuleSetRuleConditionsHostNameList</a>

---

##### `HttpVersion`<sup>Required</sup> <a name="HttpVersion" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.httpVersion"></a>

```go
func HttpVersion() CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList">CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList</a>

---

##### `PostArgument`<sup>Required</sup> <a name="PostArgument" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.postArgument"></a>

```go
func PostArgument() CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList">CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList</a>

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.queryString"></a>

```go
func QueryString() CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList">CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList</a>

---

##### `RemoteAddress`<sup>Required</sup> <a name="RemoteAddress" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.remoteAddress"></a>

```go
func RemoteAddress() CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList">CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList</a>

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestBody"></a>

```go
func RequestBody() CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList">CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList</a>

---

##### `RequestCookies`<sup>Required</sup> <a name="RequestCookies" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestCookies"></a>

```go
func RequestCookies() CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList">CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList</a>

---

##### `RequestFileExtension`<sup>Required</sup> <a name="RequestFileExtension" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestFileExtension"></a>

```go
func RequestFileExtension() CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList">CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList</a>

---

##### `RequestFilename`<sup>Required</sup> <a name="RequestFilename" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestFilename"></a>

```go
func RequestFilename() CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList">CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList</a>

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestHeader"></a>

```go
func RequestHeader() CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList">CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList</a>

---

##### `RequestMethod`<sup>Required</sup> <a name="RequestMethod" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestMethod"></a>

```go
func RequestMethod() CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList">CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList</a>

---

##### `RequestPath`<sup>Required</sup> <a name="RequestPath" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestPath"></a>

```go
func RequestPath() CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList">CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList</a>

---

##### `RequestScheme`<sup>Required</sup> <a name="RequestScheme" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestScheme"></a>

```go
func RequestScheme() CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList">CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList</a>

---

##### `RequestUrl`<sup>Required</sup> <a name="RequestUrl" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestUrl"></a>

```go
func RequestUrl() CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList">CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList</a>

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.serverPort"></a>

```go
func ServerPort() CdnFrontdoorBatchRuleSetRuleConditionsServerPortList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList">CdnFrontdoorBatchRuleSetRuleConditionsServerPortList</a>

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.socketAddress"></a>

```go
func SocketAddress() CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList">CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList</a>

---

##### `SslProtocol`<sup>Required</sup> <a name="SslProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.sslProtocol"></a>

```go
func SslProtocol() CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList">CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList</a>

---

##### `ClientPortInput`<sup>Optional</sup> <a name="ClientPortInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.clientPortInput"></a>

```go
func ClientPortInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceTypeInput`<sup>Optional</sup> <a name="DeviceTypeInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.deviceTypeInput"></a>

```go
func DeviceTypeInput() interface{}
```

- *Type:* interface{}

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() interface{}
```

- *Type:* interface{}

---

##### `HttpVersionInput`<sup>Optional</sup> <a name="HttpVersionInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.httpVersionInput"></a>

```go
func HttpVersionInput() interface{}
```

- *Type:* interface{}

---

##### `PostArgumentInput`<sup>Optional</sup> <a name="PostArgumentInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.postArgumentInput"></a>

```go
func PostArgumentInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `RemoteAddressInput`<sup>Optional</sup> <a name="RemoteAddressInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.remoteAddressInput"></a>

```go
func RemoteAddressInput() interface{}
```

- *Type:* interface{}

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestBodyInput"></a>

```go
func RequestBodyInput() interface{}
```

- *Type:* interface{}

---

##### `RequestCookiesInput`<sup>Optional</sup> <a name="RequestCookiesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestCookiesInput"></a>

```go
func RequestCookiesInput() interface{}
```

- *Type:* interface{}

---

##### `RequestFileExtensionInput`<sup>Optional</sup> <a name="RequestFileExtensionInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestFileExtensionInput"></a>

```go
func RequestFileExtensionInput() interface{}
```

- *Type:* interface{}

---

##### `RequestFilenameInput`<sup>Optional</sup> <a name="RequestFilenameInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestFilenameInput"></a>

```go
func RequestFilenameInput() interface{}
```

- *Type:* interface{}

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestHeaderInput"></a>

```go
func RequestHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RequestMethodInput`<sup>Optional</sup> <a name="RequestMethodInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestMethodInput"></a>

```go
func RequestMethodInput() interface{}
```

- *Type:* interface{}

---

##### `RequestPathInput`<sup>Optional</sup> <a name="RequestPathInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestPathInput"></a>

```go
func RequestPathInput() interface{}
```

- *Type:* interface{}

---

##### `RequestSchemeInput`<sup>Optional</sup> <a name="RequestSchemeInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestSchemeInput"></a>

```go
func RequestSchemeInput() interface{}
```

- *Type:* interface{}

---

##### `RequestUrlInput`<sup>Optional</sup> <a name="RequestUrlInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.requestUrlInput"></a>

```go
func RequestUrlInput() interface{}
```

- *Type:* interface{}

---

##### `ServerPortInput`<sup>Optional</sup> <a name="ServerPortInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.serverPortInput"></a>

```go
func ServerPortInput() interface{}
```

- *Type:* interface{}

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.socketAddressInput"></a>

```go
func SocketAddressInput() interface{}
```

- *Type:* interface{}

---

##### `SslProtocolInput`<sup>Optional</sup> <a name="SslProtocolInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.sslProtocolInput"></a>

```go
func SslProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorBatchRuleSetRuleConditions
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions">CdnFrontdoorBatchRuleSetRuleConditions</a>

---


### CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList <a name="CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList <a name="CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsQueryStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList <a name="CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestPathList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.resetTransforms">ResetTransforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransforms` <a name="ResetTransforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.resetTransforms"></a>

```go
func ResetTransforms()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.transformsInput">TransformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.transforms">Transforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TransformsInput`<sup>Optional</sup> <a name="TransformsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.transformsInput"></a>

```go
func TransformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Transforms`<sup>Required</sup> <a name="Transforms" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.transforms"></a>

```go
func Transforms() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsServerPortList <a name="CdnFrontdoorBatchRuleSetRuleConditionsServerPortList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsServerPortList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsServerPortList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList <a name="CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList <a name="CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference <a name="CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleList <a name="CdnFrontdoorBatchRuleSetRuleList" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CdnFrontdoorBatchRuleSetRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.get"></a>

```go
func Get(index *f64) CdnFrontdoorBatchRuleSetRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetRuleOutputReference <a name="CdnFrontdoorBatchRuleSetRuleOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CdnFrontdoorBatchRuleSetRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.resetBehaviourOnMatch">ResetBehaviourOnMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.putActions"></a>

```go
func PutActions(value CdnFrontdoorBatchRuleSetRuleActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions">CdnFrontdoorBatchRuleSetRuleActions</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.putConditions"></a>

```go
func PutConditions(value CdnFrontdoorBatchRuleSetRuleConditions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions">CdnFrontdoorBatchRuleSetRuleConditions</a>

---

##### `ResetBehaviourOnMatch` <a name="ResetBehaviourOnMatch" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.resetBehaviourOnMatch"></a>

```go
func ResetBehaviourOnMatch()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.resetConditions"></a>

```go
func ResetConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference">CdnFrontdoorBatchRuleSetRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference">CdnFrontdoorBatchRuleSetRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions">CdnFrontdoorBatchRuleSetRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.behaviourOnMatchInput">BehaviourOnMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions">CdnFrontdoorBatchRuleSetRuleConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.behaviourOnMatch">BehaviourOnMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.actions"></a>

```go
func Actions() CdnFrontdoorBatchRuleSetRuleActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActionsOutputReference">CdnFrontdoorBatchRuleSetRuleActionsOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.conditions"></a>

```go
func Conditions() CdnFrontdoorBatchRuleSetRuleConditionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditionsOutputReference">CdnFrontdoorBatchRuleSetRuleConditionsOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.actionsInput"></a>

```go
func ActionsInput() CdnFrontdoorBatchRuleSetRuleActions
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleActions">CdnFrontdoorBatchRuleSetRuleActions</a>

---

##### `BehaviourOnMatchInput`<sup>Optional</sup> <a name="BehaviourOnMatchInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.behaviourOnMatchInput"></a>

```go
func BehaviourOnMatchInput() *string
```

- *Type:* *string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() CdnFrontdoorBatchRuleSetRuleConditions
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleConditions">CdnFrontdoorBatchRuleSetRuleConditions</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `BehaviourOnMatch`<sup>Required</sup> <a name="BehaviourOnMatch" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.behaviourOnMatch"></a>

```go
func BehaviourOnMatch() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CdnFrontdoorBatchRuleSetTimeoutsOutputReference <a name="CdnFrontdoorBatchRuleSetTimeoutsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/cdnfrontdoorbatchruleset"

cdnfrontdoorbatchruleset.NewCdnFrontdoorBatchRuleSetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorBatchRuleSetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorBatchRuleSet.CdnFrontdoorBatchRuleSetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



