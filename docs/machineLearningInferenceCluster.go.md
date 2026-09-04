# `machineLearningInferenceCluster` Submodule <a name="`machineLearningInferenceCluster` Submodule" id="@cdktn/provider-azurerm.machineLearningInferenceCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningInferenceCluster <a name="MachineLearningInferenceCluster" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster azurerm_machine_learning_inference_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/machinelearninginferencecluster"

machinelearninginferencecluster.NewMachineLearningInferenceCluster(scope Construct, id *string, config MachineLearningInferenceClusterConfig) MachineLearningInferenceCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig">MachineLearningInferenceClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig">MachineLearningInferenceClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl">PutSsl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetClusterPurpose">ResetClusterPurpose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetSsl">ResetSsl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putIdentity"></a>

```go
func PutIdentity(value MachineLearningInferenceClusterIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

---

##### `PutSsl` <a name="PutSsl" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl"></a>

```go
func PutSsl(value MachineLearningInferenceClusterSsl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putSsl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putTimeouts"></a>

```go
func PutTimeouts(value MachineLearningInferenceClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>

---

##### `ResetClusterPurpose` <a name="ResetClusterPurpose" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetClusterPurpose"></a>

```go
func ResetClusterPurpose()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetSsl` <a name="ResetSsl" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetSsl"></a>

```go
func ResetSsl()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MachineLearningInferenceCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/machinelearninginferencecluster"

machinelearninginferencecluster.MachineLearningInferenceCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/machinelearninginferencecluster"

machinelearninginferencecluster.MachineLearningInferenceCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/machinelearninginferencecluster"

machinelearninginferencecluster.MachineLearningInferenceCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/machinelearninginferencecluster"

machinelearninginferencecluster.MachineLearningInferenceCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MachineLearningInferenceCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MachineLearningInferenceCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MachineLearningInferenceCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MachineLearningInferenceCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference">MachineLearningInferenceClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.ssl">Ssl</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference">MachineLearningInferenceClusterSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference">MachineLearningInferenceClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.clusterPurposeInput">ClusterPurposeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.kubernetesClusterIdInput">KubernetesClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.machineLearningWorkspaceIdInput">MachineLearningWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.sslInput">SslInput</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.clusterPurpose">ClusterPurpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.machineLearningWorkspaceId">MachineLearningWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.identity"></a>

```go
func Identity() MachineLearningInferenceClusterIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference">MachineLearningInferenceClusterIdentityOutputReference</a>

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.ssl"></a>

```go
func Ssl() MachineLearningInferenceClusterSslOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference">MachineLearningInferenceClusterSslOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.timeouts"></a>

```go
func Timeouts() MachineLearningInferenceClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference">MachineLearningInferenceClusterTimeoutsOutputReference</a>

---

##### `ClusterPurposeInput`<sup>Optional</sup> <a name="ClusterPurposeInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.clusterPurposeInput"></a>

```go
func ClusterPurposeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.identityInput"></a>

```go
func IdentityInput() MachineLearningInferenceClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesClusterIdInput`<sup>Optional</sup> <a name="KubernetesClusterIdInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.kubernetesClusterIdInput"></a>

```go
func KubernetesClusterIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MachineLearningWorkspaceIdInput`<sup>Optional</sup> <a name="MachineLearningWorkspaceIdInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.machineLearningWorkspaceIdInput"></a>

```go
func MachineLearningWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.sslInput"></a>

```go
func SslInput() MachineLearningInferenceClusterSsl
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterPurpose`<sup>Required</sup> <a name="ClusterPurpose" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.clusterPurpose"></a>

```go
func ClusterPurpose() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.kubernetesClusterId"></a>

```go
func KubernetesClusterId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MachineLearningWorkspaceId`<sup>Required</sup> <a name="MachineLearningWorkspaceId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.machineLearningWorkspaceId"></a>

```go
func MachineLearningWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningInferenceClusterConfig <a name="MachineLearningInferenceClusterConfig" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/machinelearninginferencecluster"

&machinelearninginferencecluster.MachineLearningInferenceClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	KubernetesClusterId: *string,
	Location: *string,
	MachineLearningWorkspaceId: *string,
	Name: *string,
	ClusterPurpose: *string,
	Description: *string,
	Id: *string,
	Identity: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity,
	Ssl: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#kubernetes_cluster_id MachineLearningInferenceCluster#kubernetes_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#location MachineLearningInferenceCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.machineLearningWorkspaceId">MachineLearningWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#machine_learning_workspace_id MachineLearningInferenceCluster#machine_learning_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#name MachineLearningInferenceCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.clusterPurpose">ClusterPurpose</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#cluster_purpose MachineLearningInferenceCluster#cluster_purpose}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#description MachineLearningInferenceCluster#description}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#id MachineLearningInferenceCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.ssl">Ssl</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a></code> | ssl block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#tags MachineLearningInferenceCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.kubernetesClusterId"></a>

```go
KubernetesClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#kubernetes_cluster_id MachineLearningInferenceCluster#kubernetes_cluster_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#location MachineLearningInferenceCluster#location}.

---

##### `MachineLearningWorkspaceId`<sup>Required</sup> <a name="MachineLearningWorkspaceId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.machineLearningWorkspaceId"></a>

```go
MachineLearningWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#machine_learning_workspace_id MachineLearningInferenceCluster#machine_learning_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#name MachineLearningInferenceCluster#name}.

---

##### `ClusterPurpose`<sup>Optional</sup> <a name="ClusterPurpose" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.clusterPurpose"></a>

```go
ClusterPurpose *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#cluster_purpose MachineLearningInferenceCluster#cluster_purpose}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#description MachineLearningInferenceCluster#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#id MachineLearningInferenceCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.identity"></a>

```go
Identity MachineLearningInferenceClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#identity MachineLearningInferenceCluster#identity}

---

##### `Ssl`<sup>Optional</sup> <a name="Ssl" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.ssl"></a>

```go
Ssl MachineLearningInferenceClusterSsl
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

ssl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#ssl MachineLearningInferenceCluster#ssl}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#tags MachineLearningInferenceCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterConfig.property.timeouts"></a>

```go
Timeouts MachineLearningInferenceClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts">MachineLearningInferenceClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#timeouts MachineLearningInferenceCluster#timeouts}

---

### MachineLearningInferenceClusterIdentity <a name="MachineLearningInferenceClusterIdentity" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/machinelearninginferencecluster"

&machinelearninginferencecluster.MachineLearningInferenceClusterIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#type MachineLearningInferenceCluster#type}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#identity_ids MachineLearningInferenceCluster#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#type MachineLearningInferenceCluster#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#identity_ids MachineLearningInferenceCluster#identity_ids}.

---

### MachineLearningInferenceClusterSsl <a name="MachineLearningInferenceClusterSsl" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/machinelearninginferencecluster"

&machinelearninginferencecluster.MachineLearningInferenceClusterSsl {
	Cert: *string,
	Cname: *string,
	Key: *string,
	LeafDomainLabel: *string,
	OverwriteExistingDomain: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.cert">Cert</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#cert MachineLearningInferenceCluster#cert}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.cname">Cname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#cname MachineLearningInferenceCluster#cname}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#key MachineLearningInferenceCluster#key}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.leafDomainLabel">LeafDomainLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#leaf_domain_label MachineLearningInferenceCluster#leaf_domain_label}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.overwriteExistingDomain">OverwriteExistingDomain</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#overwrite_existing_domain MachineLearningInferenceCluster#overwrite_existing_domain}. |

---

##### `Cert`<sup>Optional</sup> <a name="Cert" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.cert"></a>

```go
Cert *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#cert MachineLearningInferenceCluster#cert}.

---

##### `Cname`<sup>Optional</sup> <a name="Cname" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.cname"></a>

```go
Cname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#cname MachineLearningInferenceCluster#cname}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#key MachineLearningInferenceCluster#key}.

---

##### `LeafDomainLabel`<sup>Optional</sup> <a name="LeafDomainLabel" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.leafDomainLabel"></a>

```go
LeafDomainLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#leaf_domain_label MachineLearningInferenceCluster#leaf_domain_label}.

---

##### `OverwriteExistingDomain`<sup>Optional</sup> <a name="OverwriteExistingDomain" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl.property.overwriteExistingDomain"></a>

```go
OverwriteExistingDomain interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#overwrite_existing_domain MachineLearningInferenceCluster#overwrite_existing_domain}.

---

### MachineLearningInferenceClusterTimeouts <a name="MachineLearningInferenceClusterTimeouts" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/machinelearninginferencecluster"

&machinelearninginferencecluster.MachineLearningInferenceClusterTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#create MachineLearningInferenceCluster#create}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#delete MachineLearningInferenceCluster#delete}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#read MachineLearningInferenceCluster#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#create MachineLearningInferenceCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#delete MachineLearningInferenceCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/machine_learning_inference_cluster#read MachineLearningInferenceCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningInferenceClusterIdentityOutputReference <a name="MachineLearningInferenceClusterIdentityOutputReference" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/machinelearninginferencecluster"

machinelearninginferencecluster.NewMachineLearningInferenceClusterIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningInferenceClusterIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningInferenceClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterIdentity">MachineLearningInferenceClusterIdentity</a>

---


### MachineLearningInferenceClusterSslOutputReference <a name="MachineLearningInferenceClusterSslOutputReference" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/machinelearninginferencecluster"

machinelearninginferencecluster.NewMachineLearningInferenceClusterSslOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningInferenceClusterSslOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetCert">ResetCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetCname">ResetCname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetLeafDomainLabel">ResetLeafDomainLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetOverwriteExistingDomain">ResetOverwriteExistingDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCert` <a name="ResetCert" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetCert"></a>

```go
func ResetCert()
```

##### `ResetCname` <a name="ResetCname" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetCname"></a>

```go
func ResetCname()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetLeafDomainLabel` <a name="ResetLeafDomainLabel" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetLeafDomainLabel"></a>

```go
func ResetLeafDomainLabel()
```

##### `ResetOverwriteExistingDomain` <a name="ResetOverwriteExistingDomain" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.resetOverwriteExistingDomain"></a>

```go
func ResetOverwriteExistingDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.certInput">CertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cnameInput">CnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.leafDomainLabelInput">LeafDomainLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.overwriteExistingDomainInput">OverwriteExistingDomainInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cert">Cert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cname">Cname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.leafDomainLabel">LeafDomainLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.overwriteExistingDomain">OverwriteExistingDomain</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.certInput"></a>

```go
func CertInput() *string
```

- *Type:* *string

---

##### `CnameInput`<sup>Optional</sup> <a name="CnameInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cnameInput"></a>

```go
func CnameInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `LeafDomainLabelInput`<sup>Optional</sup> <a name="LeafDomainLabelInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.leafDomainLabelInput"></a>

```go
func LeafDomainLabelInput() *string
```

- *Type:* *string

---

##### `OverwriteExistingDomainInput`<sup>Optional</sup> <a name="OverwriteExistingDomainInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.overwriteExistingDomainInput"></a>

```go
func OverwriteExistingDomainInput() interface{}
```

- *Type:* interface{}

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cert"></a>

```go
func Cert() *string
```

- *Type:* *string

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.cname"></a>

```go
func Cname() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `LeafDomainLabel`<sup>Required</sup> <a name="LeafDomainLabel" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.leafDomainLabel"></a>

```go
func LeafDomainLabel() *string
```

- *Type:* *string

---

##### `OverwriteExistingDomain`<sup>Required</sup> <a name="OverwriteExistingDomain" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.overwriteExistingDomain"></a>

```go
func OverwriteExistingDomain() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSslOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningInferenceClusterSsl
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterSsl">MachineLearningInferenceClusterSsl</a>

---


### MachineLearningInferenceClusterTimeoutsOutputReference <a name="MachineLearningInferenceClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/machinelearninginferencecluster"

machinelearninginferencecluster.NewMachineLearningInferenceClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningInferenceClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.machineLearningInferenceCluster.MachineLearningInferenceClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



