# `sharedImage` Submodule <a name="`sharedImage` Submodule" id="@cdktn/provider-azurerm.sharedImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedImage <a name="SharedImage" id="@cdktn/provider-azurerm.sharedImage.SharedImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image azurerm_shared_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImage.SharedImage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sharedimage"

sharedimage.NewSharedImage(scope Construct, id *string, config SharedImageConfig) SharedImage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig">SharedImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig">SharedImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.putIdentifier">PutIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.putPurchasePlan">PutPurchasePlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetAcceleratedNetworkSupportEnabled">ResetAcceleratedNetworkSupportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetArchitecture">ResetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmEnabled">ResetConfidentialVmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmSupported">ResetConfidentialVmSupported</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetDiskControllerTypeNvmeEnabled">ResetDiskControllerTypeNvmeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetDiskTypesNotAllowed">ResetDiskTypesNotAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetEndOfLifeDate">ResetEndOfLifeDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetEula">ResetEula</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetHibernationEnabled">ResetHibernationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetHyperVGeneration">ResetHyperVGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedMemoryInGb">ResetMaxRecommendedMemoryInGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedVcpuCount">ResetMaxRecommendedVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedMemoryInGb">ResetMinRecommendedMemoryInGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedVcpuCount">ResetMinRecommendedVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetPrivacyStatementUri">ResetPrivacyStatementUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetPurchasePlan">ResetPurchasePlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetReleaseNoteUri">ResetReleaseNoteUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetSpecialized">ResetSpecialized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetTrustedLaunchEnabled">ResetTrustedLaunchEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.resetTrustedLaunchSupported">ResetTrustedLaunchSupported</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImage.SharedImage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.sharedImage.SharedImage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.sharedImage.SharedImage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.sharedImage.SharedImage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.sharedImage.SharedImage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImage.SharedImage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.sharedImage.SharedImage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.sharedImage.SharedImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.sharedImage.SharedImage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.sharedImage.SharedImage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.sharedImage.SharedImage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.sharedImage.SharedImage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sharedImage.SharedImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.sharedImage.SharedImage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.sharedImage.SharedImage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImage.SharedImage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sharedImage.SharedImage.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.sharedImage.SharedImage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImage.SharedImage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.sharedImage.SharedImage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.sharedImage.SharedImage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.sharedImage.SharedImage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.sharedImage.SharedImage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.sharedImage.SharedImage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentifier` <a name="PutIdentifier" id="@cdktn/provider-azurerm.sharedImage.SharedImage.putIdentifier"></a>

```go
func PutIdentifier(value SharedImageIdentifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImage.SharedImage.putIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

---

##### `PutPurchasePlan` <a name="PutPurchasePlan" id="@cdktn/provider-azurerm.sharedImage.SharedImage.putPurchasePlan"></a>

```go
func PutPurchasePlan(value SharedImagePurchasePlan)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImage.SharedImage.putPurchasePlan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.sharedImage.SharedImage.putTimeouts"></a>

```go
func PutTimeouts(value SharedImageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.sharedImage.SharedImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

---

##### `ResetAcceleratedNetworkSupportEnabled` <a name="ResetAcceleratedNetworkSupportEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetAcceleratedNetworkSupportEnabled"></a>

```go
func ResetAcceleratedNetworkSupportEnabled()
```

##### `ResetArchitecture` <a name="ResetArchitecture" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetArchitecture"></a>

```go
func ResetArchitecture()
```

##### `ResetConfidentialVmEnabled` <a name="ResetConfidentialVmEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmEnabled"></a>

```go
func ResetConfidentialVmEnabled()
```

##### `ResetConfidentialVmSupported` <a name="ResetConfidentialVmSupported" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmSupported"></a>

```go
func ResetConfidentialVmSupported()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDiskControllerTypeNvmeEnabled` <a name="ResetDiskControllerTypeNvmeEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetDiskControllerTypeNvmeEnabled"></a>

```go
func ResetDiskControllerTypeNvmeEnabled()
```

##### `ResetDiskTypesNotAllowed` <a name="ResetDiskTypesNotAllowed" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetDiskTypesNotAllowed"></a>

```go
func ResetDiskTypesNotAllowed()
```

##### `ResetEndOfLifeDate` <a name="ResetEndOfLifeDate" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetEndOfLifeDate"></a>

```go
func ResetEndOfLifeDate()
```

##### `ResetEula` <a name="ResetEula" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetEula"></a>

```go
func ResetEula()
```

##### `ResetHibernationEnabled` <a name="ResetHibernationEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetHibernationEnabled"></a>

```go
func ResetHibernationEnabled()
```

##### `ResetHyperVGeneration` <a name="ResetHyperVGeneration" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetHyperVGeneration"></a>

```go
func ResetHyperVGeneration()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxRecommendedMemoryInGb` <a name="ResetMaxRecommendedMemoryInGb" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedMemoryInGb"></a>

```go
func ResetMaxRecommendedMemoryInGb()
```

##### `ResetMaxRecommendedVcpuCount` <a name="ResetMaxRecommendedVcpuCount" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedVcpuCount"></a>

```go
func ResetMaxRecommendedVcpuCount()
```

##### `ResetMinRecommendedMemoryInGb` <a name="ResetMinRecommendedMemoryInGb" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedMemoryInGb"></a>

```go
func ResetMinRecommendedMemoryInGb()
```

##### `ResetMinRecommendedVcpuCount` <a name="ResetMinRecommendedVcpuCount" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedVcpuCount"></a>

```go
func ResetMinRecommendedVcpuCount()
```

##### `ResetPrivacyStatementUri` <a name="ResetPrivacyStatementUri" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetPrivacyStatementUri"></a>

```go
func ResetPrivacyStatementUri()
```

##### `ResetPurchasePlan` <a name="ResetPurchasePlan" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetPurchasePlan"></a>

```go
func ResetPurchasePlan()
```

##### `ResetReleaseNoteUri` <a name="ResetReleaseNoteUri" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetReleaseNoteUri"></a>

```go
func ResetReleaseNoteUri()
```

##### `ResetSpecialized` <a name="ResetSpecialized" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetSpecialized"></a>

```go
func ResetSpecialized()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrustedLaunchEnabled` <a name="ResetTrustedLaunchEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetTrustedLaunchEnabled"></a>

```go
func ResetTrustedLaunchEnabled()
```

##### `ResetTrustedLaunchSupported` <a name="ResetTrustedLaunchSupported" id="@cdktn/provider-azurerm.sharedImage.SharedImage.resetTrustedLaunchSupported"></a>

```go
func ResetTrustedLaunchSupported()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SharedImage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.sharedImage.SharedImage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sharedimage"

sharedimage.SharedImage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sharedImage.SharedImage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.sharedImage.SharedImage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sharedimage"

sharedimage.SharedImage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sharedImage.SharedImage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.sharedImage.SharedImage.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sharedimage"

sharedimage.SharedImage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.sharedImage.SharedImage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.sharedImage.SharedImage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sharedimage"

sharedimage.SharedImage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SharedImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.sharedImage.SharedImage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.sharedImage.SharedImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SharedImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.sharedImage.SharedImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SharedImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.sharedImage.SharedImage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SharedImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.identifier">Identifier</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference">SharedImageIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.purchasePlan">PurchasePlan</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference">SharedImagePurchasePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference">SharedImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabledInput">AcceleratedNetworkSupportEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.architectureInput">ArchitectureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabledInput">ConfidentialVmEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupportedInput">ConfidentialVmSupportedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.diskControllerTypeNvmeEnabledInput">DiskControllerTypeNvmeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowedInput">DiskTypesNotAllowedInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDateInput">EndOfLifeDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.eulaInput">EulaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.galleryNameInput">GalleryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.hibernationEnabledInput">HibernationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.hyperVGenerationInput">HyperVGenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.identifierInput">IdentifierInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGbInput">MaxRecommendedMemoryInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCountInput">MaxRecommendedVcpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGbInput">MinRecommendedMemoryInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCountInput">MinRecommendedVcpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUriInput">PrivacyStatementUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.purchasePlanInput">PurchasePlanInput</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUriInput">ReleaseNoteUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.specializedInput">SpecializedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabledInput">TrustedLaunchEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchSupportedInput">TrustedLaunchSupportedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabled">AcceleratedNetworkSupportEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabled">ConfidentialVmEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupported">ConfidentialVmSupported</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.diskControllerTypeNvmeEnabled">DiskControllerTypeNvmeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowed">DiskTypesNotAllowed</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDate">EndOfLifeDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.eula">Eula</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.galleryName">GalleryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.hibernationEnabled">HibernationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.hyperVGeneration">HyperVGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGb">MaxRecommendedMemoryInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCount">MaxRecommendedVcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGb">MinRecommendedMemoryInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCount">MinRecommendedVcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUri">PrivacyStatementUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUri">ReleaseNoteUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.specialized">Specialized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabled">TrustedLaunchEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchSupported">TrustedLaunchSupported</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.identifier"></a>

```go
func Identifier() SharedImageIdentifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference">SharedImageIdentifierOutputReference</a>

---

##### `PurchasePlan`<sup>Required</sup> <a name="PurchasePlan" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.purchasePlan"></a>

```go
func PurchasePlan() SharedImagePurchasePlanOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference">SharedImagePurchasePlanOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.timeouts"></a>

```go
func Timeouts() SharedImageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference">SharedImageTimeoutsOutputReference</a>

---

##### `AcceleratedNetworkSupportEnabledInput`<sup>Optional</sup> <a name="AcceleratedNetworkSupportEnabledInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabledInput"></a>

```go
func AcceleratedNetworkSupportEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.architectureInput"></a>

```go
func ArchitectureInput() *string
```

- *Type:* *string

---

##### `ConfidentialVmEnabledInput`<sup>Optional</sup> <a name="ConfidentialVmEnabledInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabledInput"></a>

```go
func ConfidentialVmEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialVmSupportedInput`<sup>Optional</sup> <a name="ConfidentialVmSupportedInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupportedInput"></a>

```go
func ConfidentialVmSupportedInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DiskControllerTypeNvmeEnabledInput`<sup>Optional</sup> <a name="DiskControllerTypeNvmeEnabledInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.diskControllerTypeNvmeEnabledInput"></a>

```go
func DiskControllerTypeNvmeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DiskTypesNotAllowedInput`<sup>Optional</sup> <a name="DiskTypesNotAllowedInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowedInput"></a>

```go
func DiskTypesNotAllowedInput() *[]*string
```

- *Type:* *[]*string

---

##### `EndOfLifeDateInput`<sup>Optional</sup> <a name="EndOfLifeDateInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDateInput"></a>

```go
func EndOfLifeDateInput() *string
```

- *Type:* *string

---

##### `EulaInput`<sup>Optional</sup> <a name="EulaInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.eulaInput"></a>

```go
func EulaInput() *string
```

- *Type:* *string

---

##### `GalleryNameInput`<sup>Optional</sup> <a name="GalleryNameInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.galleryNameInput"></a>

```go
func GalleryNameInput() *string
```

- *Type:* *string

---

##### `HibernationEnabledInput`<sup>Optional</sup> <a name="HibernationEnabledInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.hibernationEnabledInput"></a>

```go
func HibernationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HyperVGenerationInput`<sup>Optional</sup> <a name="HyperVGenerationInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.hyperVGenerationInput"></a>

```go
func HyperVGenerationInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.identifierInput"></a>

```go
func IdentifierInput() SharedImageIdentifier
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaxRecommendedMemoryInGbInput`<sup>Optional</sup> <a name="MaxRecommendedMemoryInGbInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGbInput"></a>

```go
func MaxRecommendedMemoryInGbInput() *f64
```

- *Type:* *f64

---

##### `MaxRecommendedVcpuCountInput`<sup>Optional</sup> <a name="MaxRecommendedVcpuCountInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCountInput"></a>

```go
func MaxRecommendedVcpuCountInput() *f64
```

- *Type:* *f64

---

##### `MinRecommendedMemoryInGbInput`<sup>Optional</sup> <a name="MinRecommendedMemoryInGbInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGbInput"></a>

```go
func MinRecommendedMemoryInGbInput() *f64
```

- *Type:* *f64

---

##### `MinRecommendedVcpuCountInput`<sup>Optional</sup> <a name="MinRecommendedVcpuCountInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCountInput"></a>

```go
func MinRecommendedVcpuCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `PrivacyStatementUriInput`<sup>Optional</sup> <a name="PrivacyStatementUriInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUriInput"></a>

```go
func PrivacyStatementUriInput() *string
```

- *Type:* *string

---

##### `PurchasePlanInput`<sup>Optional</sup> <a name="PurchasePlanInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.purchasePlanInput"></a>

```go
func PurchasePlanInput() SharedImagePurchasePlan
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

---

##### `ReleaseNoteUriInput`<sup>Optional</sup> <a name="ReleaseNoteUriInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUriInput"></a>

```go
func ReleaseNoteUriInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SpecializedInput`<sup>Optional</sup> <a name="SpecializedInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.specializedInput"></a>

```go
func SpecializedInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrustedLaunchEnabledInput`<sup>Optional</sup> <a name="TrustedLaunchEnabledInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabledInput"></a>

```go
func TrustedLaunchEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TrustedLaunchSupportedInput`<sup>Optional</sup> <a name="TrustedLaunchSupportedInput" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchSupportedInput"></a>

```go
func TrustedLaunchSupportedInput() interface{}
```

- *Type:* interface{}

---

##### `AcceleratedNetworkSupportEnabled`<sup>Required</sup> <a name="AcceleratedNetworkSupportEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabled"></a>

```go
func AcceleratedNetworkSupportEnabled() interface{}
```

- *Type:* interface{}

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `ConfidentialVmEnabled`<sup>Required</sup> <a name="ConfidentialVmEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabled"></a>

```go
func ConfidentialVmEnabled() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialVmSupported`<sup>Required</sup> <a name="ConfidentialVmSupported" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupported"></a>

```go
func ConfidentialVmSupported() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DiskControllerTypeNvmeEnabled`<sup>Required</sup> <a name="DiskControllerTypeNvmeEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.diskControllerTypeNvmeEnabled"></a>

```go
func DiskControllerTypeNvmeEnabled() interface{}
```

- *Type:* interface{}

---

##### `DiskTypesNotAllowed`<sup>Required</sup> <a name="DiskTypesNotAllowed" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowed"></a>

```go
func DiskTypesNotAllowed() *[]*string
```

- *Type:* *[]*string

---

##### `EndOfLifeDate`<sup>Required</sup> <a name="EndOfLifeDate" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDate"></a>

```go
func EndOfLifeDate() *string
```

- *Type:* *string

---

##### `Eula`<sup>Required</sup> <a name="Eula" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.eula"></a>

```go
func Eula() *string
```

- *Type:* *string

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.galleryName"></a>

```go
func GalleryName() *string
```

- *Type:* *string

---

##### `HibernationEnabled`<sup>Required</sup> <a name="HibernationEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.hibernationEnabled"></a>

```go
func HibernationEnabled() interface{}
```

- *Type:* interface{}

---

##### `HyperVGeneration`<sup>Required</sup> <a name="HyperVGeneration" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.hyperVGeneration"></a>

```go
func HyperVGeneration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaxRecommendedMemoryInGb`<sup>Required</sup> <a name="MaxRecommendedMemoryInGb" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGb"></a>

```go
func MaxRecommendedMemoryInGb() *f64
```

- *Type:* *f64

---

##### `MaxRecommendedVcpuCount`<sup>Required</sup> <a name="MaxRecommendedVcpuCount" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCount"></a>

```go
func MaxRecommendedVcpuCount() *f64
```

- *Type:* *f64

---

##### `MinRecommendedMemoryInGb`<sup>Required</sup> <a name="MinRecommendedMemoryInGb" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGb"></a>

```go
func MinRecommendedMemoryInGb() *f64
```

- *Type:* *f64

---

##### `MinRecommendedVcpuCount`<sup>Required</sup> <a name="MinRecommendedVcpuCount" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCount"></a>

```go
func MinRecommendedVcpuCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `PrivacyStatementUri`<sup>Required</sup> <a name="PrivacyStatementUri" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUri"></a>

```go
func PrivacyStatementUri() *string
```

- *Type:* *string

---

##### `ReleaseNoteUri`<sup>Required</sup> <a name="ReleaseNoteUri" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUri"></a>

```go
func ReleaseNoteUri() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Specialized`<sup>Required</sup> <a name="Specialized" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.specialized"></a>

```go
func Specialized() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TrustedLaunchEnabled`<sup>Required</sup> <a name="TrustedLaunchEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabled"></a>

```go
func TrustedLaunchEnabled() interface{}
```

- *Type:* interface{}

---

##### `TrustedLaunchSupported`<sup>Required</sup> <a name="TrustedLaunchSupported" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchSupported"></a>

```go
func TrustedLaunchSupported() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.sharedImage.SharedImage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SharedImageConfig <a name="SharedImageConfig" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sharedimage"

&sharedimage.SharedImageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GalleryName: *string,
	Identifier: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.sharedImage.SharedImageIdentifier,
	Location: *string,
	Name: *string,
	OsType: *string,
	ResourceGroupName: *string,
	AcceleratedNetworkSupportEnabled: interface{},
	Architecture: *string,
	ConfidentialVmEnabled: interface{},
	ConfidentialVmSupported: interface{},
	Description: *string,
	DiskControllerTypeNvmeEnabled: interface{},
	DiskTypesNotAllowed: *[]*string,
	EndOfLifeDate: *string,
	Eula: *string,
	HibernationEnabled: interface{},
	HyperVGeneration: *string,
	Id: *string,
	MaxRecommendedMemoryInGb: *f64,
	MaxRecommendedVcpuCount: *f64,
	MinRecommendedMemoryInGb: *f64,
	MinRecommendedVcpuCount: *f64,
	PrivacyStatementUri: *string,
	PurchasePlan: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.sharedImage.SharedImagePurchasePlan,
	ReleaseNoteUri: *string,
	Specialized: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.sharedImage.SharedImageTimeouts,
	TrustedLaunchEnabled: interface{},
	TrustedLaunchSupported: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.galleryName">GalleryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#gallery_name SharedImage#gallery_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.identifier">Identifier</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | identifier block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#location SharedImage#location}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#name SharedImage#name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.osType">OsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#os_type SharedImage#os_type}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#resource_group_name SharedImage#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.acceleratedNetworkSupportEnabled">AcceleratedNetworkSupportEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.architecture">Architecture</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#architecture SharedImage#architecture}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmEnabled">ConfidentialVmEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#confidential_vm_enabled SharedImage#confidential_vm_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmSupported">ConfidentialVmSupported</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#confidential_vm_supported SharedImage#confidential_vm_supported}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#description SharedImage#description}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.diskControllerTypeNvmeEnabled">DiskControllerTypeNvmeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#disk_controller_type_nvme_enabled SharedImage#disk_controller_type_nvme_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.diskTypesNotAllowed">DiskTypesNotAllowed</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.endOfLifeDate">EndOfLifeDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#end_of_life_date SharedImage#end_of_life_date}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.eula">Eula</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#eula SharedImage#eula}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.hibernationEnabled">HibernationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#hibernation_enabled SharedImage#hibernation_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.hyperVGeneration">HyperVGeneration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#hyper_v_generation SharedImage#hyper_v_generation}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#id SharedImage#id}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedMemoryInGb">MaxRecommendedMemoryInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedVcpuCount">MaxRecommendedVcpuCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedMemoryInGb">MinRecommendedMemoryInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedVcpuCount">MinRecommendedVcpuCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.privacyStatementUri">PrivacyStatementUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.purchasePlan">PurchasePlan</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | purchase_plan block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.releaseNoteUri">ReleaseNoteUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#release_note_uri SharedImage#release_note_uri}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.specialized">Specialized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#specialized SharedImage#specialized}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#tags SharedImage#tags}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.trustedLaunchEnabled">TrustedLaunchEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.trustedLaunchSupported">TrustedLaunchSupported</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#trusted_launch_supported SharedImage#trusted_launch_supported}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.galleryName"></a>

```go
GalleryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#gallery_name SharedImage#gallery_name}.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.identifier"></a>

```go
Identifier SharedImageIdentifier
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#identifier SharedImage#identifier}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#location SharedImage#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#name SharedImage#name}.

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#os_type SharedImage#os_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#resource_group_name SharedImage#resource_group_name}.

---

##### `AcceleratedNetworkSupportEnabled`<sup>Optional</sup> <a name="AcceleratedNetworkSupportEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.acceleratedNetworkSupportEnabled"></a>

```go
AcceleratedNetworkSupportEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}.

---

##### `Architecture`<sup>Optional</sup> <a name="Architecture" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.architecture"></a>

```go
Architecture *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#architecture SharedImage#architecture}.

---

##### `ConfidentialVmEnabled`<sup>Optional</sup> <a name="ConfidentialVmEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmEnabled"></a>

```go
ConfidentialVmEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#confidential_vm_enabled SharedImage#confidential_vm_enabled}.

---

##### `ConfidentialVmSupported`<sup>Optional</sup> <a name="ConfidentialVmSupported" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmSupported"></a>

```go
ConfidentialVmSupported interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#confidential_vm_supported SharedImage#confidential_vm_supported}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#description SharedImage#description}.

---

##### `DiskControllerTypeNvmeEnabled`<sup>Optional</sup> <a name="DiskControllerTypeNvmeEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.diskControllerTypeNvmeEnabled"></a>

```go
DiskControllerTypeNvmeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#disk_controller_type_nvme_enabled SharedImage#disk_controller_type_nvme_enabled}.

---

##### `DiskTypesNotAllowed`<sup>Optional</sup> <a name="DiskTypesNotAllowed" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.diskTypesNotAllowed"></a>

```go
DiskTypesNotAllowed *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}.

---

##### `EndOfLifeDate`<sup>Optional</sup> <a name="EndOfLifeDate" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.endOfLifeDate"></a>

```go
EndOfLifeDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#end_of_life_date SharedImage#end_of_life_date}.

---

##### `Eula`<sup>Optional</sup> <a name="Eula" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.eula"></a>

```go
Eula *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#eula SharedImage#eula}.

---

##### `HibernationEnabled`<sup>Optional</sup> <a name="HibernationEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.hibernationEnabled"></a>

```go
HibernationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#hibernation_enabled SharedImage#hibernation_enabled}.

---

##### `HyperVGeneration`<sup>Optional</sup> <a name="HyperVGeneration" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.hyperVGeneration"></a>

```go
HyperVGeneration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#hyper_v_generation SharedImage#hyper_v_generation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#id SharedImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxRecommendedMemoryInGb`<sup>Optional</sup> <a name="MaxRecommendedMemoryInGb" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedMemoryInGb"></a>

```go
MaxRecommendedMemoryInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}.

---

##### `MaxRecommendedVcpuCount`<sup>Optional</sup> <a name="MaxRecommendedVcpuCount" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedVcpuCount"></a>

```go
MaxRecommendedVcpuCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}.

