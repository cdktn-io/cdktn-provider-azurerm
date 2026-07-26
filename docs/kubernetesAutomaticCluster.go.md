# `kubernetesAutomaticCluster` Submodule <a name="`kubernetesAutomaticCluster` Submodule" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesAutomaticCluster <a name="KubernetesAutomaticCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster azurerm_kubernetes_automatic_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticCluster(scope Construct, id *string, config KubernetesAutomaticClusterConfig) KubernetesAutomaticCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig">KubernetesAutomaticClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig">KubernetesAutomaticClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putApiServerAccess">PutApiServerAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putHostedSystem">PutHostedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putPrivateCluster">PutPrivateCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putServiceMesh">PutServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putWebAppRoutingIngress">PutWebAppRoutingIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetApiServerAccess">ResetApiServerAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetHostedSystem">ResetHostedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetPrivateCluster">ResetPrivateCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetServiceMesh">ResetServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetWebAppRoutingIngress">ResetWebAppRoutingIngress</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApiServerAccess` <a name="PutApiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putApiServerAccess"></a>

```go
func PutApiServerAccess(value KubernetesAutomaticClusterApiServerAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putApiServerAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

---

##### `PutHostedSystem` <a name="PutHostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putHostedSystem"></a>

```go
func PutHostedSystem(value KubernetesAutomaticClusterHostedSystem)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putHostedSystem.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putIdentity"></a>

