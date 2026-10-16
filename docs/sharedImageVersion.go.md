# `sharedImageVersion` Submodule <a name="`sharedImageVersion` Submodule" id="@cdktn/provider-azurerm.sharedImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedImageVersion <a name="SharedImageVersion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version azurerm_shared_image_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersion(scope Construct, id *string, config SharedImageVersionConfig) SharedImageVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig">SharedImageVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig">SharedImageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion">PutTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putUefi">PutUefi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetBlobUri">ResetBlobUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetDeletionOfReplicatedLocationsEnabled">ResetDeletionOfReplicatedLocationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetEndOfLifeDate">ResetEndOfLifeDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetExcludeFromLatest">ResetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetManagedImageId">ResetManagedImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOsDiskSnapshotId">ResetOsDiskSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetReplicationMode">ResetReplicationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetUefi">ResetUefi</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetRegion` <a name="PutTargetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion"></a>

```go
func PutTargetRegion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTargetRegion.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts"></a>

```go
func PutTimeouts(value SharedImageVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

---

##### `PutUefi` <a name="PutUefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putUefi"></a>

```go
func PutUefi(value SharedImageVersionUefi)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.putUefi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

---

##### `ResetBlobUri` <a name="ResetBlobUri" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetBlobUri"></a>

```go
func ResetBlobUri()
```

##### `ResetDeletionOfReplicatedLocationsEnabled` <a name="ResetDeletionOfReplicatedLocationsEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetDeletionOfReplicatedLocationsEnabled"></a>

```go
func ResetDeletionOfReplicatedLocationsEnabled()
```

##### `ResetEndOfLifeDate` <a name="ResetEndOfLifeDate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetEndOfLifeDate"></a>

```go
func ResetEndOfLifeDate()
```

##### `ResetExcludeFromLatest` <a name="ResetExcludeFromLatest" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetExcludeFromLatest"></a>

```go
func ResetExcludeFromLatest()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetManagedImageId` <a name="ResetManagedImageId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetManagedImageId"></a>

```go
func ResetManagedImageId()
```

##### `ResetOsDiskSnapshotId` <a name="ResetOsDiskSnapshotId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetOsDiskSnapshotId"></a>

```go
func ResetOsDiskSnapshotId()
```

##### `ResetReplicationMode` <a name="ResetReplicationMode" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetReplicationMode"></a>

```go
func ResetReplicationMode()
```

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetStorageAccountId"></a>

```go
func ResetStorageAccountId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUefi` <a name="ResetUefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.resetUefi"></a>

```go
func ResetUefi()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SharedImageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.SharedImageVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.SharedImageVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.SharedImageVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.SharedImageVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SharedImageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SharedImageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SharedImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SharedImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegion">TargetRegion</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList">SharedImageVersionTargetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference">SharedImageVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.uefi">Uefi</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference">SharedImageVersionUefiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUriInput">BlobUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabledInput">DeletionOfReplicatedLocationsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDateInput">EndOfLifeDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatestInput">ExcludeFromLatestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryNameInput">GalleryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageIdInput">ManagedImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotIdInput">OsDiskSnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationModeInput">ReplicationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegionInput">TargetRegionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.uefiInput">UefiInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUri">BlobUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabled">DeletionOfReplicatedLocationsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDate">EndOfLifeDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryName">GalleryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageId">ManagedImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotId">OsDiskSnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationMode">ReplicationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegion"></a>

```go
func TargetRegion() SharedImageVersionTargetRegionList
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList">SharedImageVersionTargetRegionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeouts"></a>

```go
func Timeouts() SharedImageVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference">SharedImageVersionTimeoutsOutputReference</a>

---

##### `Uefi`<sup>Required</sup> <a name="Uefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.uefi"></a>

```go
func Uefi() SharedImageVersionUefiOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference">SharedImageVersionUefiOutputReference</a>

---

##### `BlobUriInput`<sup>Optional</sup> <a name="BlobUriInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUriInput"></a>

```go
func BlobUriInput() *string
```

- *Type:* *string

---

##### `DeletionOfReplicatedLocationsEnabledInput`<sup>Optional</sup> <a name="DeletionOfReplicatedLocationsEnabledInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabledInput"></a>

```go
func DeletionOfReplicatedLocationsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EndOfLifeDateInput`<sup>Optional</sup> <a name="EndOfLifeDateInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDateInput"></a>

```go
func EndOfLifeDateInput() *string
```

- *Type:* *string

---

##### `ExcludeFromLatestInput`<sup>Optional</sup> <a name="ExcludeFromLatestInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatestInput"></a>

```go
func ExcludeFromLatestInput() interface{}
```

- *Type:* interface{}

---

##### `GalleryNameInput`<sup>Optional</sup> <a name="GalleryNameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryNameInput"></a>

```go
func GalleryNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedImageIdInput`<sup>Optional</sup> <a name="ManagedImageIdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageIdInput"></a>

```go
func ManagedImageIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsDiskSnapshotIdInput`<sup>Optional</sup> <a name="OsDiskSnapshotIdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotIdInput"></a>

```go
func OsDiskSnapshotIdInput() *string
```

- *Type:* *string

---

##### `ReplicationModeInput`<sup>Optional</sup> <a name="ReplicationModeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationModeInput"></a>

```go
func ReplicationModeInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetRegionInput`<sup>Optional</sup> <a name="TargetRegionInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.targetRegionInput"></a>

```go
func TargetRegionInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UefiInput`<sup>Optional</sup> <a name="UefiInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.uefiInput"></a>

```go
func UefiInput() SharedImageVersionUefi
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

---

##### `BlobUri`<sup>Required</sup> <a name="BlobUri" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.blobUri"></a>

```go
func BlobUri() *string
```

- *Type:* *string

---

##### `DeletionOfReplicatedLocationsEnabled`<sup>Required</sup> <a name="DeletionOfReplicatedLocationsEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.deletionOfReplicatedLocationsEnabled"></a>

```go
func DeletionOfReplicatedLocationsEnabled() interface{}
```

- *Type:* interface{}

---

##### `EndOfLifeDate`<sup>Required</sup> <a name="EndOfLifeDate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.endOfLifeDate"></a>

```go
func EndOfLifeDate() *string
```

- *Type:* *string

---

##### `ExcludeFromLatest`<sup>Required</sup> <a name="ExcludeFromLatest" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.excludeFromLatest"></a>

```go
func ExcludeFromLatest() interface{}
```

- *Type:* interface{}

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.galleryName"></a>

```go
func GalleryName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedImageId`<sup>Required</sup> <a name="ManagedImageId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.managedImageId"></a>

```go
func ManagedImageId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsDiskSnapshotId`<sup>Required</sup> <a name="OsDiskSnapshotId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.osDiskSnapshotId"></a>

```go
func OsDiskSnapshotId() *string
```

- *Type:* *string

---

##### `ReplicationMode`<sup>Required</sup> <a name="ReplicationMode" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.replicationMode"></a>

```go
func ReplicationMode() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SharedImageVersionConfig <a name="SharedImageVersionConfig" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

&sharedimageversion.SharedImageVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GalleryName: *string,
	ImageName: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	TargetRegion: interface{},
	BlobUri: *string,
	DeletionOfReplicatedLocationsEnabled: interface{},
	EndOfLifeDate: *string,
	ExcludeFromLatest: interface{},
	Id: *string,
	ManagedImageId: *string,
	OsDiskSnapshotId: *string,
	ReplicationMode: *string,
	StorageAccountId: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.sharedImageVersion.SharedImageVersionTimeouts,
	Uefi: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.sharedImageVersion.SharedImageVersionUefi,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.galleryName">GalleryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#location SharedImageVersion#location}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.targetRegion">TargetRegion</a></code> | <code>interface{}</code> | target_region block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.blobUri">BlobUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.deletionOfReplicatedLocationsEnabled">DeletionOfReplicatedLocationsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.endOfLifeDate">EndOfLifeDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#id SharedImageVersion#id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.managedImageId">ManagedImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.osDiskSnapshotId">OsDiskSnapshotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.replicationMode">ReplicationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.uefi">Uefi</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a></code> | uefi block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.galleryName"></a>

```go
GalleryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#gallery_name SharedImageVersion#gallery_name}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#image_name SharedImageVersion#image_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#location SharedImageVersion#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#resource_group_name SharedImageVersion#resource_group_name}.

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.targetRegion"></a>

```go
TargetRegion interface{}
```

- *Type:* interface{}

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#target_region SharedImageVersion#target_region}

---

##### `BlobUri`<sup>Optional</sup> <a name="BlobUri" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.blobUri"></a>

```go
BlobUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#blob_uri SharedImageVersion#blob_uri}.

---

##### `DeletionOfReplicatedLocationsEnabled`<sup>Optional</sup> <a name="DeletionOfReplicatedLocationsEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.deletionOfReplicatedLocationsEnabled"></a>

```go
DeletionOfReplicatedLocationsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#deletion_of_replicated_locations_enabled SharedImageVersion#deletion_of_replicated_locations_enabled}.

---

##### `EndOfLifeDate`<sup>Optional</sup> <a name="EndOfLifeDate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.endOfLifeDate"></a>

```go
EndOfLifeDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#end_of_life_date SharedImageVersion#end_of_life_date}.

---

##### `ExcludeFromLatest`<sup>Optional</sup> <a name="ExcludeFromLatest" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.excludeFromLatest"></a>

```go
ExcludeFromLatest interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#exclude_from_latest SharedImageVersion#exclude_from_latest}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#id SharedImageVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedImageId`<sup>Optional</sup> <a name="ManagedImageId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.managedImageId"></a>

```go
ManagedImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#managed_image_id SharedImageVersion#managed_image_id}.

---

##### `OsDiskSnapshotId`<sup>Optional</sup> <a name="OsDiskSnapshotId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.osDiskSnapshotId"></a>

```go
OsDiskSnapshotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#os_disk_snapshot_id SharedImageVersion#os_disk_snapshot_id}.

---

##### `ReplicationMode`<sup>Optional</sup> <a name="ReplicationMode" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.replicationMode"></a>

```go
ReplicationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#replication_mode SharedImageVersion#replication_mode}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#storage_account_id SharedImageVersion#storage_account_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#tags SharedImageVersion#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.timeouts"></a>

```go
Timeouts SharedImageVersionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts">SharedImageVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#timeouts SharedImageVersion#timeouts}

---

##### `Uefi`<sup>Optional</sup> <a name="Uefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionConfig.property.uefi"></a>

```go
Uefi SharedImageVersionUefi
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

uefi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#uefi SharedImageVersion#uefi}

---

### SharedImageVersionTargetRegion <a name="SharedImageVersionTargetRegion" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

&sharedimageversion.SharedImageVersionTargetRegion {
	Name: *string,
	RegionalReplicaCount: *f64,
	DiskEncryptionSetId: *string,
	ExcludeFromLatestEnabled: interface{},
	StorageAccountType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#name SharedImageVersion#name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.regionalReplicaCount">RegionalReplicaCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.excludeFromLatestEnabled">ExcludeFromLatestEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#name SharedImageVersion#name}.

---

##### `RegionalReplicaCount`<sup>Required</sup> <a name="RegionalReplicaCount" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.regionalReplicaCount"></a>

```go
RegionalReplicaCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#regional_replica_count SharedImageVersion#regional_replica_count}.

---

##### `DiskEncryptionSetId`<sup>Optional</sup> <a name="DiskEncryptionSetId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.diskEncryptionSetId"></a>

```go
DiskEncryptionSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#disk_encryption_set_id SharedImageVersion#disk_encryption_set_id}.

---

##### `ExcludeFromLatestEnabled`<sup>Optional</sup> <a name="ExcludeFromLatestEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.excludeFromLatestEnabled"></a>

```go
ExcludeFromLatestEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#exclude_from_latest_enabled SharedImageVersion#exclude_from_latest_enabled}.

---

##### `StorageAccountType`<sup>Optional</sup> <a name="StorageAccountType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegion.property.storageAccountType"></a>

```go
StorageAccountType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#storage_account_type SharedImageVersion#storage_account_type}.

---

### SharedImageVersionTimeouts <a name="SharedImageVersionTimeouts" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

&sharedimageversion.SharedImageVersionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#create SharedImageVersion#create}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#delete SharedImageVersion#delete}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#read SharedImageVersion#read}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#update SharedImageVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#create SharedImageVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#delete SharedImageVersion#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#read SharedImageVersion#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#update SharedImageVersion#update}.

---

### SharedImageVersionUefi <a name="SharedImageVersionUefi" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

&sharedimageversion.SharedImageVersionUefi {
	SignatureTemplateNames: *[]*string,
	AdditionalSignatures: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.property.signatureTemplateNames">SignatureTemplateNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#signature_template_names SharedImageVersion#signature_template_names}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.property.additionalSignatures">AdditionalSignatures</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a></code> | additional_signatures block. |

---

##### `SignatureTemplateNames`<sup>Required</sup> <a name="SignatureTemplateNames" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.property.signatureTemplateNames"></a>

```go
SignatureTemplateNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#signature_template_names SharedImageVersion#signature_template_names}.

---

##### `AdditionalSignatures`<sup>Optional</sup> <a name="AdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi.property.additionalSignatures"></a>

```go
AdditionalSignatures SharedImageVersionUefiAdditionalSignatures
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a>

additional_signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#additional_signatures SharedImageVersion#additional_signatures}

---

### SharedImageVersionUefiAdditionalSignatures <a name="SharedImageVersionUefiAdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

&sharedimageversion.SharedImageVersionUefiAdditionalSignatures {
	Db: interface{},
	Dbx: interface{},
	Kek: interface{},
	Pk: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.db">Db</a></code> | <code>interface{}</code> | db block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.dbx">Dbx</a></code> | <code>interface{}</code> | dbx block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.kek">Kek</a></code> | <code>interface{}</code> | kek block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.pk">Pk</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a></code> | pk block. |

---

##### `Db`<sup>Optional</sup> <a name="Db" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.db"></a>

```go
Db interface{}
```

- *Type:* interface{}

db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#db SharedImageVersion#db}

---

##### `Dbx`<sup>Optional</sup> <a name="Dbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.dbx"></a>

```go
Dbx interface{}
```

- *Type:* interface{}

dbx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#dbx SharedImageVersion#dbx}

---

##### `Kek`<sup>Optional</sup> <a name="Kek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.kek"></a>

```go
Kek interface{}
```

- *Type:* interface{}

kek block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#kek SharedImageVersion#kek}

---

##### `Pk`<sup>Optional</sup> <a name="Pk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures.property.pk"></a>

```go
Pk SharedImageVersionUefiAdditionalSignaturesPk
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a>

pk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#pk SharedImageVersion#pk}

---

### SharedImageVersionUefiAdditionalSignaturesDb <a name="SharedImageVersionUefiAdditionalSignaturesDb" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

&sharedimageversion.SharedImageVersionUefiAdditionalSignaturesDb {
	Type: *string,
	ValuesBase64: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.property.valuesBase64">ValuesBase64</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}.

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDb.property.valuesBase64"></a>

```go
ValuesBase64 *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}.

---

### SharedImageVersionUefiAdditionalSignaturesDbx <a name="SharedImageVersionUefiAdditionalSignaturesDbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

&sharedimageversion.SharedImageVersionUefiAdditionalSignaturesDbx {
	Type: *string,
	ValuesBase64: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.property.valuesBase64">ValuesBase64</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}.

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbx.property.valuesBase64"></a>

```go
ValuesBase64 *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}.

---

### SharedImageVersionUefiAdditionalSignaturesKek <a name="SharedImageVersionUefiAdditionalSignaturesKek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

&sharedimageversion.SharedImageVersionUefiAdditionalSignaturesKek {
	Type: *string,
	ValuesBase64: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.property.valuesBase64">ValuesBase64</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}.

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKek.property.valuesBase64"></a>

```go
ValuesBase64 *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}.

---

### SharedImageVersionUefiAdditionalSignaturesPk <a name="SharedImageVersionUefiAdditionalSignaturesPk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

&sharedimageversion.SharedImageVersionUefiAdditionalSignaturesPk {
	Type: *string,
	ValuesBase64: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.property.valuesBase64">ValuesBase64</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#type SharedImageVersion#type}.

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk.property.valuesBase64"></a>

```go
ValuesBase64 *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.10.0/docs/resources/shared_image_version#values_base64 SharedImageVersion#values_base64}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedImageVersionTargetRegionList <a name="SharedImageVersionTargetRegionList" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersionTargetRegionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SharedImageVersionTargetRegionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get"></a>

```go
func Get(index *f64) SharedImageVersionTargetRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SharedImageVersionTargetRegionOutputReference <a name="SharedImageVersionTargetRegionOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersionTargetRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SharedImageVersionTargetRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetDiskEncryptionSetId">ResetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetExcludeFromLatestEnabled">ResetExcludeFromLatestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetStorageAccountType">ResetStorageAccountType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskEncryptionSetId` <a name="ResetDiskEncryptionSetId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetDiskEncryptionSetId"></a>

```go
func ResetDiskEncryptionSetId()
```

##### `ResetExcludeFromLatestEnabled` <a name="ResetExcludeFromLatestEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetExcludeFromLatestEnabled"></a>

```go
func ResetExcludeFromLatestEnabled()
```

##### `ResetStorageAccountType` <a name="ResetStorageAccountType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.resetStorageAccountType"></a>

```go
func ResetStorageAccountType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetIdInput">DiskEncryptionSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabledInput">ExcludeFromLatestEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCountInput">RegionalReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabled">ExcludeFromLatestEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCount">RegionalReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetIdInput`<sup>Optional</sup> <a name="DiskEncryptionSetIdInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetIdInput"></a>

```go
func DiskEncryptionSetIdInput() *string
```

- *Type:* *string

---

##### `ExcludeFromLatestEnabledInput`<sup>Optional</sup> <a name="ExcludeFromLatestEnabledInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabledInput"></a>

```go
func ExcludeFromLatestEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionalReplicaCountInput`<sup>Optional</sup> <a name="RegionalReplicaCountInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCountInput"></a>

```go
func RegionalReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountTypeInput"></a>

```go
func StorageAccountTypeInput() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.diskEncryptionSetId"></a>

```go
func DiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `ExcludeFromLatestEnabled`<sup>Required</sup> <a name="ExcludeFromLatestEnabled" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.excludeFromLatestEnabled"></a>

```go
func ExcludeFromLatestEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegionalReplicaCount`<sup>Required</sup> <a name="RegionalReplicaCount" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.regionalReplicaCount"></a>

```go
func RegionalReplicaCount() *f64
```

- *Type:* *f64

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.storageAccountType"></a>

```go
func StorageAccountType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTargetRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SharedImageVersionTimeoutsOutputReference <a name="SharedImageVersionTimeoutsOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SharedImageVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SharedImageVersionUefiAdditionalSignaturesDbList <a name="SharedImageVersionUefiAdditionalSignaturesDbList" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersionUefiAdditionalSignaturesDbList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SharedImageVersionUefiAdditionalSignaturesDbList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.get"></a>

```go
func Get(index *f64) SharedImageVersionUefiAdditionalSignaturesDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SharedImageVersionUefiAdditionalSignaturesDbOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesDbOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersionUefiAdditionalSignaturesDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SharedImageVersionUefiAdditionalSignaturesDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.valuesBase64Input">ValuesBase64Input</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.valuesBase64">ValuesBase64</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValuesBase64Input`<sup>Optional</sup> <a name="ValuesBase64Input" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.valuesBase64Input"></a>

```go
func ValuesBase64Input() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.valuesBase64"></a>

```go
func ValuesBase64() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SharedImageVersionUefiAdditionalSignaturesDbxList <a name="SharedImageVersionUefiAdditionalSignaturesDbxList" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersionUefiAdditionalSignaturesDbxList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SharedImageVersionUefiAdditionalSignaturesDbxList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.get"></a>

```go
func Get(index *f64) SharedImageVersionUefiAdditionalSignaturesDbxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SharedImageVersionUefiAdditionalSignaturesDbxOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesDbxOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersionUefiAdditionalSignaturesDbxOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SharedImageVersionUefiAdditionalSignaturesDbxOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.valuesBase64Input">ValuesBase64Input</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.valuesBase64">ValuesBase64</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValuesBase64Input`<sup>Optional</sup> <a name="ValuesBase64Input" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.valuesBase64Input"></a>

```go
func ValuesBase64Input() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.valuesBase64"></a>

```go
func ValuesBase64() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SharedImageVersionUefiAdditionalSignaturesKekList <a name="SharedImageVersionUefiAdditionalSignaturesKekList" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersionUefiAdditionalSignaturesKekList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SharedImageVersionUefiAdditionalSignaturesKekList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.get"></a>

```go
func Get(index *f64) SharedImageVersionUefiAdditionalSignaturesKekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SharedImageVersionUefiAdditionalSignaturesKekOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesKekOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersionUefiAdditionalSignaturesKekOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SharedImageVersionUefiAdditionalSignaturesKekOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.valuesBase64Input">ValuesBase64Input</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.valuesBase64">ValuesBase64</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValuesBase64Input`<sup>Optional</sup> <a name="ValuesBase64Input" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.valuesBase64Input"></a>

```go
func ValuesBase64Input() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.valuesBase64"></a>

```go
func ValuesBase64() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SharedImageVersionUefiAdditionalSignaturesOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersionUefiAdditionalSignaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SharedImageVersionUefiAdditionalSignaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDb">PutDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDbx">PutDbx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putKek">PutKek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putPk">PutPk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetDb">ResetDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetDbx">ResetDbx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetKek">ResetKek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetPk">ResetPk</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDb` <a name="PutDb" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDb"></a>

```go
func PutDb(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDb.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDbx` <a name="PutDbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDbx"></a>

```go
func PutDbx(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putDbx.parameter.value"></a>

- *Type:* interface{}

---

##### `PutKek` <a name="PutKek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putKek"></a>

```go
func PutKek(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putKek.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPk` <a name="PutPk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putPk"></a>

```go
func PutPk(value SharedImageVersionUefiAdditionalSignaturesPk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.putPk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a>

---

##### `ResetDb` <a name="ResetDb" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetDb"></a>

```go
func ResetDb()
```

##### `ResetDbx` <a name="ResetDbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetDbx"></a>

```go
func ResetDbx()
```

##### `ResetKek` <a name="ResetKek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetKek"></a>

```go
func ResetKek()
```

##### `ResetPk` <a name="ResetPk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.resetPk"></a>

```go
func ResetPk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.db">Db</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList">SharedImageVersionUefiAdditionalSignaturesDbList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbx">Dbx</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList">SharedImageVersionUefiAdditionalSignaturesDbxList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.kek">Kek</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList">SharedImageVersionUefiAdditionalSignaturesKekList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.pk">Pk</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference">SharedImageVersionUefiAdditionalSignaturesPkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbInput">DbInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbxInput">DbxInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.kekInput">KekInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.pkInput">PkInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Db`<sup>Required</sup> <a name="Db" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.db"></a>

```go
func Db() SharedImageVersionUefiAdditionalSignaturesDbList
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbList">SharedImageVersionUefiAdditionalSignaturesDbList</a>

---

##### `Dbx`<sup>Required</sup> <a name="Dbx" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbx"></a>

```go
func Dbx() SharedImageVersionUefiAdditionalSignaturesDbxList
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesDbxList">SharedImageVersionUefiAdditionalSignaturesDbxList</a>

---

##### `Kek`<sup>Required</sup> <a name="Kek" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.kek"></a>

```go
func Kek() SharedImageVersionUefiAdditionalSignaturesKekList
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesKekList">SharedImageVersionUefiAdditionalSignaturesKekList</a>

---

##### `Pk`<sup>Required</sup> <a name="Pk" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.pk"></a>

```go
func Pk() SharedImageVersionUefiAdditionalSignaturesPkOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference">SharedImageVersionUefiAdditionalSignaturesPkOutputReference</a>

---

##### `DbInput`<sup>Optional</sup> <a name="DbInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbInput"></a>

```go
func DbInput() interface{}
```

- *Type:* interface{}

---

##### `DbxInput`<sup>Optional</sup> <a name="DbxInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.dbxInput"></a>

```go
func DbxInput() interface{}
```

- *Type:* interface{}

---

##### `KekInput`<sup>Optional</sup> <a name="KekInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.kekInput"></a>

```go
func KekInput() interface{}
```

- *Type:* interface{}

---

##### `PkInput`<sup>Optional</sup> <a name="PkInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.pkInput"></a>

```go
func PkInput() SharedImageVersionUefiAdditionalSignaturesPk
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() SharedImageVersionUefiAdditionalSignatures
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a>

---


### SharedImageVersionUefiAdditionalSignaturesPkOutputReference <a name="SharedImageVersionUefiAdditionalSignaturesPkOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersionUefiAdditionalSignaturesPkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SharedImageVersionUefiAdditionalSignaturesPkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.valuesBase64Input">ValuesBase64Input</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.valuesBase64">ValuesBase64</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValuesBase64Input`<sup>Optional</sup> <a name="ValuesBase64Input" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.valuesBase64Input"></a>

```go
func ValuesBase64Input() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValuesBase64`<sup>Required</sup> <a name="ValuesBase64" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.valuesBase64"></a>

```go
func ValuesBase64() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPkOutputReference.property.internalValue"></a>

```go
func InternalValue() SharedImageVersionUefiAdditionalSignaturesPk
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesPk">SharedImageVersionUefiAdditionalSignaturesPk</a>

---


### SharedImageVersionUefiOutputReference <a name="SharedImageVersionUefiOutputReference" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/sharedimageversion"

sharedimageversion.NewSharedImageVersionUefiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SharedImageVersionUefiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.putAdditionalSignatures">PutAdditionalSignatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resetAdditionalSignatures">ResetAdditionalSignatures</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalSignatures` <a name="PutAdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.putAdditionalSignatures"></a>

```go
func PutAdditionalSignatures(value SharedImageVersionUefiAdditionalSignatures)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.putAdditionalSignatures.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a>

---

##### `ResetAdditionalSignatures` <a name="ResetAdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.resetAdditionalSignatures"></a>

```go
func ResetAdditionalSignatures()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.additionalSignatures">AdditionalSignatures</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference">SharedImageVersionUefiAdditionalSignaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.additionalSignaturesInput">AdditionalSignaturesInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.signatureTemplateNamesInput">SignatureTemplateNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.signatureTemplateNames">SignatureTemplateNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalSignatures`<sup>Required</sup> <a name="AdditionalSignatures" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.additionalSignatures"></a>

```go
func AdditionalSignatures() SharedImageVersionUefiAdditionalSignaturesOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignaturesOutputReference">SharedImageVersionUefiAdditionalSignaturesOutputReference</a>

---

##### `AdditionalSignaturesInput`<sup>Optional</sup> <a name="AdditionalSignaturesInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.additionalSignaturesInput"></a>

```go
func AdditionalSignaturesInput() SharedImageVersionUefiAdditionalSignatures
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiAdditionalSignatures">SharedImageVersionUefiAdditionalSignatures</a>

---

##### `SignatureTemplateNamesInput`<sup>Optional</sup> <a name="SignatureTemplateNamesInput" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.signatureTemplateNamesInput"></a>

```go
func SignatureTemplateNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SignatureTemplateNames`<sup>Required</sup> <a name="SignatureTemplateNames" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.signatureTemplateNames"></a>

```go
func SignatureTemplateNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefiOutputReference.property.internalValue"></a>

```go
func InternalValue() SharedImageVersionUefi
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImageVersion.SharedImageVersionUefi">SharedImageVersionUefi</a>

---



