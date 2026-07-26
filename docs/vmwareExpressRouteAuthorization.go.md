# `vmwareExpressRouteAuthorization` Submodule <a name="`vmwareExpressRouteAuthorization` Submodule" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareExpressRouteAuthorization <a name="VmwareExpressRouteAuthorization" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization azurerm_vmware_express_route_authorization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareexpressrouteauthorization"

vmwareexpressrouteauthorization.NewVmwareExpressRouteAuthorization(scope Construct, id *string, config VmwareExpressRouteAuthorizationConfig) VmwareExpressRouteAuthorization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig">VmwareExpressRouteAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig">VmwareExpressRouteAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts"></a>

```go
func PutTimeouts(value VmwareExpressRouteAuthorizationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VmwareExpressRouteAuthorization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareexpressrouteauthorization"

vmwareexpressrouteauthorization.VmwareExpressRouteAuthorization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareexpressrouteauthorization"

vmwareexpressrouteauthorization.VmwareExpressRouteAuthorization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareexpressrouteauthorization"

vmwareexpressrouteauthorization.VmwareExpressRouteAuthorization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareexpressrouteauthorization"

vmwareexpressrouteauthorization.VmwareExpressRouteAuthorization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VmwareExpressRouteAuthorization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VmwareExpressRouteAuthorization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VmwareExpressRouteAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VmwareExpressRouteAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationId">ExpressRouteAuthorizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationKey">ExpressRouteAuthorizationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference">VmwareExpressRouteAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudIdInput">PrivateCloudIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudId">PrivateCloudId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExpressRouteAuthorizationId`<sup>Required</sup> <a name="ExpressRouteAuthorizationId" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationId"></a>

```go
func ExpressRouteAuthorizationId() *string
```

- *Type:* *string

---

##### `ExpressRouteAuthorizationKey`<sup>Required</sup> <a name="ExpressRouteAuthorizationKey" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationKey"></a>

```go
func ExpressRouteAuthorizationKey() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeouts"></a>

```go
func Timeouts() VmwareExpressRouteAuthorizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference">VmwareExpressRouteAuthorizationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateCloudIdInput`<sup>Optional</sup> <a name="PrivateCloudIdInput" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudIdInput"></a>

```go
func PrivateCloudIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateCloudId`<sup>Required</sup> <a name="PrivateCloudId" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudId"></a>

```go
func PrivateCloudId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareExpressRouteAuthorizationConfig <a name="VmwareExpressRouteAuthorizationConfig" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareexpressrouteauthorization"

&vmwareexpressrouteauthorization.VmwareExpressRouteAuthorizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PrivateCloudId: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#name VmwareExpressRouteAuthorization#name}. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.privateCloudId">PrivateCloudId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#id VmwareExpressRouteAuthorization#id}. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#name VmwareExpressRouteAuthorization#name}.

---

##### `PrivateCloudId`<sup>Required</sup> <a name="PrivateCloudId" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.privateCloudId"></a>

```go
PrivateCloudId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#id VmwareExpressRouteAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.timeouts"></a>

```go
Timeouts VmwareExpressRouteAuthorizationTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#timeouts VmwareExpressRouteAuthorization#timeouts}

---

### VmwareExpressRouteAuthorizationTimeouts <a name="VmwareExpressRouteAuthorizationTimeouts" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareexpressrouteauthorization"

&vmwareexpressrouteauthorization.VmwareExpressRouteAuthorizationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#create VmwareExpressRouteAuthorization#create}. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#delete VmwareExpressRouteAuthorization#delete}. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#read VmwareExpressRouteAuthorization#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#create VmwareExpressRouteAuthorization#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#delete VmwareExpressRouteAuthorization#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_express_route_authorization#read VmwareExpressRouteAuthorization#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareExpressRouteAuthorizationTimeoutsOutputReference <a name="VmwareExpressRouteAuthorizationTimeoutsOutputReference" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareexpressrouteauthorization"

vmwareexpressrouteauthorization.NewVmwareExpressRouteAuthorizationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VmwareExpressRouteAuthorizationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



