# `vmwarePrivateCloud` Submodule <a name="`vmwarePrivateCloud` Submodule" id="@cdktn/provider-azurerm.vmwarePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwarePrivateCloud <a name="VmwarePrivateCloud" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud azurerm_vmware_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

vmwareprivatecloud.NewVmwarePrivateCloud(scope Construct, id *string, config VmwarePrivateCloudConfig) VmwarePrivateCloud
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig">VmwarePrivateCloudConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig">VmwarePrivateCloudConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putManagementCluster">PutManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetInternetConnectionEnabled">ResetInternetConnectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetNsxtPassword">ResetNsxtPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetVcenterPassword">ResetVcenterPassword</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManagementCluster` <a name="PutManagementCluster" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putManagementCluster"></a>

```go
func PutManagementCluster(value VmwarePrivateCloudManagementCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putManagementCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts"></a>

```go
func PutTimeouts(value VmwarePrivateCloudTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetId"></a>

```go
func ResetId()
```

##### `ResetInternetConnectionEnabled` <a name="ResetInternetConnectionEnabled" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetInternetConnectionEnabled"></a>

```go
func ResetInternetConnectionEnabled()
```

##### `ResetNsxtPassword` <a name="ResetNsxtPassword" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetNsxtPassword"></a>

```go
func ResetNsxtPassword()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVcenterPassword` <a name="ResetVcenterPassword" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetVcenterPassword"></a>

```go
func ResetVcenterPassword()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VmwarePrivateCloud resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

vmwareprivatecloud.VmwarePrivateCloud_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

vmwareprivatecloud.VmwarePrivateCloud_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

vmwareprivatecloud.VmwarePrivateCloud_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

vmwareprivatecloud.VmwarePrivateCloud_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VmwarePrivateCloud resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VmwarePrivateCloud to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VmwarePrivateCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VmwarePrivateCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.circuit">Circuit</a></code> | <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList">VmwarePrivateCloudCircuitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.hcxCloudManagerEndpoint">HcxCloudManagerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementCluster">ManagementCluster</a></code> | <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference">VmwarePrivateCloudManagementClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementSubnetCidr">ManagementSubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtCertificateThumbprint">NsxtCertificateThumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtManagerEndpoint">NsxtManagerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioningSubnetCidr">ProvisioningSubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference">VmwarePrivateCloudTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterCertificateThumbprint">VcenterCertificateThumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcsaEndpoint">VcsaEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vmotionSubnetCidr">VmotionSubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabledInput">InternetConnectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementClusterInput">ManagementClusterInput</a></code> | <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidrInput">NetworkSubnetCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPasswordInput">NsxtPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPasswordInput">VcenterPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabled">InternetConnectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidr">NetworkSubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPassword">NsxtPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPassword">VcenterPassword</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Circuit`<sup>Required</sup> <a name="Circuit" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.circuit"></a>

```go
func Circuit() VmwarePrivateCloudCircuitList
```

- *Type:* <a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList">VmwarePrivateCloudCircuitList</a>

---

##### `HcxCloudManagerEndpoint`<sup>Required</sup> <a name="HcxCloudManagerEndpoint" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.hcxCloudManagerEndpoint"></a>

```go
func HcxCloudManagerEndpoint() *string
```

- *Type:* *string

---

##### `ManagementCluster`<sup>Required</sup> <a name="ManagementCluster" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementCluster"></a>

```go
func ManagementCluster() VmwarePrivateCloudManagementClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference">VmwarePrivateCloudManagementClusterOutputReference</a>

---

##### `ManagementSubnetCidr`<sup>Required</sup> <a name="ManagementSubnetCidr" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementSubnetCidr"></a>

```go
func ManagementSubnetCidr() *string
```

- *Type:* *string

---

##### `NsxtCertificateThumbprint`<sup>Required</sup> <a name="NsxtCertificateThumbprint" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtCertificateThumbprint"></a>

```go
func NsxtCertificateThumbprint() *string
```

- *Type:* *string

---

##### `NsxtManagerEndpoint`<sup>Required</sup> <a name="NsxtManagerEndpoint" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtManagerEndpoint"></a>

```go
func NsxtManagerEndpoint() *string
```

- *Type:* *string

---

##### `ProvisioningSubnetCidr`<sup>Required</sup> <a name="ProvisioningSubnetCidr" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioningSubnetCidr"></a>

```go
func ProvisioningSubnetCidr() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeouts"></a>

```go
func Timeouts() VmwarePrivateCloudTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference">VmwarePrivateCloudTimeoutsOutputReference</a>

---

##### `VcenterCertificateThumbprint`<sup>Required</sup> <a name="VcenterCertificateThumbprint" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterCertificateThumbprint"></a>

```go
func VcenterCertificateThumbprint() *string
```

- *Type:* *string

---

##### `VcsaEndpoint`<sup>Required</sup> <a name="VcsaEndpoint" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcsaEndpoint"></a>

```go
func VcsaEndpoint() *string
```

- *Type:* *string

---

##### `VmotionSubnetCidr`<sup>Required</sup> <a name="VmotionSubnetCidr" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vmotionSubnetCidr"></a>

```go
func VmotionSubnetCidr() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InternetConnectionEnabledInput`<sup>Optional</sup> <a name="InternetConnectionEnabledInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabledInput"></a>

```go
func InternetConnectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagementClusterInput`<sup>Optional</sup> <a name="ManagementClusterInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementClusterInput"></a>

```go
func ManagementClusterInput() VmwarePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkSubnetCidrInput`<sup>Optional</sup> <a name="NetworkSubnetCidrInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidrInput"></a>

```go
func NetworkSubnetCidrInput() *string
```

- *Type:* *string

---

##### `NsxtPasswordInput`<sup>Optional</sup> <a name="NsxtPasswordInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPasswordInput"></a>

```go
func NsxtPasswordInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VcenterPasswordInput`<sup>Optional</sup> <a name="VcenterPasswordInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPasswordInput"></a>

```go
func VcenterPasswordInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternetConnectionEnabled`<sup>Required</sup> <a name="InternetConnectionEnabled" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabled"></a>

```go
func InternetConnectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkSubnetCidr`<sup>Required</sup> <a name="NetworkSubnetCidr" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidr"></a>

```go
func NetworkSubnetCidr() *string
```

- *Type:* *string

---

##### `NsxtPassword`<sup>Required</sup> <a name="NsxtPassword" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPassword"></a>

```go
func NsxtPassword() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VcenterPassword`<sup>Required</sup> <a name="VcenterPassword" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPassword"></a>

```go
func VcenterPassword() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwarePrivateCloudCircuit <a name="VmwarePrivateCloudCircuit" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

&vmwareprivatecloud.VmwarePrivateCloudCircuit {

}
```


### VmwarePrivateCloudConfig <a name="VmwarePrivateCloudConfig" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

&vmwareprivatecloud.VmwarePrivateCloudConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ManagementCluster: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster,
	Name: *string,
	NetworkSubnetCidr: *string,
	ResourceGroupName: *string,
	SkuName: *string,
	Id: *string,
	InternetConnectionEnabled: interface{},
	NsxtPassword: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.vmwarePrivateCloud.VmwarePrivateCloudTimeouts,
	VcenterPassword: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#location VmwarePrivateCloud#location}. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.managementCluster">ManagementCluster</a></code> | <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | management_cluster block. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#name VmwarePrivateCloud#name}. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.networkSubnetCidr">NetworkSubnetCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#id VmwarePrivateCloud#id}. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.internetConnectionEnabled">InternetConnectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.nsxtPassword">NsxtPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#tags VmwarePrivateCloud#tags}. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.vcenterPassword">VcenterPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#location VmwarePrivateCloud#location}.

---

##### `ManagementCluster`<sup>Required</sup> <a name="ManagementCluster" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.managementCluster"></a>

```go
ManagementCluster VmwarePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

management_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#management_cluster VmwarePrivateCloud#management_cluster}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#name VmwarePrivateCloud#name}.

---

##### `NetworkSubnetCidr`<sup>Required</sup> <a name="NetworkSubnetCidr" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.networkSubnetCidr"></a>

```go
NetworkSubnetCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#id VmwarePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternetConnectionEnabled`<sup>Optional</sup> <a name="InternetConnectionEnabled" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.internetConnectionEnabled"></a>

```go
InternetConnectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}.

---

##### `NsxtPassword`<sup>Optional</sup> <a name="NsxtPassword" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.nsxtPassword"></a>

```go
NsxtPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#tags VmwarePrivateCloud#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.timeouts"></a>

```go
Timeouts VmwarePrivateCloudTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#timeouts VmwarePrivateCloud#timeouts}

---

##### `VcenterPassword`<sup>Optional</sup> <a name="VcenterPassword" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.vcenterPassword"></a>

```go
VcenterPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}.

