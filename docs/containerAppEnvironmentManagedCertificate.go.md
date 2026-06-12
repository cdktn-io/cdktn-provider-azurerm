# `containerAppEnvironmentManagedCertificate` Submodule <a name="`containerAppEnvironmentManagedCertificate` Submodule" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironmentManagedCertificate <a name="ContainerAppEnvironmentManagedCertificate" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate azurerm_container_app_environment_managed_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/containerappenvironmentmanagedcertificate"

containerappenvironmentmanagedcertificate.NewContainerAppEnvironmentManagedCertificate(scope Construct, id *string, config ContainerAppEnvironmentManagedCertificateConfig) ContainerAppEnvironmentManagedCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig">ContainerAppEnvironmentManagedCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig">ContainerAppEnvironmentManagedCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetDomainControlValidation">ResetDomainControlValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts"></a>

```go
func PutTimeouts(value ContainerAppEnvironmentManagedCertificateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

---

##### `ResetDomainControlValidation` <a name="ResetDomainControlValidation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetDomainControlValidation"></a>

```go
func ResetDomainControlValidation()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ContainerAppEnvironmentManagedCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/containerappenvironmentmanagedcertificate"

containerappenvironmentmanagedcertificate.ContainerAppEnvironmentManagedCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/containerappenvironmentmanagedcertificate"

containerappenvironmentmanagedcertificate.ContainerAppEnvironmentManagedCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/containerappenvironmentmanagedcertificate"

containerappenvironmentmanagedcertificate.ContainerAppEnvironmentManagedCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/containerappenvironmentmanagedcertificate"

containerappenvironmentmanagedcertificate.ContainerAppEnvironmentManagedCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ContainerAppEnvironmentManagedCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerAppEnvironmentManagedCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerAppEnvironmentManagedCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ContainerAppEnvironmentManagedCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference">ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.validationToken">ValidationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentIdInput">ContainerAppEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidationInput">DomainControlValidationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectNameInput">SubjectNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidation">DomainControlValidation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectName">SubjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeouts"></a>

```go
func Timeouts() ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference">ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference</a>

---

##### `ValidationToken`<sup>Required</sup> <a name="ValidationToken" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.validationToken"></a>

```go
func ValidationToken() *string
```

- *Type:* *string

---

##### `ContainerAppEnvironmentIdInput`<sup>Optional</sup> <a name="ContainerAppEnvironmentIdInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentIdInput"></a>

```go
func ContainerAppEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `DomainControlValidationInput`<sup>Optional</sup> <a name="DomainControlValidationInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidationInput"></a>

```go
func DomainControlValidationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SubjectNameInput`<sup>Optional</sup> <a name="SubjectNameInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectNameInput"></a>

```go
func SubjectNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentId"></a>

```go
func ContainerAppEnvironmentId() *string
```

- *Type:* *string

---

##### `DomainControlValidation`<sup>Required</sup> <a name="DomainControlValidation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidation"></a>

```go
func DomainControlValidation() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SubjectName`<sup>Required</sup> <a name="SubjectName" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectName"></a>

```go
func SubjectName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentManagedCertificateConfig <a name="ContainerAppEnvironmentManagedCertificateConfig" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/containerappenvironmentmanagedcertificate"

&containerappenvironmentmanagedcertificate.ContainerAppEnvironmentManagedCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerAppEnvironmentId: *string,
	Name: *string,
	SubjectName: *string,
	DomainControlValidation: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>*string</code> | The Container App Managed Environment ID to configure this Managed Certificate on. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Container Apps Managed Certificate. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.subjectName">SubjectName</a></code> | <code>*string</code> | The Subject Name of the Certificate. Must be a valid domain name. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.domainControlValidation">DomainControlValidation</a></code> | <code>*string</code> | The domain control validation type for the managed certificate. Possible values are `CNAME` and `HTTP`. Defaults to `HTTP`. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#id ContainerAppEnvironmentManagedCertificate#id}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#tags ContainerAppEnvironmentManagedCertificate#tags}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.containerAppEnvironmentId"></a>

```go
ContainerAppEnvironmentId *string
```

- *Type:* *string

The Container App Managed Environment ID to configure this Managed Certificate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#container_app_environment_id ContainerAppEnvironmentManagedCertificate#container_app_environment_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Container Apps Managed Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#name ContainerAppEnvironmentManagedCertificate#name}

---

##### `SubjectName`<sup>Required</sup> <a name="SubjectName" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.subjectName"></a>

```go
SubjectName *string
```

- *Type:* *string

The Subject Name of the Certificate. Must be a valid domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#subject_name ContainerAppEnvironmentManagedCertificate#subject_name}

---

##### `DomainControlValidation`<sup>Optional</sup> <a name="DomainControlValidation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.domainControlValidation"></a>

```go
DomainControlValidation *string
```

- *Type:* *string

The domain control validation type for the managed certificate. Possible values are `CNAME` and `HTTP`. Defaults to `HTTP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#domain_control_validation ContainerAppEnvironmentManagedCertificate#domain_control_validation}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#id ContainerAppEnvironmentManagedCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#tags ContainerAppEnvironmentManagedCertificate#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.timeouts"></a>

```go
Timeouts ContainerAppEnvironmentManagedCertificateTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#timeouts ContainerAppEnvironmentManagedCertificate#timeouts}

---

### ContainerAppEnvironmentManagedCertificateTimeouts <a name="ContainerAppEnvironmentManagedCertificateTimeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/containerappenvironmentmanagedcertificate"

&containerappenvironmentmanagedcertificate.ContainerAppEnvironmentManagedCertificateTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#create ContainerAppEnvironmentManagedCertificate#create}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#delete ContainerAppEnvironmentManagedCertificate#delete}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#read ContainerAppEnvironmentManagedCertificate#read}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#update ContainerAppEnvironmentManagedCertificate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#create ContainerAppEnvironmentManagedCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#delete ContainerAppEnvironmentManagedCertificate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#read ContainerAppEnvironmentManagedCertificate#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/container_app_environment_managed_certificate#update ContainerAppEnvironmentManagedCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference <a name="ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/containerappenvironmentmanagedcertificate"

containerappenvironmentmanagedcertificate.NewContainerAppEnvironmentManagedCertificateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