---

##### `MinRecommendedMemoryInGb`<sup>Optional</sup> <a name="MinRecommendedMemoryInGb" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedMemoryInGb"></a>

```go
MinRecommendedMemoryInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}.

---

##### `MinRecommendedVcpuCount`<sup>Optional</sup> <a name="MinRecommendedVcpuCount" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedVcpuCount"></a>

```go
MinRecommendedVcpuCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}.

---

##### `PrivacyStatementUri`<sup>Optional</sup> <a name="PrivacyStatementUri" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.privacyStatementUri"></a>

```go
PrivacyStatementUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}.

---

##### `PurchasePlan`<sup>Optional</sup> <a name="PurchasePlan" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.purchasePlan"></a>

```go
PurchasePlan SharedImagePurchasePlan
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

purchase_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#purchase_plan SharedImage#purchase_plan}

---

##### `ReleaseNoteUri`<sup>Optional</sup> <a name="ReleaseNoteUri" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.releaseNoteUri"></a>

```go
ReleaseNoteUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#release_note_uri SharedImage#release_note_uri}.

---

##### `Specialized`<sup>Optional</sup> <a name="Specialized" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.specialized"></a>

```go
Specialized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#specialized SharedImage#specialized}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#tags SharedImage#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.timeouts"></a>

