# `storageDiscoveryWorkspace` Submodule <a name="`storageDiscoveryWorkspace` Submodule" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDiscoveryWorkspace <a name="StorageDiscoveryWorkspace" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace azurerm_storage_discovery_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storagediscoveryworkspace"

storagediscoveryworkspace.NewStorageDiscoveryWorkspace(scope Construct, id *string, config StorageDiscoveryWorkspaceConfig) StorageDiscoveryWorkspace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig">StorageDiscoveryWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig">StorageDiscoveryWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putScope"></a>

```go
func PutScope(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putScope.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts"></a>

```go
func PutTimeouts(value StorageDiscoveryWorkspaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetId"></a>

```go
func ResetId()
```

##### `ResetSku` <a name="ResetSku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetSku"></a>

```go
func ResetSku()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageDiscoveryWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storagediscoveryworkspace"

storagediscoveryworkspace.StorageDiscoveryWorkspace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storagediscoveryworkspace"

storagediscoveryworkspace.StorageDiscoveryWorkspace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storagediscoveryworkspace"

storagediscoveryworkspace.StorageDiscoveryWorkspace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storagediscoveryworkspace"

storagediscoveryworkspace.StorageDiscoveryWorkspace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StorageDiscoveryWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageDiscoveryWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageDiscoveryWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StorageDiscoveryWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList">StorageDiscoveryWorkspaceScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference">StorageDiscoveryWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scopeInput">ScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRootsInput">WorkspaceRootsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRoots">WorkspaceRoots</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scope"></a>

```go
func Scope() StorageDiscoveryWorkspaceScopeList
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList">StorageDiscoveryWorkspaceScopeList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeouts"></a>

```go
func Timeouts() StorageDiscoveryWorkspaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference">StorageDiscoveryWorkspaceTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scopeInput"></a>

```go
func ScopeInput() interface{}
```

- *Type:* interface{}

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceRootsInput`<sup>Optional</sup> <a name="WorkspaceRootsInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRootsInput"></a>

```go
func WorkspaceRootsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkspaceRoots`<sup>Required</sup> <a name="WorkspaceRoots" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRoots"></a>

```go
func WorkspaceRoots() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDiscoveryWorkspaceConfig <a name="StorageDiscoveryWorkspaceConfig" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storagediscoveryworkspace"

&storagediscoveryworkspace.StorageDiscoveryWorkspaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Scope: interface{},
	WorkspaceRoots: *[]*string,
	Description: *string,
	Id: *string,
	Sku: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#location StorageDiscoveryWorkspace#location}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#name StorageDiscoveryWorkspace#name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_group_name StorageDiscoveryWorkspace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.scope">Scope</a></code> | <code>interface{}</code> | scope block. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.workspaceRoots">WorkspaceRoots</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#workspace_roots StorageDiscoveryWorkspace#workspace_roots}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#description StorageDiscoveryWorkspace#description}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#id StorageDiscoveryWorkspace#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#sku StorageDiscoveryWorkspace#sku}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#location StorageDiscoveryWorkspace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#name StorageDiscoveryWorkspace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_group_name StorageDiscoveryWorkspace#resource_group_name}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.scope"></a>

```go
Scope interface{}
```

- *Type:* interface{}

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#scope StorageDiscoveryWorkspace#scope}

---

##### `WorkspaceRoots`<sup>Required</sup> <a name="WorkspaceRoots" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.workspaceRoots"></a>

```go
WorkspaceRoots *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#workspace_roots StorageDiscoveryWorkspace#workspace_roots}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#description StorageDiscoveryWorkspace#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#id StorageDiscoveryWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#sku StorageDiscoveryWorkspace#sku}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.timeouts"></a>

```go
Timeouts StorageDiscoveryWorkspaceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#timeouts StorageDiscoveryWorkspace#timeouts}

---

### StorageDiscoveryWorkspaceScope <a name="StorageDiscoveryWorkspaceScope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storagediscoveryworkspace"

&storagediscoveryworkspace.StorageDiscoveryWorkspaceScope {
	DisplayName: *string,
	ResourceTypes: *[]*string,
	TagKeysOnly: *[]*string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#display_name StorageDiscoveryWorkspace#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_types StorageDiscoveryWorkspace#resource_types}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tagKeysOnly">TagKeysOnly</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tag_keys_only StorageDiscoveryWorkspace#tag_keys_only}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#display_name StorageDiscoveryWorkspace#display_name}.

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_types StorageDiscoveryWorkspace#resource_types}.

---

##### `TagKeysOnly`<sup>Optional</sup> <a name="TagKeysOnly" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tagKeysOnly"></a>

```go
TagKeysOnly *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tag_keys_only StorageDiscoveryWorkspace#tag_keys_only}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}.

---

### StorageDiscoveryWorkspaceTimeouts <a name="StorageDiscoveryWorkspaceTimeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storagediscoveryworkspace"

&storagediscoveryworkspace.StorageDiscoveryWorkspaceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#create StorageDiscoveryWorkspace#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#delete StorageDiscoveryWorkspace#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#read StorageDiscoveryWorkspace#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#update StorageDiscoveryWorkspace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#create StorageDiscoveryWorkspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#delete StorageDiscoveryWorkspace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#read StorageDiscoveryWorkspace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#update StorageDiscoveryWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageDiscoveryWorkspaceScopeList <a name="StorageDiscoveryWorkspaceScopeList" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storagediscoveryworkspace"

storagediscoveryworkspace.NewStorageDiscoveryWorkspaceScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageDiscoveryWorkspaceScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.get"></a>

```go
func Get(index *f64) StorageDiscoveryWorkspaceScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageDiscoveryWorkspaceScopeOutputReference <a name="StorageDiscoveryWorkspaceScopeOutputReference" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storagediscoveryworkspace"

storagediscoveryworkspace.NewStorageDiscoveryWorkspaceScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageDiscoveryWorkspaceScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTagKeysOnly">ResetTagKeysOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTagKeysOnly` <a name="ResetTagKeysOnly" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTagKeysOnly"></a>

```go
func ResetTagKeysOnly()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnlyInput">TagKeysOnlyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnly">TagKeysOnly</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagKeysOnlyInput`<sup>Optional</sup> <a name="TagKeysOnlyInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnlyInput"></a>

```go
func TagKeysOnlyInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `TagKeysOnly`<sup>Required</sup> <a name="TagKeysOnly" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnly"></a>

```go
func TagKeysOnly() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageDiscoveryWorkspaceTimeoutsOutputReference <a name="StorageDiscoveryWorkspaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/storagediscoveryworkspace"

storagediscoveryworkspace.NewStorageDiscoveryWorkspaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageDiscoveryWorkspaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



