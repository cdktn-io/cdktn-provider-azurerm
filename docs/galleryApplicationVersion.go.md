# `galleryApplicationVersion` Submodule <a name="`galleryApplicationVersion` Submodule" id="@cdktn/provider-azurerm.galleryApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GalleryApplicationVersion <a name="GalleryApplicationVersion" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version azurerm_gallery_application_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

galleryapplicationversion.NewGalleryApplicationVersion(scope Construct, id *string, config GalleryApplicationVersionConfig) GalleryApplicationVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig">GalleryApplicationVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig">GalleryApplicationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putManageAction">PutManageAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTargetRegion">PutTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetConfigFile">ResetConfigFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEnableHealthCheck">ResetEnableHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEndOfLifeDate">ResetEndOfLifeDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetExcludeFromLatest">ResetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetPackageFile">ResetPackageFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManageAction` <a name="PutManageAction" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putManageAction"></a>

```go
func PutManageAction(value GalleryApplicationVersionManageAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putManageAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putSource"></a>

```go
func PutSource(value GalleryApplicationVersionSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

---

##### `PutTargetRegion` <a name="PutTargetRegion" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTargetRegion"></a>

```go
func PutTargetRegion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTargetRegion.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTimeouts"></a>

```go
func PutTimeouts(value GalleryApplicationVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

---

##### `ResetConfigFile` <a name="ResetConfigFile" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetConfigFile"></a>

```go
func ResetConfigFile()
```

##### `ResetEnableHealthCheck` <a name="ResetEnableHealthCheck" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEnableHealthCheck"></a>

```go
func ResetEnableHealthCheck()
```

##### `ResetEndOfLifeDate` <a name="ResetEndOfLifeDate" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEndOfLifeDate"></a>

```go
func ResetEndOfLifeDate()
```

##### `ResetExcludeFromLatest` <a name="ResetExcludeFromLatest" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetExcludeFromLatest"></a>

```go
func ResetExcludeFromLatest()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetPackageFile` <a name="ResetPackageFile" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetPackageFile"></a>

```go
func ResetPackageFile()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GalleryApplicationVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

galleryapplicationversion.GalleryApplicationVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

galleryapplicationversion.GalleryApplicationVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

galleryapplicationversion.GalleryApplicationVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

galleryapplicationversion.GalleryApplicationVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GalleryApplicationVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GalleryApplicationVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GalleryApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GalleryApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageAction">ManageAction</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference">GalleryApplicationVersionManageActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.source">Source</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference">GalleryApplicationVersionSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegion">TargetRegion</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList">GalleryApplicationVersionTargetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference">GalleryApplicationVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFileInput">ConfigFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheckInput">EnableHealthCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDateInput">EndOfLifeDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatestInput">ExcludeFromLatestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationIdInput">GalleryApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageActionInput">ManageActionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFileInput">PackageFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegionInput">TargetRegionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFile">ConfigFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheck">EnableHealthCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDate">EndOfLifeDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationId">GalleryApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFile">PackageFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManageAction`<sup>Required</sup> <a name="ManageAction" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageAction"></a>

```go
func ManageAction() GalleryApplicationVersionManageActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference">GalleryApplicationVersionManageActionOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.source"></a>

```go
func Source() GalleryApplicationVersionSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference">GalleryApplicationVersionSourceOutputReference</a>

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegion"></a>

```go
func TargetRegion() GalleryApplicationVersionTargetRegionList
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList">GalleryApplicationVersionTargetRegionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeouts"></a>

```go
func Timeouts() GalleryApplicationVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference">GalleryApplicationVersionTimeoutsOutputReference</a>

---

##### `ConfigFileInput`<sup>Optional</sup> <a name="ConfigFileInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFileInput"></a>

```go
func ConfigFileInput() *string
```

- *Type:* *string

---

##### `EnableHealthCheckInput`<sup>Optional</sup> <a name="EnableHealthCheckInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheckInput"></a>

```go
func EnableHealthCheckInput() interface{}
```

- *Type:* interface{}

---

##### `EndOfLifeDateInput`<sup>Optional</sup> <a name="EndOfLifeDateInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDateInput"></a>

```go
func EndOfLifeDateInput() *string
```

- *Type:* *string

---

##### `ExcludeFromLatestInput`<sup>Optional</sup> <a name="ExcludeFromLatestInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatestInput"></a>

```go
func ExcludeFromLatestInput() interface{}
```

- *Type:* interface{}

---

##### `GalleryApplicationIdInput`<sup>Optional</sup> <a name="GalleryApplicationIdInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationIdInput"></a>

```go
func GalleryApplicationIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManageActionInput`<sup>Optional</sup> <a name="ManageActionInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageActionInput"></a>

```go
func ManageActionInput() GalleryApplicationVersionManageAction
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PackageFileInput`<sup>Optional</sup> <a name="PackageFileInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFileInput"></a>

```go
func PackageFileInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.sourceInput"></a>

```go
func SourceInput() GalleryApplicationVersionSource
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetRegionInput`<sup>Optional</sup> <a name="TargetRegionInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegionInput"></a>

```go
func TargetRegionInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigFile`<sup>Required</sup> <a name="ConfigFile" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFile"></a>

```go
func ConfigFile() *string
```

- *Type:* *string

---

##### `EnableHealthCheck`<sup>Required</sup> <a name="EnableHealthCheck" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheck"></a>

```go
func EnableHealthCheck() interface{}
```

- *Type:* interface{}

---

##### `EndOfLifeDate`<sup>Required</sup> <a name="EndOfLifeDate" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDate"></a>

```go
func EndOfLifeDate() *string
```

- *Type:* *string

---

##### `ExcludeFromLatest`<sup>Required</sup> <a name="ExcludeFromLatest" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatest"></a>

```go
func ExcludeFromLatest() interface{}
```

- *Type:* interface{}

---

##### `GalleryApplicationId`<sup>Required</sup> <a name="GalleryApplicationId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationId"></a>

```go
func GalleryApplicationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PackageFile`<sup>Required</sup> <a name="PackageFile" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFile"></a>

```go
func PackageFile() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GalleryApplicationVersionConfig <a name="GalleryApplicationVersionConfig" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

&galleryapplicationversion.GalleryApplicationVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GalleryApplicationId: *string,
	Location: *string,
	ManageAction: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.galleryApplicationVersion.GalleryApplicationVersionManageAction,
	Name: *string,
	Source: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.galleryApplicationVersion.GalleryApplicationVersionSource,
	TargetRegion: interface{},
	ConfigFile: *string,
	EnableHealthCheck: interface{},
	EndOfLifeDate: *string,
	ExcludeFromLatest: interface{},
	Id: *string,
	PackageFile: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.galleryApplicationVersion.GalleryApplicationVersionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.galleryApplicationId">GalleryApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#gallery_application_id GalleryApplicationVersion#gallery_application_id}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#location GalleryApplicationVersion#location}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.manageAction">ManageAction</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | manage_action block. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.targetRegion">TargetRegion</a></code> | <code>interface{}</code> | target_region block. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.configFile">ConfigFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#config_file GalleryApplicationVersion#config_file}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.enableHealthCheck">EnableHealthCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#enable_health_check GalleryApplicationVersion#enable_health_check}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.endOfLifeDate">EndOfLifeDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#end_of_life_date GalleryApplicationVersion#end_of_life_date}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#id GalleryApplicationVersion#id}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.packageFile">PackageFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#package_file GalleryApplicationVersion#package_file}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#tags GalleryApplicationVersion#tags}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GalleryApplicationId`<sup>Required</sup> <a name="GalleryApplicationId" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.galleryApplicationId"></a>

```go
GalleryApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#gallery_application_id GalleryApplicationVersion#gallery_application_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#location GalleryApplicationVersion#location}.

---

##### `ManageAction`<sup>Required</sup> <a name="ManageAction" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.manageAction"></a>

```go
ManageAction GalleryApplicationVersionManageAction
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

manage_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#manage_action GalleryApplicationVersion#manage_action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.source"></a>

```go
Source GalleryApplicationVersionSource
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#source GalleryApplicationVersion#source}

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.targetRegion"></a>

```go
TargetRegion interface{}
```

- *Type:* interface{}

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#target_region GalleryApplicationVersion#target_region}

---

##### `ConfigFile`<sup>Optional</sup> <a name="ConfigFile" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.configFile"></a>

```go
ConfigFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#config_file GalleryApplicationVersion#config_file}.

---

##### `EnableHealthCheck`<sup>Optional</sup> <a name="EnableHealthCheck" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.enableHealthCheck"></a>

```go
EnableHealthCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#enable_health_check GalleryApplicationVersion#enable_health_check}.

---

##### `EndOfLifeDate`<sup>Optional</sup> <a name="EndOfLifeDate" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.endOfLifeDate"></a>

```go
EndOfLifeDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#end_of_life_date GalleryApplicationVersion#end_of_life_date}.

---

##### `ExcludeFromLatest`<sup>Optional</sup> <a name="ExcludeFromLatest" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.excludeFromLatest"></a>

```go
ExcludeFromLatest interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#id GalleryApplicationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PackageFile`<sup>Optional</sup> <a name="PackageFile" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.packageFile"></a>

```go
PackageFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#package_file GalleryApplicationVersion#package_file}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#tags GalleryApplicationVersion#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.timeouts"></a>

```go
Timeouts GalleryApplicationVersionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#timeouts GalleryApplicationVersion#timeouts}

---

### GalleryApplicationVersionManageAction <a name="GalleryApplicationVersionManageAction" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

&galleryapplicationversion.GalleryApplicationVersionManageAction {
	Install: *string,
	Remove: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.install">Install</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#install GalleryApplicationVersion#install}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.remove">Remove</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#remove GalleryApplicationVersion#remove}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}. |

---

##### `Install`<sup>Required</sup> <a name="Install" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.install"></a>

```go
Install *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#install GalleryApplicationVersion#install}.

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.remove"></a>

```go
Remove *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#remove GalleryApplicationVersion#remove}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}.

---

### GalleryApplicationVersionSource <a name="GalleryApplicationVersionSource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

&galleryapplicationversion.GalleryApplicationVersionSource {
	MediaLink: *string,
	DefaultConfigurationLink: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.mediaLink">MediaLink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#media_link GalleryApplicationVersion#media_link}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.defaultConfigurationLink">DefaultConfigurationLink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#default_configuration_link GalleryApplicationVersion#default_configuration_link}. |

---

##### `MediaLink`<sup>Required</sup> <a name="MediaLink" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.mediaLink"></a>

```go
MediaLink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#media_link GalleryApplicationVersion#media_link}.

---

##### `DefaultConfigurationLink`<sup>Optional</sup> <a name="DefaultConfigurationLink" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.defaultConfigurationLink"></a>

```go
DefaultConfigurationLink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#default_configuration_link GalleryApplicationVersion#default_configuration_link}.

---

### GalleryApplicationVersionTargetRegion <a name="GalleryApplicationVersionTargetRegion" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

&galleryapplicationversion.GalleryApplicationVersionTargetRegion {
	Name: *string,
	RegionalReplicaCount: *f64,
	ExcludeFromLatest: interface{},
	StorageAccountType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.regionalReplicaCount">RegionalReplicaCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#regional_replica_count GalleryApplicationVersion#regional_replica_count}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#storage_account_type GalleryApplicationVersion#storage_account_type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}.

---

##### `RegionalReplicaCount`<sup>Required</sup> <a name="RegionalReplicaCount" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.regionalReplicaCount"></a>

```go
RegionalReplicaCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#regional_replica_count GalleryApplicationVersion#regional_replica_count}.

---

##### `ExcludeFromLatest`<sup>Optional</sup> <a name="ExcludeFromLatest" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.excludeFromLatest"></a>

```go
ExcludeFromLatest interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}.

---

##### `StorageAccountType`<sup>Optional</sup> <a name="StorageAccountType" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.storageAccountType"></a>

```go
StorageAccountType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#storage_account_type GalleryApplicationVersion#storage_account_type}.

---

### GalleryApplicationVersionTimeouts <a name="GalleryApplicationVersionTimeouts" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

&galleryapplicationversion.GalleryApplicationVersionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#create GalleryApplicationVersion#create}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#delete GalleryApplicationVersion#delete}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#read GalleryApplicationVersion#read}. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#create GalleryApplicationVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#delete GalleryApplicationVersion#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#read GalleryApplicationVersion#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GalleryApplicationVersionManageActionOutputReference <a name="GalleryApplicationVersionManageActionOutputReference" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

galleryapplicationversion.NewGalleryApplicationVersionManageActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GalleryApplicationVersionManageActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.installInput">InstallInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.removeInput">RemoveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.install">Install</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.remove">Remove</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstallInput`<sup>Optional</sup> <a name="InstallInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.installInput"></a>

```go
func InstallInput() *string
```

- *Type:* *string

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.removeInput"></a>

```go
func RemoveInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Install`<sup>Required</sup> <a name="Install" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.install"></a>

```go
func Install() *string
```

- *Type:* *string

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.remove"></a>

```go
func Remove() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.internalValue"></a>

```go
func InternalValue() GalleryApplicationVersionManageAction
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

---


### GalleryApplicationVersionSourceOutputReference <a name="GalleryApplicationVersionSourceOutputReference" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

galleryapplicationversion.NewGalleryApplicationVersionSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GalleryApplicationVersionSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resetDefaultConfigurationLink">ResetDefaultConfigurationLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultConfigurationLink` <a name="ResetDefaultConfigurationLink" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resetDefaultConfigurationLink"></a>

```go
func ResetDefaultConfigurationLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLinkInput">DefaultConfigurationLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLinkInput">MediaLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLink">DefaultConfigurationLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLink">MediaLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultConfigurationLinkInput`<sup>Optional</sup> <a name="DefaultConfigurationLinkInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLinkInput"></a>

```go
func DefaultConfigurationLinkInput() *string
```

- *Type:* *string

---

##### `MediaLinkInput`<sup>Optional</sup> <a name="MediaLinkInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLinkInput"></a>

```go
func MediaLinkInput() *string
```

- *Type:* *string

---

##### `DefaultConfigurationLink`<sup>Required</sup> <a name="DefaultConfigurationLink" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLink"></a>

```go
func DefaultConfigurationLink() *string
```

- *Type:* *string

---

##### `MediaLink`<sup>Required</sup> <a name="MediaLink" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLink"></a>

```go
func MediaLink() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GalleryApplicationVersionSource
```

- *Type:* <a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

---


### GalleryApplicationVersionTargetRegionList <a name="GalleryApplicationVersionTargetRegionList" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

galleryapplicationversion.NewGalleryApplicationVersionTargetRegionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GalleryApplicationVersionTargetRegionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.get"></a>

```go
func Get(index *f64) GalleryApplicationVersionTargetRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GalleryApplicationVersionTargetRegionOutputReference <a name="GalleryApplicationVersionTargetRegionOutputReference" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

galleryapplicationversion.NewGalleryApplicationVersionTargetRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GalleryApplicationVersionTargetRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetExcludeFromLatest">ResetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetStorageAccountType">ResetStorageAccountType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeFromLatest` <a name="ResetExcludeFromLatest" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetExcludeFromLatest"></a>

```go
func ResetExcludeFromLatest()
```

##### `ResetStorageAccountType` <a name="ResetStorageAccountType" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetStorageAccountType"></a>

```go
func ResetStorageAccountType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatestInput">ExcludeFromLatestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCountInput">RegionalReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCount">RegionalReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeFromLatestInput`<sup>Optional</sup> <a name="ExcludeFromLatestInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatestInput"></a>

```go
func ExcludeFromLatestInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionalReplicaCountInput`<sup>Optional</sup> <a name="RegionalReplicaCountInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCountInput"></a>

```go
func RegionalReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountTypeInput"></a>

```go
func StorageAccountTypeInput() *string
```

- *Type:* *string

---

##### `ExcludeFromLatest`<sup>Required</sup> <a name="ExcludeFromLatest" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatest"></a>

```go
func ExcludeFromLatest() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegionalReplicaCount`<sup>Required</sup> <a name="RegionalReplicaCount" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCount"></a>

```go
func RegionalReplicaCount() *f64
```

- *Type:* *f64

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountType"></a>

```go
func StorageAccountType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GalleryApplicationVersionTimeoutsOutputReference <a name="GalleryApplicationVersionTimeoutsOutputReference" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/galleryapplicationversion"

galleryapplicationversion.NewGalleryApplicationVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GalleryApplicationVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



