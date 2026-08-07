# `kubernetesClusterDeploymentSafeguard` Submodule <a name="`kubernetesClusterDeploymentSafeguard` Submodule" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesClusterDeploymentSafeguard <a name="KubernetesClusterDeploymentSafeguard" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard azurerm_kubernetes_cluster_deployment_safeguard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesclusterdeploymentsafeguard"

kubernetesclusterdeploymentsafeguard.NewKubernetesClusterDeploymentSafeguard(scope Construct, id *string, config KubernetesClusterDeploymentSafeguardConfig) KubernetesClusterDeploymentSafeguard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig">KubernetesClusterDeploymentSafeguardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig">KubernetesClusterDeploymentSafeguardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetExcludedNamespaces">ResetExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetPodSecurityStandardsLevel">ResetPodSecurityStandardsLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.putTimeouts"></a>

```go
func PutTimeouts(value KubernetesClusterDeploymentSafeguardTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a>

---

##### `ResetExcludedNamespaces` <a name="ResetExcludedNamespaces" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetExcludedNamespaces"></a>

```go
func ResetExcludedNamespaces()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetId"></a>

```go
func ResetId()
```

##### `ResetPodSecurityStandardsLevel` <a name="ResetPodSecurityStandardsLevel" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetPodSecurityStandardsLevel"></a>

```go
func ResetPodSecurityStandardsLevel()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KubernetesClusterDeploymentSafeguard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesclusterdeploymentsafeguard"

kubernetesclusterdeploymentsafeguard.KubernetesClusterDeploymentSafeguard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesclusterdeploymentsafeguard"

kubernetesclusterdeploymentsafeguard.KubernetesClusterDeploymentSafeguard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesclusterdeploymentsafeguard"

kubernetesclusterdeploymentsafeguard.KubernetesClusterDeploymentSafeguard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesclusterdeploymentsafeguard"

kubernetesclusterdeploymentsafeguard.KubernetesClusterDeploymentSafeguard_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KubernetesClusterDeploymentSafeguard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesClusterDeploymentSafeguard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesClusterDeploymentSafeguard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KubernetesClusterDeploymentSafeguard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference">KubernetesClusterDeploymentSafeguardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.excludedNamespacesInput">ExcludedNamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.kubernetesClusterIdInput">KubernetesClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.podSecurityStandardsLevelInput">PodSecurityStandardsLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.excludedNamespaces">ExcludedNamespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.podSecurityStandardsLevel">PodSecurityStandardsLevel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.timeouts"></a>

```go
func Timeouts() KubernetesClusterDeploymentSafeguardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference">KubernetesClusterDeploymentSafeguardTimeoutsOutputReference</a>

---

##### `ExcludedNamespacesInput`<sup>Optional</sup> <a name="ExcludedNamespacesInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.excludedNamespacesInput"></a>

```go
func ExcludedNamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesClusterIdInput`<sup>Optional</sup> <a name="KubernetesClusterIdInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.kubernetesClusterIdInput"></a>

```go
func KubernetesClusterIdInput() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `PodSecurityStandardsLevelInput`<sup>Optional</sup> <a name="PodSecurityStandardsLevelInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.podSecurityStandardsLevelInput"></a>

```go
func PodSecurityStandardsLevelInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludedNamespaces`<sup>Required</sup> <a name="ExcludedNamespaces" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.excludedNamespaces"></a>

```go
func ExcludedNamespaces() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.kubernetesClusterId"></a>

```go
func KubernetesClusterId() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `PodSecurityStandardsLevel`<sup>Required</sup> <a name="PodSecurityStandardsLevel" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.podSecurityStandardsLevel"></a>

```go
func PodSecurityStandardsLevel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterDeploymentSafeguardConfig <a name="KubernetesClusterDeploymentSafeguardConfig" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesclusterdeploymentsafeguard"

&kubernetesclusterdeploymentsafeguard.KubernetesClusterDeploymentSafeguardConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	KubernetesClusterId: *string,
	Level: *string,
	ExcludedNamespaces: *[]*string,
	Id: *string,
	PodSecurityStandardsLevel: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#kubernetes_cluster_id KubernetesClusterDeploymentSafeguard#kubernetes_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.level">Level</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#level KubernetesClusterDeploymentSafeguard#level}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.excludedNamespaces">ExcludedNamespaces</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#excluded_namespaces KubernetesClusterDeploymentSafeguard#excluded_namespaces}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#id KubernetesClusterDeploymentSafeguard#id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.podSecurityStandardsLevel">PodSecurityStandardsLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#pod_security_standards_level KubernetesClusterDeploymentSafeguard#pod_security_standards_level}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.kubernetesClusterId"></a>

```go
KubernetesClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#kubernetes_cluster_id KubernetesClusterDeploymentSafeguard#kubernetes_cluster_id}.

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.level"></a>

```go
Level *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#level KubernetesClusterDeploymentSafeguard#level}.

---

##### `ExcludedNamespaces`<sup>Optional</sup> <a name="ExcludedNamespaces" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.excludedNamespaces"></a>

```go
ExcludedNamespaces *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#excluded_namespaces KubernetesClusterDeploymentSafeguard#excluded_namespaces}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#id KubernetesClusterDeploymentSafeguard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PodSecurityStandardsLevel`<sup>Optional</sup> <a name="PodSecurityStandardsLevel" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.podSecurityStandardsLevel"></a>

```go
PodSecurityStandardsLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#pod_security_standards_level KubernetesClusterDeploymentSafeguard#pod_security_standards_level}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.timeouts"></a>

```go
Timeouts KubernetesClusterDeploymentSafeguardTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#timeouts KubernetesClusterDeploymentSafeguard#timeouts}

---

### KubernetesClusterDeploymentSafeguardTimeouts <a name="KubernetesClusterDeploymentSafeguardTimeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesclusterdeploymentsafeguard"

&kubernetesclusterdeploymentsafeguard.KubernetesClusterDeploymentSafeguardTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#create KubernetesClusterDeploymentSafeguard#create}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#delete KubernetesClusterDeploymentSafeguard#delete}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#read KubernetesClusterDeploymentSafeguard#read}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#update KubernetesClusterDeploymentSafeguard#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#create KubernetesClusterDeploymentSafeguard#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#delete KubernetesClusterDeploymentSafeguard#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#read KubernetesClusterDeploymentSafeguard#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/kubernetes_cluster_deployment_safeguard#update KubernetesClusterDeploymentSafeguard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterDeploymentSafeguardTimeoutsOutputReference <a name="KubernetesClusterDeploymentSafeguardTimeoutsOutputReference" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/kubernetesclusterdeploymentsafeguard"

kubernetesclusterdeploymentsafeguard.NewKubernetesClusterDeploymentSafeguardTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterDeploymentSafeguardTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