```go
func PutIdentity(value KubernetesAutomaticClusterIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

---

##### `PutPrivateCluster` <a name="PutPrivateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putPrivateCluster"></a>

```go
func PutPrivateCluster(value KubernetesAutomaticClusterPrivateCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putPrivateCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

---

##### `PutServiceMesh` <a name="PutServiceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putServiceMesh"></a>

```go
func PutServiceMesh(value KubernetesAutomaticClusterServiceMesh)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putServiceMesh.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putTimeouts"></a>

```go
func PutTimeouts(value KubernetesAutomaticClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a>

---

##### `PutWebAppRoutingIngress` <a name="PutWebAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putWebAppRoutingIngress"></a>

```go
func PutWebAppRoutingIngress(value KubernetesAutomaticClusterWebAppRoutingIngress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putWebAppRoutingIngress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

---

##### `ResetApiServerAccess` <a name="ResetApiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetApiServerAccess"></a>

```go
func ResetApiServerAccess()
```

##### `ResetHostedSystem` <a name="ResetHostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetHostedSystem"></a>

```go
func ResetHostedSystem()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetPrivateCluster` <a name="ResetPrivateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetPrivateCluster"></a>

```go
func ResetPrivateCluster()
```

##### `ResetServiceMesh` <a name="ResetServiceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetServiceMesh"></a>

```go
func ResetServiceMesh()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWebAppRoutingIngress` <a name="ResetWebAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetWebAppRoutingIngress"></a>

```go
func ResetWebAppRoutingIngress()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.KubernetesAutomaticCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.KubernetesAutomaticCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.KubernetesAutomaticCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.KubernetesAutomaticCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesAutomaticCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesAutomaticCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KubernetesAutomaticCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.apiServerAccess">ApiServerAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference">KubernetesAutomaticClusterApiServerAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.currentKubernetesVersion">CurrentKubernetesVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.fullyQualifiedDomainName">FullyQualifiedDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.hostedSystem">HostedSystem</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference">KubernetesAutomaticClusterHostedSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference">KubernetesAutomaticClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.kubeConfig">KubeConfig</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList">KubernetesAutomaticClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.kubeConfigRaw">KubeConfigRaw</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.nodeResourceGroupId">NodeResourceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.oidcIssuerUrl">OidcIssuerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.portalFullyQualifiedDomainName">PortalFullyQualifiedDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateCluster">PrivateCluster</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference">KubernetesAutomaticClusterPrivateClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateFullyQualifiedDomainName">PrivateFullyQualifiedDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.serviceMesh">ServiceMesh</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference">KubernetesAutomaticClusterServiceMeshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference">KubernetesAutomaticClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.webAppRoutingIngress">WebAppRoutingIngress</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference">KubernetesAutomaticClusterWebAppRoutingIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.apiServerAccessInput">ApiServerAccessInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.hostedSystemInput">HostedSystemInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateClusterInput">PrivateClusterInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.serviceMeshInput">ServiceMeshInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.webAppRoutingIngressInput">WebAppRoutingIngressInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiServerAccess`<sup>Required</sup> <a name="ApiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.apiServerAccess"></a>

```go
func ApiServerAccess() KubernetesAutomaticClusterApiServerAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference">KubernetesAutomaticClusterApiServerAccessOutputReference</a>

---

##### `CurrentKubernetesVersion`<sup>Required</sup> <a name="CurrentKubernetesVersion" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.currentKubernetesVersion"></a>

```go
func CurrentKubernetesVersion() *string
```

- *Type:* *string

---

##### `FullyQualifiedDomainName`<sup>Required</sup> <a name="FullyQualifiedDomainName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.fullyQualifiedDomainName"></a>

```go
func FullyQualifiedDomainName() *string
```

- *Type:* *string

---

##### `HostedSystem`<sup>Required</sup> <a name="HostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.hostedSystem"></a>

```go
func HostedSystem() KubernetesAutomaticClusterHostedSystemOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference">KubernetesAutomaticClusterHostedSystemOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.identity"></a>

```go
func Identity() KubernetesAutomaticClusterIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference">KubernetesAutomaticClusterIdentityOutputReference</a>

---

##### `KubeConfig`<sup>Required</sup> <a name="KubeConfig" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.kubeConfig"></a>

```go
func KubeConfig() KubernetesAutomaticClusterKubeConfigList
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList">KubernetesAutomaticClusterKubeConfigList</a>

---

##### `KubeConfigRaw`<sup>Required</sup> <a name="KubeConfigRaw" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.kubeConfigRaw"></a>

```go
func KubeConfigRaw() *string
```

- *Type:* *string

---

##### `NodeResourceGroupId`<sup>Required</sup> <a name="NodeResourceGroupId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.nodeResourceGroupId"></a>

```go
func NodeResourceGroupId() *string
```

- *Type:* *string

---

##### `OidcIssuerUrl`<sup>Required</sup> <a name="OidcIssuerUrl" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.oidcIssuerUrl"></a>

```go
func OidcIssuerUrl() *string
```

- *Type:* *string

---

##### `PortalFullyQualifiedDomainName`<sup>Required</sup> <a name="PortalFullyQualifiedDomainName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.portalFullyQualifiedDomainName"></a>

```go
func PortalFullyQualifiedDomainName() *string
```

- *Type:* *string

---

##### `PrivateCluster`<sup>Required</sup> <a name="PrivateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateCluster"></a>

```go
func PrivateCluster() KubernetesAutomaticClusterPrivateClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference">KubernetesAutomaticClusterPrivateClusterOutputReference</a>

---

##### `PrivateFullyQualifiedDomainName`<sup>Required</sup> <a name="PrivateFullyQualifiedDomainName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateFullyQualifiedDomainName"></a>

```go
func PrivateFullyQualifiedDomainName() *string
```

- *Type:* *string

---

##### `ServiceMesh`<sup>Required</sup> <a name="ServiceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.serviceMesh"></a>

```go
func ServiceMesh() KubernetesAutomaticClusterServiceMeshOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference">KubernetesAutomaticClusterServiceMeshOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.timeouts"></a>

```go
func Timeouts() KubernetesAutomaticClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference">KubernetesAutomaticClusterTimeoutsOutputReference</a>

---

##### `WebAppRoutingIngress`<sup>Required</sup> <a name="WebAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.webAppRoutingIngress"></a>

```go
func WebAppRoutingIngress() KubernetesAutomaticClusterWebAppRoutingIngressOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference">KubernetesAutomaticClusterWebAppRoutingIngressOutputReference</a>

---

##### `ApiServerAccessInput`<sup>Optional</sup> <a name="ApiServerAccessInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.apiServerAccessInput"></a>

```go
func ApiServerAccessInput() KubernetesAutomaticClusterApiServerAccess
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

---

##### `HostedSystemInput`<sup>Optional</sup> <a name="HostedSystemInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.hostedSystemInput"></a>

```go
func HostedSystemInput() KubernetesAutomaticClusterHostedSystem
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.identityInput"></a>

```go
func IdentityInput() KubernetesAutomaticClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateClusterInput`<sup>Optional</sup> <a name="PrivateClusterInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateClusterInput"></a>

```go
func PrivateClusterInput() KubernetesAutomaticClusterPrivateCluster
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServiceMeshInput`<sup>Optional</sup> <a name="ServiceMeshInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.serviceMeshInput"></a>

```go
func ServiceMeshInput() KubernetesAutomaticClusterServiceMesh
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WebAppRoutingIngressInput`<sup>Optional</sup> <a name="WebAppRoutingIngressInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.webAppRoutingIngressInput"></a>

```go
func WebAppRoutingIngressInput() KubernetesAutomaticClusterWebAppRoutingIngress
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesAutomaticClusterApiServerAccess <a name="KubernetesAutomaticClusterApiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

&kubernetesautomaticcluster.KubernetesAutomaticClusterApiServerAccess {
	AuthorizedIpRanges: *[]*string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.property.authorizedIpRanges">AuthorizedIpRanges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#authorized_ip_ranges KubernetesAutomaticCluster#authorized_ip_ranges}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#subnet_id KubernetesAutomaticCluster#subnet_id}. |

---

##### `AuthorizedIpRanges`<sup>Optional</sup> <a name="AuthorizedIpRanges" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.property.authorizedIpRanges"></a>

```go
AuthorizedIpRanges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#authorized_ip_ranges KubernetesAutomaticCluster#authorized_ip_ranges}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#subnet_id KubernetesAutomaticCluster#subnet_id}.

---

### KubernetesAutomaticClusterConfig <a name="KubernetesAutomaticClusterConfig" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

&kubernetesautomaticcluster.KubernetesAutomaticClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Identity: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	ApiServerAccess: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess,
	HostedSystem: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem,
	Id: *string,
	PrivateCluster: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster,
	ServiceMesh: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts,
	WebAppRoutingIngress: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#location KubernetesAutomaticCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#name KubernetesAutomaticCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#resource_group_name KubernetesAutomaticCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.apiServerAccess">ApiServerAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a></code> | api_server_access block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.hostedSystem">HostedSystem</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a></code> | hosted_system block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#id KubernetesAutomaticCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.privateCluster">PrivateCluster</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a></code> | private_cluster block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.serviceMesh">ServiceMesh</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a></code> | service_mesh block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#tags KubernetesAutomaticCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.webAppRoutingIngress">WebAppRoutingIngress</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a></code> | web_app_routing_ingress block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.identity"></a>

```go
Identity KubernetesAutomaticClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#identity KubernetesAutomaticCluster#identity}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#location KubernetesAutomaticCluster#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#name KubernetesAutomaticCluster#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#resource_group_name KubernetesAutomaticCluster#resource_group_name}.

---

##### `ApiServerAccess`<sup>Optional</sup> <a name="ApiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.apiServerAccess"></a>

```go
ApiServerAccess KubernetesAutomaticClusterApiServerAccess
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

api_server_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#api_server_access KubernetesAutomaticCluster#api_server_access}

---

##### `HostedSystem`<sup>Optional</sup> <a name="HostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.hostedSystem"></a>

```go
HostedSystem KubernetesAutomaticClusterHostedSystem
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

hosted_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#hosted_system KubernetesAutomaticCluster#hosted_system}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#id KubernetesAutomaticCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateCluster`<sup>Optional</sup> <a name="PrivateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.privateCluster"></a>

```go
PrivateCluster KubernetesAutomaticClusterPrivateCluster
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

private_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#private_cluster KubernetesAutomaticCluster#private_cluster}

---

##### `ServiceMesh`<sup>Optional</sup> <a name="ServiceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.serviceMesh"></a>

```go
ServiceMesh KubernetesAutomaticClusterServiceMesh
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

service_mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#service_mesh KubernetesAutomaticCluster#service_mesh}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#tags KubernetesAutomaticCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.timeouts"></a>

```go
Timeouts KubernetesAutomaticClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#timeouts KubernetesAutomaticCluster#timeouts}

---

##### `WebAppRoutingIngress`<sup>Optional</sup> <a name="WebAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.webAppRoutingIngress"></a>

```go
WebAppRoutingIngress KubernetesAutomaticClusterWebAppRoutingIngress
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

web_app_routing_ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#web_app_routing_ingress KubernetesAutomaticCluster#web_app_routing_ingress}

---

### KubernetesAutomaticClusterHostedSystem <a name="KubernetesAutomaticClusterHostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

&kubernetesautomaticcluster.KubernetesAutomaticClusterHostedSystem {
	NodeSubnetId: *string,
	SystemNodeSubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.property.nodeSubnetId">NodeSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#node_subnet_id KubernetesAutomaticCluster#node_subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.property.systemNodeSubnetId">SystemNodeSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#system_node_subnet_id KubernetesAutomaticCluster#system_node_subnet_id}. |

---

##### `NodeSubnetId`<sup>Required</sup> <a name="NodeSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.property.nodeSubnetId"></a>

```go
NodeSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#node_subnet_id KubernetesAutomaticCluster#node_subnet_id}.

---

##### `SystemNodeSubnetId`<sup>Required</sup> <a name="SystemNodeSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.property.systemNodeSubnetId"></a>

```go
SystemNodeSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#system_node_subnet_id KubernetesAutomaticCluster#system_node_subnet_id}.

---

### KubernetesAutomaticClusterIdentity <a name="KubernetesAutomaticClusterIdentity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

&kubernetesautomaticcluster.KubernetesAutomaticClusterIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#type KubernetesAutomaticCluster#type}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#identity_ids KubernetesAutomaticCluster#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#type KubernetesAutomaticCluster#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#identity_ids KubernetesAutomaticCluster#identity_ids}.

---

### KubernetesAutomaticClusterKubeConfig <a name="KubernetesAutomaticClusterKubeConfig" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

&kubernetesautomaticcluster.KubernetesAutomaticClusterKubeConfig {

}
```


### KubernetesAutomaticClusterPrivateCluster <a name="KubernetesAutomaticClusterPrivateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

&kubernetesautomaticcluster.KubernetesAutomaticClusterPrivateCluster {
	PrivateDnsZoneId: *string,
	PublicFullyQualifiedDomainNameEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.property.privateDnsZoneId">PrivateDnsZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#private_dns_zone_id KubernetesAutomaticCluster#private_dns_zone_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.property.publicFullyQualifiedDomainNameEnabled">PublicFullyQualifiedDomainNameEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#public_fully_qualified_domain_name_enabled KubernetesAutomaticCluster#public_fully_qualified_domain_name_enabled}. |

---

##### `PrivateDnsZoneId`<sup>Optional</sup> <a name="PrivateDnsZoneId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.property.privateDnsZoneId"></a>

```go
PrivateDnsZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#private_dns_zone_id KubernetesAutomaticCluster#private_dns_zone_id}.

---

##### `PublicFullyQualifiedDomainNameEnabled`<sup>Optional</sup> <a name="PublicFullyQualifiedDomainNameEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.property.publicFullyQualifiedDomainNameEnabled"></a>

```go
PublicFullyQualifiedDomainNameEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#public_fully_qualified_domain_name_enabled KubernetesAutomaticCluster#public_fully_qualified_domain_name_enabled}.

---

### KubernetesAutomaticClusterServiceMesh <a name="KubernetesAutomaticClusterServiceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

&kubernetesautomaticcluster.KubernetesAutomaticClusterServiceMesh {
	Revisions: *[]*string,
	CertificateAuthority: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority,
	ExternalIngressGatewayEnabled: interface{},
	InternalIngressGatewayEnabled: interface{},
	ProxyRedirectMechanism: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.revisions">Revisions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#revisions KubernetesAutomaticCluster#revisions}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.certificateAuthority">CertificateAuthority</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a></code> | certificate_authority block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.externalIngressGatewayEnabled">ExternalIngressGatewayEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#external_ingress_gateway_enabled KubernetesAutomaticCluster#external_ingress_gateway_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.internalIngressGatewayEnabled">InternalIngressGatewayEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#internal_ingress_gateway_enabled KubernetesAutomaticCluster#internal_ingress_gateway_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.proxyRedirectMechanism">ProxyRedirectMechanism</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#proxy_redirect_mechanism KubernetesAutomaticCluster#proxy_redirect_mechanism}. |

---

##### `Revisions`<sup>Required</sup> <a name="Revisions" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.revisions"></a>

```go
Revisions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#revisions KubernetesAutomaticCluster#revisions}.

---

##### `CertificateAuthority`<sup>Optional</sup> <a name="CertificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.certificateAuthority"></a>

```go
CertificateAuthority KubernetesAutomaticClusterServiceMeshCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

certificate_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#certificate_authority KubernetesAutomaticCluster#certificate_authority}

---

##### `ExternalIngressGatewayEnabled`<sup>Optional</sup> <a name="ExternalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.externalIngressGatewayEnabled"></a>

```go
ExternalIngressGatewayEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#external_ingress_gateway_enabled KubernetesAutomaticCluster#external_ingress_gateway_enabled}.

---

##### `InternalIngressGatewayEnabled`<sup>Optional</sup> <a name="InternalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.internalIngressGatewayEnabled"></a>

```go
InternalIngressGatewayEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#internal_ingress_gateway_enabled KubernetesAutomaticCluster#internal_ingress_gateway_enabled}.

---

##### `ProxyRedirectMechanism`<sup>Optional</sup> <a name="ProxyRedirectMechanism" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.proxyRedirectMechanism"></a>

```go
ProxyRedirectMechanism *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#proxy_redirect_mechanism KubernetesAutomaticCluster#proxy_redirect_mechanism}.

---

### KubernetesAutomaticClusterServiceMeshCertificateAuthority <a name="KubernetesAutomaticClusterServiceMeshCertificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

&kubernetesautomaticcluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority {
	CertificateChainObjectName: *string,
	CertificateObjectName: *string,
	KeyObjectName: *string,
	KeyVaultId: *string,
	RootCertificateObjectName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.certificateChainObjectName">CertificateChainObjectName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#certificate_chain_object_name KubernetesAutomaticCluster#certificate_chain_object_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.certificateObjectName">CertificateObjectName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#certificate_object_name KubernetesAutomaticCluster#certificate_object_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.keyObjectName">KeyObjectName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#key_object_name KubernetesAutomaticCluster#key_object_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#key_vault_id KubernetesAutomaticCluster#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.rootCertificateObjectName">RootCertificateObjectName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#root_certificate_object_name KubernetesAutomaticCluster#root_certificate_object_name}. |

---

##### `CertificateChainObjectName`<sup>Required</sup> <a name="CertificateChainObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.certificateChainObjectName"></a>

```go
CertificateChainObjectName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#certificate_chain_object_name KubernetesAutomaticCluster#certificate_chain_object_name}.

---

##### `CertificateObjectName`<sup>Required</sup> <a name="CertificateObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.certificateObjectName"></a>

```go
CertificateObjectName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#certificate_object_name KubernetesAutomaticCluster#certificate_object_name}.

---

##### `KeyObjectName`<sup>Required</sup> <a name="KeyObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.keyObjectName"></a>

```go
KeyObjectName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#key_object_name KubernetesAutomaticCluster#key_object_name}.

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#key_vault_id KubernetesAutomaticCluster#key_vault_id}.

---

##### `RootCertificateObjectName`<sup>Required</sup> <a name="RootCertificateObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.rootCertificateObjectName"></a>

```go
RootCertificateObjectName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#root_certificate_object_name KubernetesAutomaticCluster#root_certificate_object_name}.

---

### KubernetesAutomaticClusterTimeouts <a name="KubernetesAutomaticClusterTimeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

&kubernetesautomaticcluster.KubernetesAutomaticClusterTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#create KubernetesAutomaticCluster#create}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#delete KubernetesAutomaticCluster#delete}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#read KubernetesAutomaticCluster#read}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#update KubernetesAutomaticCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#create KubernetesAutomaticCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#delete KubernetesAutomaticCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#read KubernetesAutomaticCluster#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#update KubernetesAutomaticCluster#update}.

---

### KubernetesAutomaticClusterWebAppRoutingIngress <a name="KubernetesAutomaticClusterWebAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

&kubernetesautomaticcluster.KubernetesAutomaticClusterWebAppRoutingIngress {
	DefaultNginxController: *string,
	DnsZoneIds: *[]*string,
	IstioEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.defaultNginxController">DefaultNginxController</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#default_nginx_controller KubernetesAutomaticCluster#default_nginx_controller}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.dnsZoneIds">DnsZoneIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#dns_zone_ids KubernetesAutomaticCluster#dns_zone_ids}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.istioEnabled">IstioEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#istio_enabled KubernetesAutomaticCluster#istio_enabled}. |

---

##### `DefaultNginxController`<sup>Optional</sup> <a name="DefaultNginxController" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.defaultNginxController"></a>

```go
DefaultNginxController *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#default_nginx_controller KubernetesAutomaticCluster#default_nginx_controller}.

---

##### `DnsZoneIds`<sup>Optional</sup> <a name="DnsZoneIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.dnsZoneIds"></a>

```go
DnsZoneIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#dns_zone_ids KubernetesAutomaticCluster#dns_zone_ids}.

---

##### `IstioEnabled`<sup>Optional</sup> <a name="IstioEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.istioEnabled"></a>

```go
IstioEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_automatic_cluster#istio_enabled KubernetesAutomaticCluster#istio_enabled}.

---

### KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity <a name="KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

&kubernetesautomaticcluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity {

}
```


## Classes <a name="Classes" id="Classes"></a>

### KubernetesAutomaticClusterApiServerAccessOutputReference <a name="KubernetesAutomaticClusterApiServerAccessOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticClusterApiServerAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesAutomaticClusterApiServerAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resetAuthorizedIpRanges">ResetAuthorizedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizedIpRanges` <a name="ResetAuthorizedIpRanges" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resetAuthorizedIpRanges"></a>

```go
func ResetAuthorizedIpRanges()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRangesInput">AuthorizedIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRanges">AuthorizedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizedIpRangesInput`<sup>Optional</sup> <a name="AuthorizedIpRangesInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRangesInput"></a>

```go
func AuthorizedIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `AuthorizedIpRanges`<sup>Required</sup> <a name="AuthorizedIpRanges" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRanges"></a>

```go
func AuthorizedIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesAutomaticClusterApiServerAccess
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

---


### KubernetesAutomaticClusterHostedSystemOutputReference <a name="KubernetesAutomaticClusterHostedSystemOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticClusterHostedSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesAutomaticClusterHostedSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetIdInput">NodeSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetIdInput">SystemNodeSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetId">NodeSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetId">SystemNodeSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeSubnetIdInput`<sup>Optional</sup> <a name="NodeSubnetIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetIdInput"></a>

```go
func NodeSubnetIdInput() *string
```

- *Type:* *string

---

##### `SystemNodeSubnetIdInput`<sup>Optional</sup> <a name="SystemNodeSubnetIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetIdInput"></a>

```go
func SystemNodeSubnetIdInput() *string
```

- *Type:* *string

---

##### `NodeSubnetId`<sup>Required</sup> <a name="NodeSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetId"></a>

```go
func NodeSubnetId() *string
```

- *Type:* *string

---

##### `SystemNodeSubnetId`<sup>Required</sup> <a name="SystemNodeSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetId"></a>

```go
func SystemNodeSubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesAutomaticClusterHostedSystem
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

---


### KubernetesAutomaticClusterIdentityOutputReference <a name="KubernetesAutomaticClusterIdentityOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticClusterIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesAutomaticClusterIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesAutomaticClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

---


### KubernetesAutomaticClusterKubeConfigList <a name="KubernetesAutomaticClusterKubeConfigList" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticClusterKubeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesAutomaticClusterKubeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.get"></a>

```go
func Get(index *f64) KubernetesAutomaticClusterKubeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KubernetesAutomaticClusterKubeConfigOutputReference <a name="KubernetesAutomaticClusterKubeConfigOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticClusterKubeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesAutomaticClusterKubeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig">KubernetesAutomaticClusterKubeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `ClusterCaCertificate`<sup>Required</sup> <a name="ClusterCaCertificate" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```go
func ClusterCaCertificate() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesAutomaticClusterKubeConfig
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig">KubernetesAutomaticClusterKubeConfig</a>

---


### KubernetesAutomaticClusterPrivateClusterOutputReference <a name="KubernetesAutomaticClusterPrivateClusterOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticClusterPrivateClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesAutomaticClusterPrivateClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resetPrivateDnsZoneId">ResetPrivateDnsZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resetPublicFullyQualifiedDomainNameEnabled">ResetPublicFullyQualifiedDomainNameEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrivateDnsZoneId` <a name="ResetPrivateDnsZoneId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resetPrivateDnsZoneId"></a>

```go
func ResetPrivateDnsZoneId()
```

##### `ResetPublicFullyQualifiedDomainNameEnabled` <a name="ResetPublicFullyQualifiedDomainNameEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resetPublicFullyQualifiedDomainNameEnabled"></a>

```go
func ResetPublicFullyQualifiedDomainNameEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneIdInput">PrivateDnsZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabledInput">PublicFullyQualifiedDomainNameEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneId">PrivateDnsZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabled">PublicFullyQualifiedDomainNameEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateDnsZoneIdInput`<sup>Optional</sup> <a name="PrivateDnsZoneIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneIdInput"></a>

```go
func PrivateDnsZoneIdInput() *string
```

- *Type:* *string

---

##### `PublicFullyQualifiedDomainNameEnabledInput`<sup>Optional</sup> <a name="PublicFullyQualifiedDomainNameEnabledInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabledInput"></a>

```go
func PublicFullyQualifiedDomainNameEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateDnsZoneId`<sup>Required</sup> <a name="PrivateDnsZoneId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneId"></a>

```go
func PrivateDnsZoneId() *string
```

- *Type:* *string

---

##### `PublicFullyQualifiedDomainNameEnabled`<sup>Required</sup> <a name="PublicFullyQualifiedDomainNameEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabled"></a>

```go
func PublicFullyQualifiedDomainNameEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesAutomaticClusterPrivateCluster
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

---


### KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference <a name="KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectNameInput">CertificateChainObjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectNameInput">CertificateObjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectNameInput">KeyObjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectNameInput">RootCertificateObjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectName">CertificateChainObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectName">CertificateObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectName">KeyObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectName">RootCertificateObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateChainObjectNameInput`<sup>Optional</sup> <a name="CertificateChainObjectNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectNameInput"></a>

```go
func CertificateChainObjectNameInput() *string
```

- *Type:* *string

---

##### `CertificateObjectNameInput`<sup>Optional</sup> <a name="CertificateObjectNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectNameInput"></a>

```go
func CertificateObjectNameInput() *string
```

- *Type:* *string

---

##### `KeyObjectNameInput`<sup>Optional</sup> <a name="KeyObjectNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectNameInput"></a>

```go
func KeyObjectNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `RootCertificateObjectNameInput`<sup>Optional</sup> <a name="RootCertificateObjectNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectNameInput"></a>

```go
func RootCertificateObjectNameInput() *string
```

- *Type:* *string

---

##### `CertificateChainObjectName`<sup>Required</sup> <a name="CertificateChainObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectName"></a>

```go
func CertificateChainObjectName() *string
```

- *Type:* *string

---

##### `CertificateObjectName`<sup>Required</sup> <a name="CertificateObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectName"></a>

```go
func CertificateObjectName() *string
```

- *Type:* *string

---

##### `KeyObjectName`<sup>Required</sup> <a name="KeyObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectName"></a>

```go
func KeyObjectName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `RootCertificateObjectName`<sup>Required</sup> <a name="RootCertificateObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectName"></a>

```go
func RootCertificateObjectName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesAutomaticClusterServiceMeshCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

---


### KubernetesAutomaticClusterServiceMeshOutputReference <a name="KubernetesAutomaticClusterServiceMeshOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticClusterServiceMeshOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesAutomaticClusterServiceMeshOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.putCertificateAuthority">PutCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetCertificateAuthority">ResetCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetExternalIngressGatewayEnabled">ResetExternalIngressGatewayEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetInternalIngressGatewayEnabled">ResetInternalIngressGatewayEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetProxyRedirectMechanism">ResetProxyRedirectMechanism</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateAuthority` <a name="PutCertificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.putCertificateAuthority"></a>

```go
func PutCertificateAuthority(value KubernetesAutomaticClusterServiceMeshCertificateAuthority)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.putCertificateAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

---

##### `ResetCertificateAuthority` <a name="ResetCertificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetCertificateAuthority"></a>

```go
func ResetCertificateAuthority()
```

##### `ResetExternalIngressGatewayEnabled` <a name="ResetExternalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetExternalIngressGatewayEnabled"></a>

```go
func ResetExternalIngressGatewayEnabled()
```

##### `ResetInternalIngressGatewayEnabled` <a name="ResetInternalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetInternalIngressGatewayEnabled"></a>

```go
func ResetInternalIngressGatewayEnabled()
```

##### `ResetProxyRedirectMechanism` <a name="ResetProxyRedirectMechanism" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetProxyRedirectMechanism"></a>

```go
func ResetProxyRedirectMechanism()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthority">CertificateAuthority</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference">KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthorityInput">CertificateAuthorityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabledInput">ExternalIngressGatewayEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabledInput">InternalIngressGatewayEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanismInput">ProxyRedirectMechanismInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.revisionsInput">RevisionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabled">ExternalIngressGatewayEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabled">InternalIngressGatewayEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanism">ProxyRedirectMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.revisions">Revisions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthority"></a>

```go
func CertificateAuthority() KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference">KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference</a>

---

##### `CertificateAuthorityInput`<sup>Optional</sup> <a name="CertificateAuthorityInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthorityInput"></a>

```go
func CertificateAuthorityInput() KubernetesAutomaticClusterServiceMeshCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

---

##### `ExternalIngressGatewayEnabledInput`<sup>Optional</sup> <a name="ExternalIngressGatewayEnabledInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabledInput"></a>

```go
func ExternalIngressGatewayEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `InternalIngressGatewayEnabledInput`<sup>Optional</sup> <a name="InternalIngressGatewayEnabledInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabledInput"></a>

```go
func InternalIngressGatewayEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProxyRedirectMechanismInput`<sup>Optional</sup> <a name="ProxyRedirectMechanismInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanismInput"></a>

```go
func ProxyRedirectMechanismInput() *string
```

- *Type:* *string

---

##### `RevisionsInput`<sup>Optional</sup> <a name="RevisionsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.revisionsInput"></a>

```go
func RevisionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalIngressGatewayEnabled`<sup>Required</sup> <a name="ExternalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabled"></a>

```go
func ExternalIngressGatewayEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalIngressGatewayEnabled`<sup>Required</sup> <a name="InternalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabled"></a>

```go
func InternalIngressGatewayEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProxyRedirectMechanism`<sup>Required</sup> <a name="ProxyRedirectMechanism" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanism"></a>

```go
func ProxyRedirectMechanism() *string
```

- *Type:* *string

---

##### `Revisions`<sup>Required</sup> <a name="Revisions" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.revisions"></a>

```go
func Revisions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesAutomaticClusterServiceMesh
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

---


### KubernetesAutomaticClusterTimeoutsOutputReference <a name="KubernetesAutomaticClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesAutomaticClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KubernetesAutomaticClusterWebAppRoutingIngressOutputReference <a name="KubernetesAutomaticClusterWebAppRoutingIngressOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticClusterWebAppRoutingIngressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesAutomaticClusterWebAppRoutingIngressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetDefaultNginxController">ResetDefaultNginxController</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetDnsZoneIds">ResetDnsZoneIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetIstioEnabled">ResetIstioEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultNginxController` <a name="ResetDefaultNginxController" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetDefaultNginxController"></a>

```go
func ResetDefaultNginxController()
```

##### `ResetDnsZoneIds` <a name="ResetDnsZoneIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetDnsZoneIds"></a>

```go
func ResetDnsZoneIds()
```

##### `ResetIstioEnabled` <a name="ResetIstioEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetIstioEnabled"></a>

```go
func ResetIstioEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.webAppRoutingIdentity">WebAppRoutingIdentity</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList">KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxControllerInput">DefaultNginxControllerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIdsInput">DnsZoneIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabledInput">IstioEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxController">DefaultNginxController</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIds">DnsZoneIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabled">IstioEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WebAppRoutingIdentity`<sup>Required</sup> <a name="WebAppRoutingIdentity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.webAppRoutingIdentity"></a>

```go
func WebAppRoutingIdentity() KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList">KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList</a>

---

##### `DefaultNginxControllerInput`<sup>Optional</sup> <a name="DefaultNginxControllerInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxControllerInput"></a>

```go
func DefaultNginxControllerInput() *string
```

- *Type:* *string

---

##### `DnsZoneIdsInput`<sup>Optional</sup> <a name="DnsZoneIdsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIdsInput"></a>

```go
func DnsZoneIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IstioEnabledInput`<sup>Optional</sup> <a name="IstioEnabledInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabledInput"></a>

```go
func IstioEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultNginxController`<sup>Required</sup> <a name="DefaultNginxController" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxController"></a>

```go
func DefaultNginxController() *string
```

- *Type:* *string

---

##### `DnsZoneIds`<sup>Required</sup> <a name="DnsZoneIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIds"></a>

```go
func DnsZoneIds() *[]*string
```

- *Type:* *[]*string

---

##### `IstioEnabled`<sup>Required</sup> <a name="IstioEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabled"></a>

```go
func IstioEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesAutomaticClusterWebAppRoutingIngress
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

---


### KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList <a name="KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get"></a>

```go
func Get(index *f64) KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference <a name="KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesautomaticcluster"

kubernetesautomaticcluster.NewKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity">KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.userAssignedIdentityId"></a>

```go
func UserAssignedIdentityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity">KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity</a>

---



