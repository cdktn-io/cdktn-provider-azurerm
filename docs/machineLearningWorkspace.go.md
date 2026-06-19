# `machineLearningWorkspace` Submodule <a name="`machineLearningWorkspace` Submodule" id="@cdktn/provider-azurerm.machineLearningWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningWorkspace <a name="MachineLearningWorkspace" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace azurerm_machine_learning_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

machinelearningworkspace.NewMachineLearningWorkspace(scope Construct, id *string, config MachineLearningWorkspaceConfig) MachineLearningWorkspace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig">MachineLearningWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig">MachineLearningWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putFeatureStore">PutFeatureStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putManagedNetwork">PutManagedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putServerlessCompute">PutServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetContainerRegistryId">ResetContainerRegistryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetFeatureStore">ResetFeatureStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetHighBusinessImpact">ResetHighBusinessImpact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetImageBuildComputeName">ResetImageBuildComputeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetManagedNetwork">ResetManagedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetPrimaryUserAssignedIdentity">ResetPrimaryUserAssignedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetServerlessCompute">ResetServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetServiceSideEncryptionEnabled">ResetServiceSideEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetSkuName">ResetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetStorageAccountAccessType">ResetStorageAccountAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetV1LegacyModeEnabled">ResetV1LegacyModeEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putEncryption"></a>