```go
Timeouts SharedImageTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#timeouts SharedImage#timeouts}

---

##### `TrustedLaunchEnabled`<sup>Optional</sup> <a name="TrustedLaunchEnabled" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.trustedLaunchEnabled"></a>

```go
TrustedLaunchEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}.

---

##### `TrustedLaunchSupported`<sup>Optional</sup> <a name="TrustedLaunchSupported" id="@cdktn/provider-azurerm.sharedImage.SharedImageConfig.property.trustedLaunchSupported"></a>

```go
TrustedLaunchSupported interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#trusted_launch_supported SharedImage#trusted_launch_supported}.

---

### SharedImageIdentifier <a name="SharedImageIdentifier" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sharedimage"

&sharedimage.SharedImageIdentifier {
	Offer: *string,
	Publisher: *string,
	Sku: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier.property.offer">Offer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#offer SharedImage#offer}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#publisher SharedImage#publisher}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#sku SharedImage#sku}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier.property.offer"></a>

```go
Offer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#offer SharedImage#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#publisher SharedImage#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#sku SharedImage#sku}.

---

### SharedImagePurchasePlan <a name="SharedImagePurchasePlan" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sharedimage"

&sharedimage.SharedImagePurchasePlan {
	Name: *string,
	Product: *string,
	Publisher: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#name SharedImage#name}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.product">Product</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#product SharedImage#product}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#publisher SharedImage#publisher}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#name SharedImage#name}.

---

##### `Product`<sup>Optional</sup> <a name="Product" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.product"></a>

```go
Product *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#product SharedImage#product}.

---

##### `Publisher`<sup>Optional</sup> <a name="Publisher" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#publisher SharedImage#publisher}.

---

### SharedImageTimeouts <a name="SharedImageTimeouts" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sharedimage"

&sharedimage.SharedImageTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#create SharedImage#create}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#delete SharedImage#delete}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#read SharedImage#read}. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#update SharedImage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#create SharedImage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#delete SharedImage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#read SharedImage#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/shared_image#update SharedImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedImageIdentifierOutputReference <a name="SharedImageIdentifierOutputReference" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sharedimage"

sharedimage.NewSharedImageIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SharedImageIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offerInput">OfferInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offer">Offer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offerInput"></a>

```go
func OfferInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offer"></a>

```go
func Offer() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() SharedImageIdentifier
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

---


### SharedImagePurchasePlanOutputReference <a name="SharedImagePurchasePlanOutputReference" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sharedimage"

sharedimage.NewSharedImagePurchasePlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SharedImagePurchasePlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetPublisher">ResetPublisher</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProduct` <a name="ResetProduct" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetProduct"></a>

```go
func ResetProduct()
```

##### `ResetPublisher` <a name="ResetPublisher" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetPublisher"></a>

```go
func ResetPublisher()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.internalValue"></a>

```go
func InternalValue() SharedImagePurchasePlan
```

- *Type:* <a href="#@cdktn/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

---


### SharedImageTimeoutsOutputReference <a name="SharedImageTimeoutsOutputReference" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/sharedimage"

sharedimage.NewSharedImageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SharedImageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



