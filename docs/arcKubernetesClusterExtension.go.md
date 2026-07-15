# `arcKubernetesClusterExtension` Submodule <a name="`arcKubernetesClusterExtension` Submodule" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcKubernetesClusterExtension <a name="ArcKubernetesClusterExtension" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension azurerm_arc_kubernetes_cluster_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/arckubernetesclusterextension"

arckubernetesclusterextension.NewArcKubernetesClusterExtension(scope Construct, id *string, config ArcKubernetesClusterExtensionConfig) ArcKubernetesClusterExtension
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig">ArcKubernetesClusterExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig">ArcKubernetesClusterExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetConfigurationProtectedSettings">ResetConfigurationProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetConfigurationSettings">ResetConfigurationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetReleaseNamespace">ResetReleaseNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetReleaseTrain">ResetReleaseTrain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetTargetNamespace">ResetTargetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.putIdentity"></a>

```go
func PutIdentity(value ArcKubernetesClusterExtensionIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.putTimeouts"></a>

```go
func PutTimeouts(value ArcKubernetesClusterExtensionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts">ArcKubernetesClusterExtensionTimeouts</a>

---

##### `ResetConfigurationProtectedSettings` <a name="ResetConfigurationProtectedSettings" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetConfigurationProtectedSettings"></a>

```go
func ResetConfigurationProtectedSettings()
```

##### `ResetConfigurationSettings` <a name="ResetConfigurationSettings" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetConfigurationSettings"></a>

```go
func ResetConfigurationSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetId"></a>

```go
func ResetId()
```

##### `ResetReleaseNamespace` <a name="ResetReleaseNamespace" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetReleaseNamespace"></a>

```go
func ResetReleaseNamespace()
```

##### `ResetReleaseTrain` <a name="ResetReleaseTrain" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetReleaseTrain"></a>

```go
func ResetReleaseTrain()
```

##### `ResetTargetNamespace` <a name="ResetTargetNamespace" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetTargetNamespace"></a>

```go
func ResetTargetNamespace()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ArcKubernetesClusterExtension resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/arckubernetesclusterextension"

arckubernetesclusterextension.ArcKubernetesClusterExtension_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/arckubernetesclusterextension"

arckubernetesclusterextension.ArcKubernetesClusterExtension_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/arckubernetesclusterextension"

arckubernetesclusterextension.ArcKubernetesClusterExtension_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/arckubernetesclusterextension"

arckubernetesclusterextension.ArcKubernetesClusterExtension_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ArcKubernetesClusterExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ArcKubernetesClusterExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ArcKubernetesClusterExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ArcKubernetesClusterExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.currentVersion">CurrentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference">ArcKubernetesClusterExtensionIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference">ArcKubernetesClusterExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationProtectedSettingsInput">ConfigurationProtectedSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationSettingsInput">ConfigurationSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.extensionTypeInput">ExtensionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseNamespaceInput">ReleaseNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseTrainInput">ReleaseTrainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.targetNamespaceInput">TargetNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationProtectedSettings">ConfigurationProtectedSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationSettings">ConfigurationSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.extensionType">ExtensionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseNamespace">ReleaseNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseTrain">ReleaseTrain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.targetNamespace">TargetNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.currentVersion"></a>

```go
func CurrentVersion() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.identity"></a>

```go
func Identity() ArcKubernetesClusterExtensionIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference">ArcKubernetesClusterExtensionIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.timeouts"></a>

```go
func Timeouts() ArcKubernetesClusterExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference">ArcKubernetesClusterExtensionTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationProtectedSettingsInput`<sup>Optional</sup> <a name="ConfigurationProtectedSettingsInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationProtectedSettingsInput"></a>

```go
func ConfigurationProtectedSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConfigurationSettingsInput`<sup>Optional</sup> <a name="ConfigurationSettingsInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationSettingsInput"></a>

```go
func ConfigurationSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExtensionTypeInput`<sup>Optional</sup> <a name="ExtensionTypeInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.extensionTypeInput"></a>

```go
func ExtensionTypeInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.identityInput"></a>

```go
func IdentityInput() ArcKubernetesClusterExtensionIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReleaseNamespaceInput`<sup>Optional</sup> <a name="ReleaseNamespaceInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseNamespaceInput"></a>

```go
func ReleaseNamespaceInput() *string
```

- *Type:* *string

---

##### `ReleaseTrainInput`<sup>Optional</sup> <a name="ReleaseTrainInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseTrainInput"></a>

```go
func ReleaseTrainInput() *string
```

- *Type:* *string

---

##### `TargetNamespaceInput`<sup>Optional</sup> <a name="TargetNamespaceInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.targetNamespaceInput"></a>

```go
func TargetNamespaceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ConfigurationProtectedSettings`<sup>Required</sup> <a name="ConfigurationProtectedSettings" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationProtectedSettings"></a>

```go
func ConfigurationProtectedSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConfigurationSettings`<sup>Required</sup> <a name="ConfigurationSettings" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.configurationSettings"></a>

```go
func ConfigurationSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExtensionType`<sup>Required</sup> <a name="ExtensionType" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.extensionType"></a>

```go
func ExtensionType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReleaseNamespace`<sup>Required</sup> <a name="ReleaseNamespace" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseNamespace"></a>

```go
func ReleaseNamespace() *string
```

- *Type:* *string

---

##### `ReleaseTrain`<sup>Required</sup> <a name="ReleaseTrain" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.releaseTrain"></a>

```go
func ReleaseTrain() *string
```

- *Type:* *string

---

##### `TargetNamespace`<sup>Required</sup> <a name="TargetNamespace" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.targetNamespace"></a>

```go
func TargetNamespace() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtension.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ArcKubernetesClusterExtensionConfig <a name="ArcKubernetesClusterExtensionConfig" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/arckubernetesclusterextension"

&arckubernetesclusterextension.ArcKubernetesClusterExtensionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	ExtensionType: *string,
	Identity: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity,
	Name: *string,
	ConfigurationProtectedSettings: *map[string]*string,
	ConfigurationSettings: *map[string]*string,
	Id: *string,
	ReleaseNamespace: *string,
	ReleaseTrain: *string,
	TargetNamespace: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#cluster_id ArcKubernetesClusterExtension#cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.extensionType">ExtensionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#extension_type ArcKubernetesClusterExtension#extension_type}. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#name ArcKubernetesClusterExtension#name}. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.configurationProtectedSettings">ConfigurationProtectedSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#configuration_protected_settings ArcKubernetesClusterExtension#configuration_protected_settings}. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.configurationSettings">ConfigurationSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#configuration_settings ArcKubernetesClusterExtension#configuration_settings}. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#id ArcKubernetesClusterExtension#id}. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.releaseNamespace">ReleaseNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#release_namespace ArcKubernetesClusterExtension#release_namespace}. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.releaseTrain">ReleaseTrain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#release_train ArcKubernetesClusterExtension#release_train}. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.targetNamespace">TargetNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#target_namespace ArcKubernetesClusterExtension#target_namespace}. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts">ArcKubernetesClusterExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#version ArcKubernetesClusterExtension#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#cluster_id ArcKubernetesClusterExtension#cluster_id}.

---

##### `ExtensionType`<sup>Required</sup> <a name="ExtensionType" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.extensionType"></a>

```go
ExtensionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#extension_type ArcKubernetesClusterExtension#extension_type}.

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.identity"></a>

```go
Identity ArcKubernetesClusterExtensionIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#identity ArcKubernetesClusterExtension#identity}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#name ArcKubernetesClusterExtension#name}.

---

##### `ConfigurationProtectedSettings`<sup>Optional</sup> <a name="ConfigurationProtectedSettings" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.configurationProtectedSettings"></a>

```go
ConfigurationProtectedSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#configuration_protected_settings ArcKubernetesClusterExtension#configuration_protected_settings}.

---

##### `ConfigurationSettings`<sup>Optional</sup> <a name="ConfigurationSettings" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.configurationSettings"></a>

```go
ConfigurationSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#configuration_settings ArcKubernetesClusterExtension#configuration_settings}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#id ArcKubernetesClusterExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReleaseNamespace`<sup>Optional</sup> <a name="ReleaseNamespace" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.releaseNamespace"></a>

```go
ReleaseNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#release_namespace ArcKubernetesClusterExtension#release_namespace}.

---

##### `ReleaseTrain`<sup>Optional</sup> <a name="ReleaseTrain" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.releaseTrain"></a>

```go
ReleaseTrain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#release_train ArcKubernetesClusterExtension#release_train}.

---

##### `TargetNamespace`<sup>Optional</sup> <a name="TargetNamespace" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.targetNamespace"></a>

```go
TargetNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#target_namespace ArcKubernetesClusterExtension#target_namespace}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.timeouts"></a>

```go
Timeouts ArcKubernetesClusterExtensionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts">ArcKubernetesClusterExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#timeouts ArcKubernetesClusterExtension#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#version ArcKubernetesClusterExtension#version}.

---

### ArcKubernetesClusterExtensionIdentity <a name="ArcKubernetesClusterExtensionIdentity" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/arckubernetesclusterextension"

&arckubernetesclusterextension.ArcKubernetesClusterExtensionIdentity {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#type ArcKubernetesClusterExtension#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#type ArcKubernetesClusterExtension#type}.

---

### ArcKubernetesClusterExtensionTimeouts <a name="ArcKubernetesClusterExtensionTimeouts" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/arckubernetesclusterextension"

&arckubernetesclusterextension.ArcKubernetesClusterExtensionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#create ArcKubernetesClusterExtension#create}. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#delete ArcKubernetesClusterExtension#delete}. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#read ArcKubernetesClusterExtension#read}. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#update ArcKubernetesClusterExtension#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#create ArcKubernetesClusterExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#delete ArcKubernetesClusterExtension#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#read ArcKubernetesClusterExtension#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/arc_kubernetes_cluster_extension#update ArcKubernetesClusterExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcKubernetesClusterExtensionIdentityOutputReference <a name="ArcKubernetesClusterExtensionIdentityOutputReference" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/arckubernetesclusterextension"

arckubernetesclusterextension.NewArcKubernetesClusterExtensionIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArcKubernetesClusterExtensionIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ArcKubernetesClusterExtensionIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionIdentity">ArcKubernetesClusterExtensionIdentity</a>

---


### ArcKubernetesClusterExtensionTimeoutsOutputReference <a name="ArcKubernetesClusterExtensionTimeoutsOutputReference" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/arckubernetesclusterextension"

arckubernetesclusterextension.NewArcKubernetesClusterExtensionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArcKubernetesClusterExtensionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.arcKubernetesClusterExtension.ArcKubernetesClusterExtensionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



