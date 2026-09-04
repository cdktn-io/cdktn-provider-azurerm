# `automationRuntimeEnvironmentPackage` Submodule <a name="`automationRuntimeEnvironmentPackage` Submodule" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuntimeEnvironmentPackage <a name="AutomationRuntimeEnvironmentPackage" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package azurerm_automation_runtime_environment_package}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/automationruntimeenvironmentpackage"

automationruntimeenvironmentpackage.NewAutomationRuntimeEnvironmentPackage(scope Construct, id *string, config AutomationRuntimeEnvironmentPackageConfig) AutomationRuntimeEnvironmentPackage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig">AutomationRuntimeEnvironmentPackageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig">AutomationRuntimeEnvironmentPackageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetContentVersion">ResetContentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashAlgorithm">ResetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashValue">ResetHashValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts"></a>

```go
func PutTimeouts(value AutomationRuntimeEnvironmentPackageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

---

##### `ResetContentVersion` <a name="ResetContentVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetContentVersion"></a>

```go
func ResetContentVersion()
```

##### `ResetHashAlgorithm` <a name="ResetHashAlgorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashAlgorithm"></a>

```go
func ResetHashAlgorithm()
```

##### `ResetHashValue` <a name="ResetHashValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashValue"></a>

```go
func ResetHashValue()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AutomationRuntimeEnvironmentPackage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/automationruntimeenvironmentpackage"

automationruntimeenvironmentpackage.AutomationRuntimeEnvironmentPackage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/automationruntimeenvironmentpackage"

automationruntimeenvironmentpackage.AutomationRuntimeEnvironmentPackage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/automationruntimeenvironmentpackage"

automationruntimeenvironmentpackage.AutomationRuntimeEnvironmentPackage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/automationruntimeenvironmentpackage"

automationruntimeenvironmentpackage.AutomationRuntimeEnvironmentPackage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AutomationRuntimeEnvironmentPackage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationRuntimeEnvironmentPackage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationRuntimeEnvironmentPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AutomationRuntimeEnvironmentPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.default">Default</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.sizeInBytes">SizeInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference">AutomationRuntimeEnvironmentPackageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentIdInput">AutomationRuntimeEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUriInput">ContentUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersionInput">ContentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithmInput">HashAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValueInput">HashValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentId">AutomationRuntimeEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUri">ContentUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersion">ContentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithm">HashAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValue">HashValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.sizeInBytes"></a>

```go
func SizeInBytes() *f64
```

- *Type:* *f64

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeouts"></a>

```go
func Timeouts() AutomationRuntimeEnvironmentPackageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference">AutomationRuntimeEnvironmentPackageTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `AutomationRuntimeEnvironmentIdInput`<sup>Optional</sup> <a name="AutomationRuntimeEnvironmentIdInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentIdInput"></a>

```go
func AutomationRuntimeEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `ContentUriInput`<sup>Optional</sup> <a name="ContentUriInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUriInput"></a>

```go
func ContentUriInput() *string
```

- *Type:* *string

---

##### `ContentVersionInput`<sup>Optional</sup> <a name="ContentVersionInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersionInput"></a>

```go
func ContentVersionInput() *string
```

- *Type:* *string

---

##### `HashAlgorithmInput`<sup>Optional</sup> <a name="HashAlgorithmInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithmInput"></a>

```go
func HashAlgorithmInput() *string
```

- *Type:* *string

---

##### `HashValueInput`<sup>Optional</sup> <a name="HashValueInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValueInput"></a>

```go
func HashValueInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutomationRuntimeEnvironmentId`<sup>Required</sup> <a name="AutomationRuntimeEnvironmentId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentId"></a>

```go
func AutomationRuntimeEnvironmentId() *string
```

- *Type:* *string

---

##### `ContentUri`<sup>Required</sup> <a name="ContentUri" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUri"></a>

```go
func ContentUri() *string
```

- *Type:* *string

---

##### `ContentVersion`<sup>Required</sup> <a name="ContentVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersion"></a>

```go
func ContentVersion() *string
```

- *Type:* *string

---

##### `HashAlgorithm`<sup>Required</sup> <a name="HashAlgorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithm"></a>

```go
func HashAlgorithm() *string
```

- *Type:* *string

---

##### `HashValue`<sup>Required</sup> <a name="HashValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValue"></a>

```go
func HashValue() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuntimeEnvironmentPackageConfig <a name="AutomationRuntimeEnvironmentPackageConfig" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/automationruntimeenvironmentpackage"

&automationruntimeenvironmentpackage.AutomationRuntimeEnvironmentPackageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AutomationRuntimeEnvironmentId: *string,
	ContentUri: *string,
	Name: *string,
	ContentVersion: *string,
	HashAlgorithm: *string,
	HashValue: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.automationRuntimeEnvironmentId">AutomationRuntimeEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentUri">ContentUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentVersion">ContentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashAlgorithm">HashAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashValue">HashValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomationRuntimeEnvironmentId`<sup>Required</sup> <a name="AutomationRuntimeEnvironmentId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.automationRuntimeEnvironmentId"></a>

```go
AutomationRuntimeEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}.

---

##### `ContentUri`<sup>Required</sup> <a name="ContentUri" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentUri"></a>

```go
ContentUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}.

---

##### `ContentVersion`<sup>Optional</sup> <a name="ContentVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentVersion"></a>

```go
ContentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}.

---

##### `HashAlgorithm`<sup>Optional</sup> <a name="HashAlgorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashAlgorithm"></a>

```go
HashAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}.

---

##### `HashValue`<sup>Optional</sup> <a name="HashValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashValue"></a>

```go
HashValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.timeouts"></a>

```go
Timeouts AutomationRuntimeEnvironmentPackageTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#timeouts AutomationRuntimeEnvironmentPackage#timeouts}

---

### AutomationRuntimeEnvironmentPackageTimeouts <a name="AutomationRuntimeEnvironmentPackageTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/automationruntimeenvironmentpackage"

&automationruntimeenvironmentpackage.AutomationRuntimeEnvironmentPackageTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#create AutomationRuntimeEnvironmentPackage#create}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#delete AutomationRuntimeEnvironmentPackage#delete}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#read AutomationRuntimeEnvironmentPackage#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#create AutomationRuntimeEnvironmentPackage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#delete AutomationRuntimeEnvironmentPackage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/automation_runtime_environment_package#read AutomationRuntimeEnvironmentPackage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationRuntimeEnvironmentPackageTimeoutsOutputReference <a name="AutomationRuntimeEnvironmentPackageTimeoutsOutputReference" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/automationruntimeenvironmentpackage"

automationruntimeenvironmentpackage.NewAutomationRuntimeEnvironmentPackageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationRuntimeEnvironmentPackageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



