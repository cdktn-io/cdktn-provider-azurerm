# `networkSecurityPerimeterAccessRule` Submodule <a name="`networkSecurityPerimeterAccessRule` Submodule" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityPerimeterAccessRule <a name="NetworkSecurityPerimeterAccessRule" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule azurerm_network_security_perimeter_access_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/networksecurityperimeteraccessrule"

networksecurityperimeteraccessrule.NewNetworkSecurityPerimeterAccessRule(scope Construct, id *string, config NetworkSecurityPerimeterAccessRuleConfig) NetworkSecurityPerimeterAccessRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig">NetworkSecurityPerimeterAccessRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig">NetworkSecurityPerimeterAccessRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetAddressPrefixes">ResetAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetFqdns">ResetFqdns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetServiceTags">ResetServiceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetSubscriptionIds">ResetSubscriptionIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityPerimeterAccessRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts">NetworkSecurityPerimeterAccessRuleTimeouts</a>

---

##### `ResetAddressPrefixes` <a name="ResetAddressPrefixes" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetAddressPrefixes"></a>

```go
func ResetAddressPrefixes()
```

##### `ResetFqdns` <a name="ResetFqdns" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetFqdns"></a>

```go
func ResetFqdns()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetId"></a>

```go
func ResetId()
```

##### `ResetServiceTags` <a name="ResetServiceTags" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetServiceTags"></a>

```go
func ResetServiceTags()
```

##### `ResetSubscriptionIds` <a name="ResetSubscriptionIds" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetSubscriptionIds"></a>

```go
func ResetSubscriptionIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkSecurityPerimeterAccessRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/networksecurityperimeteraccessrule"

networksecurityperimeteraccessrule.NetworkSecurityPerimeterAccessRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/networksecurityperimeteraccessrule"

networksecurityperimeteraccessrule.NetworkSecurityPerimeterAccessRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/networksecurityperimeteraccessrule"

networksecurityperimeteraccessrule.NetworkSecurityPerimeterAccessRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/networksecurityperimeteraccessrule"

networksecurityperimeteraccessrule.NetworkSecurityPerimeterAccessRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkSecurityPerimeterAccessRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkSecurityPerimeterAccessRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkSecurityPerimeterAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityPerimeterAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference">NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.addressPrefixesInput">AddressPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.fqdnsInput">FqdnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.networkSecurityPerimeterProfileIdInput">NetworkSecurityPerimeterProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.serviceTagsInput">ServiceTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.subscriptionIdsInput">SubscriptionIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.addressPrefixes">AddressPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.fqdns">Fqdns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.networkSecurityPerimeterProfileId">NetworkSecurityPerimeterProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.serviceTags">ServiceTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.subscriptionIds">SubscriptionIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference">NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference</a>

---

##### `AddressPrefixesInput`<sup>Optional</sup> <a name="AddressPrefixesInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.addressPrefixesInput"></a>

```go
func AddressPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `FqdnsInput`<sup>Optional</sup> <a name="FqdnsInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.fqdnsInput"></a>

```go
func FqdnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkSecurityPerimeterProfileIdInput`<sup>Optional</sup> <a name="NetworkSecurityPerimeterProfileIdInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.networkSecurityPerimeterProfileIdInput"></a>

```go
func NetworkSecurityPerimeterProfileIdInput() *string
```

- *Type:* *string

---

##### `ServiceTagsInput`<sup>Optional</sup> <a name="ServiceTagsInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.serviceTagsInput"></a>

```go
func ServiceTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubscriptionIdsInput`<sup>Optional</sup> <a name="SubscriptionIdsInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.subscriptionIdsInput"></a>

```go
func SubscriptionIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AddressPrefixes`<sup>Required</sup> <a name="AddressPrefixes" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.addressPrefixes"></a>

```go
func AddressPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Fqdns`<sup>Required</sup> <a name="Fqdns" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.fqdns"></a>

```go
func Fqdns() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkSecurityPerimeterProfileId`<sup>Required</sup> <a name="NetworkSecurityPerimeterProfileId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.networkSecurityPerimeterProfileId"></a>

```go
func NetworkSecurityPerimeterProfileId() *string
```

- *Type:* *string

---

##### `ServiceTags`<sup>Required</sup> <a name="ServiceTags" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.serviceTags"></a>

```go
func ServiceTags() *[]*string
```

- *Type:* *[]*string

---

##### `SubscriptionIds`<sup>Required</sup> <a name="SubscriptionIds" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.subscriptionIds"></a>

```go
func SubscriptionIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityPerimeterAccessRuleConfig <a name="NetworkSecurityPerimeterAccessRuleConfig" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/networksecurityperimeteraccessrule"