---

### VmwarePrivateCloudManagementCluster <a name="VmwarePrivateCloudManagementCluster" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

&vmwareprivatecloud.VmwarePrivateCloudManagementCluster {
	Size: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#size VmwarePrivateCloud#size}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#size VmwarePrivateCloud#size}.

---

### VmwarePrivateCloudTimeouts <a name="VmwarePrivateCloudTimeouts" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

&vmwareprivatecloud.VmwarePrivateCloudTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#create VmwarePrivateCloud#create}. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#delete VmwarePrivateCloud#delete}. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#read VmwarePrivateCloud#read}. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#update VmwarePrivateCloud#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#create VmwarePrivateCloud#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#delete VmwarePrivateCloud#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#read VmwarePrivateCloud#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vmware_private_cloud#update VmwarePrivateCloud#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwarePrivateCloudCircuitList <a name="VmwarePrivateCloudCircuitList" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

vmwareprivatecloud.NewVmwarePrivateCloudCircuitList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VmwarePrivateCloudCircuitList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.get"></a>

```go
func Get(index *f64) VmwarePrivateCloudCircuitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VmwarePrivateCloudCircuitOutputReference <a name="VmwarePrivateCloudCircuitOutputReference" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

vmwareprivatecloud.NewVmwarePrivateCloudCircuitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VmwarePrivateCloudCircuitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRouteId">ExpressRouteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRoutePrivatePeeringId">ExpressRoutePrivatePeeringId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.primarySubnetCidr">PrimarySubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.secondarySubnetCidr">SecondarySubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit">VmwarePrivateCloudCircuit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressRouteId`<sup>Required</sup> <a name="ExpressRouteId" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRouteId"></a>

```go
func ExpressRouteId() *string
```

- *Type:* *string

---

##### `ExpressRoutePrivatePeeringId`<sup>Required</sup> <a name="ExpressRoutePrivatePeeringId" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRoutePrivatePeeringId"></a>

```go
func ExpressRoutePrivatePeeringId() *string
```

- *Type:* *string

---

##### `PrimarySubnetCidr`<sup>Required</sup> <a name="PrimarySubnetCidr" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.primarySubnetCidr"></a>

```go
func PrimarySubnetCidr() *string
```

- *Type:* *string

---

##### `SecondarySubnetCidr`<sup>Required</sup> <a name="SecondarySubnetCidr" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.secondarySubnetCidr"></a>

```go
func SecondarySubnetCidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.internalValue"></a>

```go
func InternalValue() VmwarePrivateCloudCircuit
```

- *Type:* <a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit">VmwarePrivateCloudCircuit</a>

---


### VmwarePrivateCloudManagementClusterOutputReference <a name="VmwarePrivateCloudManagementClusterOutputReference" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

vmwareprivatecloud.NewVmwarePrivateCloudManagementClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VmwarePrivateCloudManagementClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() VmwarePrivateCloudManagementCluster
```

- *Type:* <a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

---


### VmwarePrivateCloudTimeoutsOutputReference <a name="VmwarePrivateCloudTimeoutsOutputReference" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/vmwareprivatecloud"

vmwareprivatecloud.NewVmwarePrivateCloudTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VmwarePrivateCloudTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