```go
func PutEncryption(value MachineLearningWorkspaceEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a>

---

##### `PutFeatureStore` <a name="PutFeatureStore" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putFeatureStore"></a>

```go
func PutFeatureStore(value MachineLearningWorkspaceFeatureStore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putFeatureStore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putIdentity"></a>

```go
func PutIdentity(value MachineLearningWorkspaceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a>

---

##### `PutManagedNetwork` <a name="PutManagedNetwork" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putManagedNetwork"></a>

```go
func PutManagedNetwork(value MachineLearningWorkspaceManagedNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putManagedNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a>

---

##### `PutServerlessCompute` <a name="PutServerlessCompute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putServerlessCompute"></a>

```go
func PutServerlessCompute(value MachineLearningWorkspaceServerlessCompute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putServerlessCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putTimeouts"></a>

```go
func PutTimeouts(value MachineLearningWorkspaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a>

---

##### `ResetContainerRegistryId` <a name="ResetContainerRegistryId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetContainerRegistryId"></a>

```go
func ResetContainerRegistryId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetFeatureStore` <a name="ResetFeatureStore" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetFeatureStore"></a>

```go
func ResetFeatureStore()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetFriendlyName"></a>

```go
func ResetFriendlyName()
```

##### `ResetHighBusinessImpact` <a name="ResetHighBusinessImpact" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetHighBusinessImpact"></a>

```go
func ResetHighBusinessImpact()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetId"></a>

```go
func ResetId()
```

##### `ResetImageBuildComputeName` <a name="ResetImageBuildComputeName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetImageBuildComputeName"></a>

```go
func ResetImageBuildComputeName()
```

##### `ResetKind` <a name="ResetKind" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetKind"></a>

```go
func ResetKind()
```

##### `ResetManagedNetwork` <a name="ResetManagedNetwork" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetManagedNetwork"></a>

```go
func ResetManagedNetwork()
```

##### `ResetPrimaryUserAssignedIdentity` <a name="ResetPrimaryUserAssignedIdentity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetPrimaryUserAssignedIdentity"></a>

```go
func ResetPrimaryUserAssignedIdentity()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetServerlessCompute` <a name="ResetServerlessCompute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetServerlessCompute"></a>

```go
func ResetServerlessCompute()
```

##### `ResetServiceSideEncryptionEnabled` <a name="ResetServiceSideEncryptionEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetServiceSideEncryptionEnabled"></a>

```go
func ResetServiceSideEncryptionEnabled()
```

##### `ResetSkuName` <a name="ResetSkuName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetSkuName"></a>

```go
func ResetSkuName()
```

##### `ResetStorageAccountAccessType` <a name="ResetStorageAccountAccessType" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetStorageAccountAccessType"></a>

```go
func ResetStorageAccountAccessType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetV1LegacyModeEnabled` <a name="ResetV1LegacyModeEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetV1LegacyModeEnabled"></a>

```go
func ResetV1LegacyModeEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MachineLearningWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

machinelearningworkspace.MachineLearningWorkspace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

machinelearningworkspace.MachineLearningWorkspace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

machinelearningworkspace.MachineLearningWorkspace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

machinelearningworkspace.MachineLearningWorkspace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MachineLearningWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MachineLearningWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MachineLearningWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MachineLearningWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.discoveryUrl">DiscoveryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference">MachineLearningWorkspaceEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.featureStore">FeatureStore</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference">MachineLearningWorkspaceFeatureStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference">MachineLearningWorkspaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.managedNetwork">ManagedNetwork</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference">MachineLearningWorkspaceManagedNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serverlessCompute">ServerlessCompute</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference">MachineLearningWorkspaceServerlessComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference">MachineLearningWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.applicationInsightsIdInput">ApplicationInsightsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.containerRegistryIdInput">ContainerRegistryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.encryptionInput">EncryptionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.featureStoreInput">FeatureStoreInput</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.highBusinessImpactInput">HighBusinessImpactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.imageBuildComputeNameInput">ImageBuildComputeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.managedNetworkInput">ManagedNetworkInput</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.primaryUserAssignedIdentityInput">PrimaryUserAssignedIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serverlessComputeInput">ServerlessComputeInput</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serviceSideEncryptionEnabledInput">ServiceSideEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountAccessTypeInput">StorageAccountAccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.v1LegacyModeEnabledInput">V1LegacyModeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.applicationInsightsId">ApplicationInsightsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.containerRegistryId">ContainerRegistryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.highBusinessImpact">HighBusinessImpact</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.imageBuildComputeName">ImageBuildComputeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.primaryUserAssignedIdentity">PrimaryUserAssignedIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serviceSideEncryptionEnabled">ServiceSideEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountAccessType">StorageAccountAccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.v1LegacyModeEnabled">V1LegacyModeEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.discoveryUrl"></a>

```go
func DiscoveryUrl() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.encryption"></a>

```go
func Encryption() MachineLearningWorkspaceEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference">MachineLearningWorkspaceEncryptionOutputReference</a>

---

##### `FeatureStore`<sup>Required</sup> <a name="FeatureStore" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.featureStore"></a>

```go
func FeatureStore() MachineLearningWorkspaceFeatureStoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference">MachineLearningWorkspaceFeatureStoreOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.identity"></a>

```go
func Identity() MachineLearningWorkspaceIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference">MachineLearningWorkspaceIdentityOutputReference</a>

---

##### `ManagedNetwork`<sup>Required</sup> <a name="ManagedNetwork" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.managedNetwork"></a>

```go
func ManagedNetwork() MachineLearningWorkspaceManagedNetworkOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference">MachineLearningWorkspaceManagedNetworkOutputReference</a>

---

##### `ServerlessCompute`<sup>Required</sup> <a name="ServerlessCompute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serverlessCompute"></a>

```go
func ServerlessCompute() MachineLearningWorkspaceServerlessComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference">MachineLearningWorkspaceServerlessComputeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.timeouts"></a>

```go
func Timeouts() MachineLearningWorkspaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference">MachineLearningWorkspaceTimeoutsOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `ApplicationInsightsIdInput`<sup>Optional</sup> <a name="ApplicationInsightsIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.applicationInsightsIdInput"></a>

```go
func ApplicationInsightsIdInput() *string
```

- *Type:* *string

---

##### `ContainerRegistryIdInput`<sup>Optional</sup> <a name="ContainerRegistryIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.containerRegistryIdInput"></a>

```go
func ContainerRegistryIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.encryptionInput"></a>

```go
func EncryptionInput() MachineLearningWorkspaceEncryption
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a>

---

##### `FeatureStoreInput`<sup>Optional</sup> <a name="FeatureStoreInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.featureStoreInput"></a>

```go
func FeatureStoreInput() MachineLearningWorkspaceFeatureStore
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a>

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyNameInput"></a>

```go
func FriendlyNameInput() *string
```

- *Type:* *string

---

##### `HighBusinessImpactInput`<sup>Optional</sup> <a name="HighBusinessImpactInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.highBusinessImpactInput"></a>

```go
func HighBusinessImpactInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.identityInput"></a>

```go
func IdentityInput() MachineLearningWorkspaceIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageBuildComputeNameInput`<sup>Optional</sup> <a name="ImageBuildComputeNameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.imageBuildComputeNameInput"></a>

```go
func ImageBuildComputeNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedNetworkInput`<sup>Optional</sup> <a name="ManagedNetworkInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.managedNetworkInput"></a>

```go
func ManagedNetworkInput() MachineLearningWorkspaceManagedNetwork
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryUserAssignedIdentityInput`<sup>Optional</sup> <a name="PrimaryUserAssignedIdentityInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.primaryUserAssignedIdentityInput"></a>

```go
func PrimaryUserAssignedIdentityInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServerlessComputeInput`<sup>Optional</sup> <a name="ServerlessComputeInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serverlessComputeInput"></a>

```go
func ServerlessComputeInput() MachineLearningWorkspaceServerlessCompute
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a>

---

##### `ServiceSideEncryptionEnabledInput`<sup>Optional</sup> <a name="ServiceSideEncryptionEnabledInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serviceSideEncryptionEnabledInput"></a>

```go
func ServiceSideEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `StorageAccountAccessTypeInput`<sup>Optional</sup> <a name="StorageAccountAccessTypeInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountAccessTypeInput"></a>

```go
func StorageAccountAccessTypeInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `V1LegacyModeEnabledInput`<sup>Optional</sup> <a name="V1LegacyModeEnabledInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.v1LegacyModeEnabledInput"></a>

```go
func V1LegacyModeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationInsightsId`<sup>Required</sup> <a name="ApplicationInsightsId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.applicationInsightsId"></a>

```go
func ApplicationInsightsId() *string
```

- *Type:* *string

---

##### `ContainerRegistryId`<sup>Required</sup> <a name="ContainerRegistryId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.containerRegistryId"></a>

```go
func ContainerRegistryId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `HighBusinessImpact`<sup>Required</sup> <a name="HighBusinessImpact" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.highBusinessImpact"></a>

```go
func HighBusinessImpact() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageBuildComputeName`<sup>Required</sup> <a name="ImageBuildComputeName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.imageBuildComputeName"></a>

```go
func ImageBuildComputeName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrimaryUserAssignedIdentity`<sup>Required</sup> <a name="PrimaryUserAssignedIdentity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.primaryUserAssignedIdentity"></a>

```go
func PrimaryUserAssignedIdentity() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServiceSideEncryptionEnabled`<sup>Required</sup> <a name="ServiceSideEncryptionEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serviceSideEncryptionEnabled"></a>

```go
func ServiceSideEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `StorageAccountAccessType`<sup>Required</sup> <a name="StorageAccountAccessType" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountAccessType"></a>

```go
func StorageAccountAccessType() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `V1LegacyModeEnabled`<sup>Required</sup> <a name="V1LegacyModeEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.v1LegacyModeEnabled"></a>

```go
func V1LegacyModeEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningWorkspaceConfig <a name="MachineLearningWorkspaceConfig" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

&machinelearningworkspace.MachineLearningWorkspaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationInsightsId: *string,
	Identity: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.machineLearningWorkspace.MachineLearningWorkspaceIdentity,
	KeyVaultId: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	StorageAccountId: *string,
	ContainerRegistryId: *string,
	Description: *string,
	Encryption: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.machineLearningWorkspace.MachineLearningWorkspaceEncryption,
	FeatureStore: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore,
	FriendlyName: *string,
	HighBusinessImpact: interface{},
	Id: *string,
	ImageBuildComputeName: *string,
	Kind: *string,
	ManagedNetwork: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork,
	PrimaryUserAssignedIdentity: *string,
	PublicNetworkAccessEnabled: interface{},
	ServerlessCompute: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute,
	ServiceSideEncryptionEnabled: interface{},
	SkuName: *string,
	StorageAccountAccessType: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.machineLearningWorkspace.MachineLearningWorkspaceTimeouts,
	V1LegacyModeEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.applicationInsightsId">ApplicationInsightsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#application_insights_id MachineLearningWorkspace#application_insights_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#location MachineLearningWorkspace#location}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#name MachineLearningWorkspace#name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#resource_group_name MachineLearningWorkspace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#storage_account_id MachineLearningWorkspace#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.containerRegistryId">ContainerRegistryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#container_registry_id MachineLearningWorkspace#container_registry_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#description MachineLearningWorkspace#description}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a></code> | encryption block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.featureStore">FeatureStore</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a></code> | feature_store block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#friendly_name MachineLearningWorkspace#friendly_name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.highBusinessImpact">HighBusinessImpact</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#high_business_impact MachineLearningWorkspace#high_business_impact}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#id MachineLearningWorkspace#id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.imageBuildComputeName">ImageBuildComputeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#image_build_compute_name MachineLearningWorkspace#image_build_compute_name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#kind MachineLearningWorkspace#kind}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.managedNetwork">ManagedNetwork</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a></code> | managed_network block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.primaryUserAssignedIdentity">PrimaryUserAssignedIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#primary_user_assigned_identity MachineLearningWorkspace#primary_user_assigned_identity}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#public_network_access_enabled MachineLearningWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.serverlessCompute">ServerlessCompute</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a></code> | serverless_compute block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.serviceSideEncryptionEnabled">ServiceSideEncryptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#service_side_encryption_enabled MachineLearningWorkspace#service_side_encryption_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#sku_name MachineLearningWorkspace#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.storageAccountAccessType">StorageAccountAccessType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#storage_account_access_type MachineLearningWorkspace#storage_account_access_type}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#tags MachineLearningWorkspace#tags}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.v1LegacyModeEnabled">V1LegacyModeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#v1_legacy_mode_enabled MachineLearningWorkspace#v1_legacy_mode_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationInsightsId`<sup>Required</sup> <a name="ApplicationInsightsId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.applicationInsightsId"></a>

```go
ApplicationInsightsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#application_insights_id MachineLearningWorkspace#application_insights_id}.

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.identity"></a>

```go
Identity MachineLearningWorkspaceIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#identity MachineLearningWorkspace#identity}

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#location MachineLearningWorkspace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#name MachineLearningWorkspace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#resource_group_name MachineLearningWorkspace#resource_group_name}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#storage_account_id MachineLearningWorkspace#storage_account_id}.

---

##### `ContainerRegistryId`<sup>Optional</sup> <a name="ContainerRegistryId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.containerRegistryId"></a>

```go
ContainerRegistryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#container_registry_id MachineLearningWorkspace#container_registry_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#description MachineLearningWorkspace#description}.

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.encryption"></a>

```go
Encryption MachineLearningWorkspaceEncryption
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#encryption MachineLearningWorkspace#encryption}

---

##### `FeatureStore`<sup>Optional</sup> <a name="FeatureStore" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.featureStore"></a>

```go
FeatureStore MachineLearningWorkspaceFeatureStore
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a>

feature_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#feature_store MachineLearningWorkspace#feature_store}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#friendly_name MachineLearningWorkspace#friendly_name}.

---

##### `HighBusinessImpact`<sup>Optional</sup> <a name="HighBusinessImpact" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.highBusinessImpact"></a>

```go
HighBusinessImpact interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#high_business_impact MachineLearningWorkspace#high_business_impact}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#id MachineLearningWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageBuildComputeName`<sup>Optional</sup> <a name="ImageBuildComputeName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.imageBuildComputeName"></a>

```go
ImageBuildComputeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#image_build_compute_name MachineLearningWorkspace#image_build_compute_name}.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#kind MachineLearningWorkspace#kind}.

---

##### `ManagedNetwork`<sup>Optional</sup> <a name="ManagedNetwork" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.managedNetwork"></a>

```go
ManagedNetwork MachineLearningWorkspaceManagedNetwork
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a>

managed_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#managed_network MachineLearningWorkspace#managed_network}

---

##### `PrimaryUserAssignedIdentity`<sup>Optional</sup> <a name="PrimaryUserAssignedIdentity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.primaryUserAssignedIdentity"></a>

```go
PrimaryUserAssignedIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#primary_user_assigned_identity MachineLearningWorkspace#primary_user_assigned_identity}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#public_network_access_enabled MachineLearningWorkspace#public_network_access_enabled}.

---

##### `ServerlessCompute`<sup>Optional</sup> <a name="ServerlessCompute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.serverlessCompute"></a>

```go
ServerlessCompute MachineLearningWorkspaceServerlessCompute
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a>

serverless_compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#serverless_compute MachineLearningWorkspace#serverless_compute}

---

##### `ServiceSideEncryptionEnabled`<sup>Optional</sup> <a name="ServiceSideEncryptionEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.serviceSideEncryptionEnabled"></a>

```go
ServiceSideEncryptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#service_side_encryption_enabled MachineLearningWorkspace#service_side_encryption_enabled}.

---

##### `SkuName`<sup>Optional</sup> <a name="SkuName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#sku_name MachineLearningWorkspace#sku_name}.

---

##### `StorageAccountAccessType`<sup>Optional</sup> <a name="StorageAccountAccessType" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.storageAccountAccessType"></a>

```go
StorageAccountAccessType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#storage_account_access_type MachineLearningWorkspace#storage_account_access_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#tags MachineLearningWorkspace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.timeouts"></a>

```go
Timeouts MachineLearningWorkspaceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#timeouts MachineLearningWorkspace#timeouts}

---

##### `V1LegacyModeEnabled`<sup>Optional</sup> <a name="V1LegacyModeEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.v1LegacyModeEnabled"></a>

```go
V1LegacyModeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#v1_legacy_mode_enabled MachineLearningWorkspace#v1_legacy_mode_enabled}.

---

### MachineLearningWorkspaceEncryption <a name="MachineLearningWorkspaceEncryption" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

&machinelearningworkspace.MachineLearningWorkspaceEncryption {
	KeyId: *string,
	KeyVaultId: *string,
	UserAssignedIdentityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.keyId">KeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#key_id MachineLearningWorkspace#key_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#user_assigned_identity_id MachineLearningWorkspace#user_assigned_identity_id}. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#key_id MachineLearningWorkspace#key_id}.

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}.

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.userAssignedIdentityId"></a>

```go
UserAssignedIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#user_assigned_identity_id MachineLearningWorkspace#user_assigned_identity_id}.

---

### MachineLearningWorkspaceFeatureStore <a name="MachineLearningWorkspaceFeatureStore" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

&machinelearningworkspace.MachineLearningWorkspaceFeatureStore {
	ComputerSparkRuntimeVersion: *string,
	OfflineConnectionName: *string,
	OnlineConnectionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.computerSparkRuntimeVersion">ComputerSparkRuntimeVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#computer_spark_runtime_version MachineLearningWorkspace#computer_spark_runtime_version}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.offlineConnectionName">OfflineConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#offline_connection_name MachineLearningWorkspace#offline_connection_name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.onlineConnectionName">OnlineConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#online_connection_name MachineLearningWorkspace#online_connection_name}. |

---

##### `ComputerSparkRuntimeVersion`<sup>Optional</sup> <a name="ComputerSparkRuntimeVersion" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.computerSparkRuntimeVersion"></a>

```go
ComputerSparkRuntimeVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#computer_spark_runtime_version MachineLearningWorkspace#computer_spark_runtime_version}.

---

##### `OfflineConnectionName`<sup>Optional</sup> <a name="OfflineConnectionName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.offlineConnectionName"></a>

```go
OfflineConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#offline_connection_name MachineLearningWorkspace#offline_connection_name}.

---

##### `OnlineConnectionName`<sup>Optional</sup> <a name="OnlineConnectionName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.onlineConnectionName"></a>

```go
OnlineConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#online_connection_name MachineLearningWorkspace#online_connection_name}.

---

### MachineLearningWorkspaceIdentity <a name="MachineLearningWorkspaceIdentity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

&machinelearningworkspace.MachineLearningWorkspaceIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#type MachineLearningWorkspace#type}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#identity_ids MachineLearningWorkspace#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#type MachineLearningWorkspace#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#identity_ids MachineLearningWorkspace#identity_ids}.

---

### MachineLearningWorkspaceManagedNetwork <a name="MachineLearningWorkspaceManagedNetwork" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

&machinelearningworkspace.MachineLearningWorkspaceManagedNetwork {
	IsolationMode: *string,
	ProvisionOnCreationEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.property.isolationMode">IsolationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#isolation_mode MachineLearningWorkspace#isolation_mode}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.property.provisionOnCreationEnabled">ProvisionOnCreationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#provision_on_creation_enabled MachineLearningWorkspace#provision_on_creation_enabled}. |

---

##### `IsolationMode`<sup>Optional</sup> <a name="IsolationMode" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.property.isolationMode"></a>

```go
IsolationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#isolation_mode MachineLearningWorkspace#isolation_mode}.

---

##### `ProvisionOnCreationEnabled`<sup>Optional</sup> <a name="ProvisionOnCreationEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.property.provisionOnCreationEnabled"></a>

```go
ProvisionOnCreationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#provision_on_creation_enabled MachineLearningWorkspace#provision_on_creation_enabled}.

---

### MachineLearningWorkspaceServerlessCompute <a name="MachineLearningWorkspaceServerlessCompute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

&machinelearningworkspace.MachineLearningWorkspaceServerlessCompute {
	PublicIpEnabled: interface{},
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.property.publicIpEnabled">PublicIpEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#public_ip_enabled MachineLearningWorkspace#public_ip_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#subnet_id MachineLearningWorkspace#subnet_id}. |

---

##### `PublicIpEnabled`<sup>Optional</sup> <a name="PublicIpEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.property.publicIpEnabled"></a>

```go
PublicIpEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#public_ip_enabled MachineLearningWorkspace#public_ip_enabled}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#subnet_id MachineLearningWorkspace#subnet_id}.

---

### MachineLearningWorkspaceTimeouts <a name="MachineLearningWorkspaceTimeouts" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

&machinelearningworkspace.MachineLearningWorkspaceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#create MachineLearningWorkspace#create}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#delete MachineLearningWorkspace#delete}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#read MachineLearningWorkspace#read}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#update MachineLearningWorkspace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#create MachineLearningWorkspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#delete MachineLearningWorkspace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#read MachineLearningWorkspace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/machine_learning_workspace#update MachineLearningWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningWorkspaceEncryptionOutputReference <a name="MachineLearningWorkspaceEncryptionOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

machinelearningworkspace.NewMachineLearningWorkspaceEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningWorkspaceEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resetUserAssignedIdentityId"></a>

```go
func ResetUserAssignedIdentityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.userAssignedIdentityIdInput"></a>

```go
func UserAssignedIdentityIdInput() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.userAssignedIdentityId"></a>

```go
func UserAssignedIdentityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningWorkspaceEncryption
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a>

---


### MachineLearningWorkspaceFeatureStoreOutputReference <a name="MachineLearningWorkspaceFeatureStoreOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

machinelearningworkspace.NewMachineLearningWorkspaceFeatureStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningWorkspaceFeatureStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetComputerSparkRuntimeVersion">ResetComputerSparkRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetOfflineConnectionName">ResetOfflineConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetOnlineConnectionName">ResetOnlineConnectionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputerSparkRuntimeVersion` <a name="ResetComputerSparkRuntimeVersion" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetComputerSparkRuntimeVersion"></a>

```go
func ResetComputerSparkRuntimeVersion()
```

##### `ResetOfflineConnectionName` <a name="ResetOfflineConnectionName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetOfflineConnectionName"></a>

```go
func ResetOfflineConnectionName()
```

##### `ResetOnlineConnectionName` <a name="ResetOnlineConnectionName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetOnlineConnectionName"></a>

```go
func ResetOnlineConnectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.computerSparkRuntimeVersionInput">ComputerSparkRuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.offlineConnectionNameInput">OfflineConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.onlineConnectionNameInput">OnlineConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.computerSparkRuntimeVersion">ComputerSparkRuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.offlineConnectionName">OfflineConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.onlineConnectionName">OnlineConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputerSparkRuntimeVersionInput`<sup>Optional</sup> <a name="ComputerSparkRuntimeVersionInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.computerSparkRuntimeVersionInput"></a>

```go
func ComputerSparkRuntimeVersionInput() *string
```

- *Type:* *string

---

##### `OfflineConnectionNameInput`<sup>Optional</sup> <a name="OfflineConnectionNameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.offlineConnectionNameInput"></a>

```go
func OfflineConnectionNameInput() *string
```

- *Type:* *string

---

##### `OnlineConnectionNameInput`<sup>Optional</sup> <a name="OnlineConnectionNameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.onlineConnectionNameInput"></a>

```go
func OnlineConnectionNameInput() *string
```

- *Type:* *string

---

##### `ComputerSparkRuntimeVersion`<sup>Required</sup> <a name="ComputerSparkRuntimeVersion" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.computerSparkRuntimeVersion"></a>

```go
func ComputerSparkRuntimeVersion() *string
```

- *Type:* *string

---

##### `OfflineConnectionName`<sup>Required</sup> <a name="OfflineConnectionName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.offlineConnectionName"></a>

```go
func OfflineConnectionName() *string
```

- *Type:* *string

---

##### `OnlineConnectionName`<sup>Required</sup> <a name="OnlineConnectionName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.onlineConnectionName"></a>

```go
func OnlineConnectionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningWorkspaceFeatureStore
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a>

---


### MachineLearningWorkspaceIdentityOutputReference <a name="MachineLearningWorkspaceIdentityOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

machinelearningworkspace.NewMachineLearningWorkspaceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningWorkspaceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningWorkspaceIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a>

---


### MachineLearningWorkspaceManagedNetworkOutputReference <a name="MachineLearningWorkspaceManagedNetworkOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

machinelearningworkspace.NewMachineLearningWorkspaceManagedNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningWorkspaceManagedNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resetIsolationMode">ResetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resetProvisionOnCreationEnabled">ResetProvisionOnCreationEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsolationMode` <a name="ResetIsolationMode" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resetIsolationMode"></a>

```go
func ResetIsolationMode()
```

##### `ResetProvisionOnCreationEnabled` <a name="ResetProvisionOnCreationEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resetProvisionOnCreationEnabled"></a>

```go
func ResetProvisionOnCreationEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.isolationModeInput">IsolationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.provisionOnCreationEnabledInput">ProvisionOnCreationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.isolationMode">IsolationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.provisionOnCreationEnabled">ProvisionOnCreationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsolationModeInput`<sup>Optional</sup> <a name="IsolationModeInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.isolationModeInput"></a>

```go
func IsolationModeInput() *string
```

- *Type:* *string

---

##### `ProvisionOnCreationEnabledInput`<sup>Optional</sup> <a name="ProvisionOnCreationEnabledInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.provisionOnCreationEnabledInput"></a>

```go
func ProvisionOnCreationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsolationMode`<sup>Required</sup> <a name="IsolationMode" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.isolationMode"></a>

```go
func IsolationMode() *string
```

- *Type:* *string

---

##### `ProvisionOnCreationEnabled`<sup>Required</sup> <a name="ProvisionOnCreationEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.provisionOnCreationEnabled"></a>

```go
func ProvisionOnCreationEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningWorkspaceManagedNetwork
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a>

---


### MachineLearningWorkspaceServerlessComputeOutputReference <a name="MachineLearningWorkspaceServerlessComputeOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

machinelearningworkspace.NewMachineLearningWorkspaceServerlessComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningWorkspaceServerlessComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resetPublicIpEnabled">ResetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPublicIpEnabled` <a name="ResetPublicIpEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resetPublicIpEnabled"></a>

```go
func ResetPublicIpEnabled()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.publicIpEnabledInput">PublicIpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.publicIpEnabled">PublicIpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicIpEnabledInput`<sup>Optional</sup> <a name="PublicIpEnabledInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.publicIpEnabledInput"></a>

```go
func PublicIpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `PublicIpEnabled`<sup>Required</sup> <a name="PublicIpEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.publicIpEnabled"></a>

```go
func PublicIpEnabled() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningWorkspaceServerlessCompute
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a>

---


### MachineLearningWorkspaceTimeoutsOutputReference <a name="MachineLearningWorkspaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/machinelearningworkspace"

machinelearningworkspace.NewMachineLearningWorkspaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningWorkspaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