&networksecurityperimeteraccessrule.NetworkSecurityPerimeterAccessRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Direction: *string,
	Name: *string,
	NetworkSecurityPerimeterProfileId: *string,
	AddressPrefixes: *[]*string,
	Fqdns: *[]*string,
	Id: *string,
	ServiceTags: *[]*string,
	SubscriptionIds: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.direction">Direction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#direction NetworkSecurityPerimeterAccessRule#direction}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#name NetworkSecurityPerimeterAccessRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.networkSecurityPerimeterProfileId">NetworkSecurityPerimeterProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#network_security_perimeter_profile_id NetworkSecurityPerimeterAccessRule#network_security_perimeter_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.addressPrefixes">AddressPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#address_prefixes NetworkSecurityPerimeterAccessRule#address_prefixes}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.fqdns">Fqdns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#fqdns NetworkSecurityPerimeterAccessRule#fqdns}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#id NetworkSecurityPerimeterAccessRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.serviceTags">ServiceTags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#service_tags NetworkSecurityPerimeterAccessRule#service_tags}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.subscriptionIds">SubscriptionIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#subscription_ids NetworkSecurityPerimeterAccessRule#subscription_ids}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts">NetworkSecurityPerimeterAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#direction NetworkSecurityPerimeterAccessRule#direction}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#name NetworkSecurityPerimeterAccessRule#name}.

---

##### `NetworkSecurityPerimeterProfileId`<sup>Required</sup> <a name="NetworkSecurityPerimeterProfileId" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.networkSecurityPerimeterProfileId"></a>

```go
NetworkSecurityPerimeterProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#network_security_perimeter_profile_id NetworkSecurityPerimeterAccessRule#network_security_perimeter_profile_id}.

---

##### `AddressPrefixes`<sup>Optional</sup> <a name="AddressPrefixes" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.addressPrefixes"></a>

```go
AddressPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#address_prefixes NetworkSecurityPerimeterAccessRule#address_prefixes}.

---

##### `Fqdns`<sup>Optional</sup> <a name="Fqdns" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.fqdns"></a>

```go
Fqdns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#fqdns NetworkSecurityPerimeterAccessRule#fqdns}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#id NetworkSecurityPerimeterAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceTags`<sup>Optional</sup> <a name="ServiceTags" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.serviceTags"></a>

```go
ServiceTags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#service_tags NetworkSecurityPerimeterAccessRule#service_tags}.

---

##### `SubscriptionIds`<sup>Optional</sup> <a name="SubscriptionIds" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.subscriptionIds"></a>

```go
SubscriptionIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#subscription_ids NetworkSecurityPerimeterAccessRule#subscription_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityPerimeterAccessRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts">NetworkSecurityPerimeterAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#timeouts NetworkSecurityPerimeterAccessRule#timeouts}

---

### NetworkSecurityPerimeterAccessRuleTimeouts <a name="NetworkSecurityPerimeterAccessRuleTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/networksecurityperimeteraccessrule"

&networksecurityperimeteraccessrule.NetworkSecurityPerimeterAccessRuleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#create NetworkSecurityPerimeterAccessRule#create}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#delete NetworkSecurityPerimeterAccessRule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#read NetworkSecurityPerimeterAccessRule#read}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#update NetworkSecurityPerimeterAccessRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#create NetworkSecurityPerimeterAccessRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#delete NetworkSecurityPerimeterAccessRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#read NetworkSecurityPerimeterAccessRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/network_security_perimeter_access_rule#update NetworkSecurityPerimeterAccessRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference <a name="NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/networksecurityperimeteraccessrule"

networksecurityperimeteraccessrule.NewNetworkSecurityPerimeterAccessRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.networkSecurityPerimeterAccessRule.NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



