# `healthcareFhirService` Submodule <a name="`healthcareFhirService` Submodule" id="@cdktn/provider-azurerm.healthcareFhirService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareFhirService <a name="HealthcareFhirService" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service azurerm_healthcare_fhir_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

healthcarefhirservice.NewHealthcareFhirService(scope Construct, id *string, config HealthcareFhirServiceConfig) HealthcareFhirService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig">HealthcareFhirServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig">HealthcareFhirServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putOciArtifact">PutOciArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetAccessPolicyObjectIds">ResetAccessPolicyObjectIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetConfigurationExportStorageAccountName">ResetConfigurationExportStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetContainerRegistryLoginServerUrl">ResetContainerRegistryLoginServerUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOciArtifact">ResetOciArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putAuthentication"></a>

```go
func PutAuthentication(value HealthcareFhirServiceAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

---

##### `PutCors` <a name="PutCors" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putCors"></a>

```go
func PutCors(value HealthcareFhirServiceCors)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putIdentity"></a>

```go
func PutIdentity(value HealthcareFhirServiceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

---

##### `PutOciArtifact` <a name="PutOciArtifact" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putOciArtifact"></a>

```go
func PutOciArtifact(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putOciArtifact.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putTimeouts"></a>

```go
func PutTimeouts(value HealthcareFhirServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

---

##### `ResetAccessPolicyObjectIds` <a name="ResetAccessPolicyObjectIds" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetAccessPolicyObjectIds"></a>

```go
func ResetAccessPolicyObjectIds()
```

##### `ResetConfigurationExportStorageAccountName` <a name="ResetConfigurationExportStorageAccountName" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetConfigurationExportStorageAccountName"></a>

```go
func ResetConfigurationExportStorageAccountName()
```

##### `ResetContainerRegistryLoginServerUrl` <a name="ResetContainerRegistryLoginServerUrl" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetContainerRegistryLoginServerUrl"></a>

```go
func ResetContainerRegistryLoginServerUrl()
```

##### `ResetCors` <a name="ResetCors" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetCors"></a>

```go
func ResetCors()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetKind` <a name="ResetKind" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetKind"></a>

```go
func ResetKind()
```

##### `ResetOciArtifact` <a name="ResetOciArtifact" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetOciArtifact"></a>

```go
func ResetOciArtifact()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a HealthcareFhirService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

healthcarefhirservice.HealthcareFhirService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

healthcarefhirservice.HealthcareFhirService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

healthcarefhirservice.HealthcareFhirService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

healthcarefhirservice.HealthcareFhirService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a HealthcareFhirService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HealthcareFhirService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HealthcareFhirService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the HealthcareFhirService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference">HealthcareFhirServiceAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cors">Cors</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference">HealthcareFhirServiceCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference">HealthcareFhirServiceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifact">OciArtifact</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList">HealthcareFhirServiceOciArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference">HealthcareFhirServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIdsInput">AccessPolicyObjectIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountNameInput">ConfigurationExportStorageAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrlInput">ContainerRegistryLoginServerUrlInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.corsInput">CorsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifactInput">OciArtifactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIds">AccessPolicyObjectIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountName">ConfigurationExportStorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrl">ContainerRegistryLoginServerUrl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authentication"></a>

```go
func Authentication() HealthcareFhirServiceAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference">HealthcareFhirServiceAuthenticationOutputReference</a>

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.cors"></a>

```go
func Cors() HealthcareFhirServiceCorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference">HealthcareFhirServiceCorsOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identity"></a>

```go
func Identity() HealthcareFhirServiceIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference">HealthcareFhirServiceIdentityOutputReference</a>

---

##### `OciArtifact`<sup>Required</sup> <a name="OciArtifact" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifact"></a>

```go
func OciArtifact() HealthcareFhirServiceOciArtifactList
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList">HealthcareFhirServiceOciArtifactList</a>

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeouts"></a>

```go
func Timeouts() HealthcareFhirServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference">HealthcareFhirServiceTimeoutsOutputReference</a>

---

##### `AccessPolicyObjectIdsInput`<sup>Optional</sup> <a name="AccessPolicyObjectIdsInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIdsInput"></a>

```go
func AccessPolicyObjectIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.authenticationInput"></a>

```go
func AuthenticationInput() HealthcareFhirServiceAuthentication
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

---

##### `ConfigurationExportStorageAccountNameInput`<sup>Optional</sup> <a name="ConfigurationExportStorageAccountNameInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountNameInput"></a>

```go
func ConfigurationExportStorageAccountNameInput() *string
```

- *Type:* *string

---

##### `ContainerRegistryLoginServerUrlInput`<sup>Optional</sup> <a name="ContainerRegistryLoginServerUrlInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrlInput"></a>

```go
func ContainerRegistryLoginServerUrlInput() *[]*string
```

- *Type:* *[]*string

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.corsInput"></a>

```go
func CorsInput() HealthcareFhirServiceCors
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.identityInput"></a>

```go
func IdentityInput() HealthcareFhirServiceIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OciArtifactInput`<sup>Optional</sup> <a name="OciArtifactInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.ociArtifactInput"></a>

```go
func OciArtifactInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `AccessPolicyObjectIds`<sup>Required</sup> <a name="AccessPolicyObjectIds" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.accessPolicyObjectIds"></a>

```go
func AccessPolicyObjectIds() *[]*string
```

- *Type:* *[]*string

---

##### `ConfigurationExportStorageAccountName`<sup>Required</sup> <a name="ConfigurationExportStorageAccountName" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.configurationExportStorageAccountName"></a>

```go
func ConfigurationExportStorageAccountName() *string
```

- *Type:* *string

---

##### `ContainerRegistryLoginServerUrl`<sup>Required</sup> <a name="ContainerRegistryLoginServerUrl" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.containerRegistryLoginServerUrl"></a>

```go
func ContainerRegistryLoginServerUrl() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareFhirServiceAuthentication <a name="HealthcareFhirServiceAuthentication" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

&healthcarefhirservice.HealthcareFhirServiceAuthentication {
	Audience: *string,
	Authority: *string,
	SmartProxyEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.audience">Audience</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#audience HealthcareFhirService#audience}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.authority">Authority</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#authority HealthcareFhirService#authority}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.smartProxyEnabled">SmartProxyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#smart_proxy_enabled HealthcareFhirService#smart_proxy_enabled}. |

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#audience HealthcareFhirService#audience}.

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.authority"></a>

```go
Authority *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#authority HealthcareFhirService#authority}.

---

##### `SmartProxyEnabled`<sup>Optional</sup> <a name="SmartProxyEnabled" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication.property.smartProxyEnabled"></a>

```go
SmartProxyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#smart_proxy_enabled HealthcareFhirService#smart_proxy_enabled}.

---

### HealthcareFhirServiceConfig <a name="HealthcareFhirServiceConfig" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

&healthcarefhirservice.HealthcareFhirServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Authentication: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.healthcareFhirService.HealthcareFhirServiceAuthentication,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	WorkspaceId: *string,
	AccessPolicyObjectIds: *[]*string,
	ConfigurationExportStorageAccountName: *string,
	ContainerRegistryLoginServerUrl: *[]*string,
	Cors: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.healthcareFhirService.HealthcareFhirServiceCors,
	Id: *string,
	Identity: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.healthcareFhirService.HealthcareFhirServiceIdentity,
	Kind: *string,
	OciArtifact: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16.healthcareFhirService.HealthcareFhirServiceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#location HealthcareFhirService#location}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#name HealthcareFhirService#name}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#resource_group_name HealthcareFhirService#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#workspace_id HealthcareFhirService#workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.accessPolicyObjectIds">AccessPolicyObjectIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#access_policy_object_ids HealthcareFhirService#access_policy_object_ids}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.configurationExportStorageAccountName">ConfigurationExportStorageAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#configuration_export_storage_account_name HealthcareFhirService#configuration_export_storage_account_name}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.containerRegistryLoginServerUrl">ContainerRegistryLoginServerUrl</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#container_registry_login_server_url HealthcareFhirService#container_registry_login_server_url}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.cors">Cors</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | cors block. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#id HealthcareFhirService#id}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#kind HealthcareFhirService#kind}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.ociArtifact">OciArtifact</a></code> | <code>interface{}</code> | oci_artifact block. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#tags HealthcareFhirService#tags}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.authentication"></a>

```go
Authentication HealthcareFhirServiceAuthentication
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#authentication HealthcareFhirService#authentication}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#location HealthcareFhirService#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#name HealthcareFhirService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#resource_group_name HealthcareFhirService#resource_group_name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#workspace_id HealthcareFhirService#workspace_id}.

---

##### `AccessPolicyObjectIds`<sup>Optional</sup> <a name="AccessPolicyObjectIds" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.accessPolicyObjectIds"></a>

```go
AccessPolicyObjectIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#access_policy_object_ids HealthcareFhirService#access_policy_object_ids}.

---

##### `ConfigurationExportStorageAccountName`<sup>Optional</sup> <a name="ConfigurationExportStorageAccountName" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.configurationExportStorageAccountName"></a>

```go
ConfigurationExportStorageAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#configuration_export_storage_account_name HealthcareFhirService#configuration_export_storage_account_name}.

---

##### `ContainerRegistryLoginServerUrl`<sup>Optional</sup> <a name="ContainerRegistryLoginServerUrl" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.containerRegistryLoginServerUrl"></a>

```go
ContainerRegistryLoginServerUrl *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#container_registry_login_server_url HealthcareFhirService#container_registry_login_server_url}.

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.cors"></a>

```go
Cors HealthcareFhirServiceCors
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#cors HealthcareFhirService#cors}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#id HealthcareFhirService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.identity"></a>

```go
Identity HealthcareFhirServiceIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#identity HealthcareFhirService#identity}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#kind HealthcareFhirService#kind}.

---

##### `OciArtifact`<sup>Optional</sup> <a name="OciArtifact" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.ociArtifact"></a>

```go
OciArtifact interface{}
```

- *Type:* interface{}

oci_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#oci_artifact HealthcareFhirService#oci_artifact}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#tags HealthcareFhirService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceConfig.property.timeouts"></a>

```go
Timeouts HealthcareFhirServiceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts">HealthcareFhirServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#timeouts HealthcareFhirService#timeouts}

---

### HealthcareFhirServiceCors <a name="HealthcareFhirServiceCors" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

&healthcarefhirservice.HealthcareFhirServiceCors {
	AllowedHeaders: *[]*string,
	AllowedMethods: *[]*string,
	AllowedOrigins: *[]*string,
	CredentialsAllowed: interface{},
	MaxAgeInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#allowed_headers HealthcareFhirService#allowed_headers}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#allowed_methods HealthcareFhirService#allowed_methods}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#allowed_origins HealthcareFhirService#allowed_origins}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.credentialsAllowed">CredentialsAllowed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#credentials_allowed HealthcareFhirService#credentials_allowed}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#max_age_in_seconds HealthcareFhirService#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedHeaders"></a>

```go
AllowedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#allowed_headers HealthcareFhirService#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#allowed_methods HealthcareFhirService#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#allowed_origins HealthcareFhirService#allowed_origins}.

---

##### `CredentialsAllowed`<sup>Optional</sup> <a name="CredentialsAllowed" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.credentialsAllowed"></a>

```go
CredentialsAllowed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#credentials_allowed HealthcareFhirService#credentials_allowed}.

---

##### `MaxAgeInSeconds`<sup>Optional</sup> <a name="MaxAgeInSeconds" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors.property.maxAgeInSeconds"></a>

```go
MaxAgeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#max_age_in_seconds HealthcareFhirService#max_age_in_seconds}.

---

### HealthcareFhirServiceIdentity <a name="HealthcareFhirServiceIdentity" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

&healthcarefhirservice.HealthcareFhirServiceIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#type HealthcareFhirService#type}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#identity_ids HealthcareFhirService#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#type HealthcareFhirService#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#identity_ids HealthcareFhirService#identity_ids}.

---

### HealthcareFhirServiceOciArtifact <a name="HealthcareFhirServiceOciArtifact" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

&healthcarefhirservice.HealthcareFhirServiceOciArtifact {
	LoginServer: *string,
	Digest: *string,
	ImageName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.loginServer">LoginServer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#login_server HealthcareFhirService#login_server}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.digest">Digest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#digest HealthcareFhirService#digest}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#image_name HealthcareFhirService#image_name}. |

---

##### `LoginServer`<sup>Required</sup> <a name="LoginServer" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.loginServer"></a>

```go
LoginServer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#login_server HealthcareFhirService#login_server}.

---

##### `Digest`<sup>Optional</sup> <a name="Digest" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.digest"></a>

```go
Digest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#digest HealthcareFhirService#digest}.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifact.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#image_name HealthcareFhirService#image_name}.

---

### HealthcareFhirServiceTimeouts <a name="HealthcareFhirServiceTimeouts" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

&healthcarefhirservice.HealthcareFhirServiceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#create HealthcareFhirService#create}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#delete HealthcareFhirService#delete}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#read HealthcareFhirService#read}. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#update HealthcareFhirService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#create HealthcareFhirService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#delete HealthcareFhirService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#read HealthcareFhirService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/healthcare_fhir_service#update HealthcareFhirService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareFhirServiceAuthenticationOutputReference <a name="HealthcareFhirServiceAuthenticationOutputReference" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

healthcarefhirservice.NewHealthcareFhirServiceAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareFhirServiceAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resetSmartProxyEnabled">ResetSmartProxyEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSmartProxyEnabled` <a name="ResetSmartProxyEnabled" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.resetSmartProxyEnabled"></a>

```go
func ResetSmartProxyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authorityInput">AuthorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabledInput">SmartProxyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authority">Authority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabled">SmartProxyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `AuthorityInput`<sup>Optional</sup> <a name="AuthorityInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authorityInput"></a>

```go
func AuthorityInput() *string
```

- *Type:* *string

---

##### `SmartProxyEnabledInput`<sup>Optional</sup> <a name="SmartProxyEnabledInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabledInput"></a>

```go
func SmartProxyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.authority"></a>

```go
func Authority() *string
```

- *Type:* *string

---

##### `SmartProxyEnabled`<sup>Required</sup> <a name="SmartProxyEnabled" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.smartProxyEnabled"></a>

```go
func SmartProxyEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareFhirServiceAuthentication
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceAuthentication">HealthcareFhirServiceAuthentication</a>

---


### HealthcareFhirServiceCorsOutputReference <a name="HealthcareFhirServiceCorsOutputReference" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

healthcarefhirservice.NewHealthcareFhirServiceCorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareFhirServiceCorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetCredentialsAllowed">ResetCredentialsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetMaxAgeInSeconds">ResetMaxAgeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialsAllowed` <a name="ResetCredentialsAllowed" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetCredentialsAllowed"></a>

```go
func ResetCredentialsAllowed()
```

##### `ResetMaxAgeInSeconds` <a name="ResetMaxAgeInSeconds" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.resetMaxAgeInSeconds"></a>

```go
func ResetMaxAgeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowedInput">CredentialsAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowed">CredentialsAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeadersInput"></a>

```go
func AllowedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethodsInput"></a>

```go
func AllowedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CredentialsAllowedInput`<sup>Optional</sup> <a name="CredentialsAllowedInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowedInput"></a>

```go
func CredentialsAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSecondsInput"></a>

```go
func MaxAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedHeaders"></a>

```go
func AllowedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `CredentialsAllowed`<sup>Required</sup> <a name="CredentialsAllowed" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.credentialsAllowed"></a>

```go
func CredentialsAllowed() interface{}
```

- *Type:* interface{}

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.maxAgeInSeconds"></a>

```go
func MaxAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCorsOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareFhirServiceCors
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceCors">HealthcareFhirServiceCors</a>

---


### HealthcareFhirServiceIdentityOutputReference <a name="HealthcareFhirServiceIdentityOutputReference" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

healthcarefhirservice.NewHealthcareFhirServiceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareFhirServiceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareFhirServiceIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceIdentity">HealthcareFhirServiceIdentity</a>

---


### HealthcareFhirServiceOciArtifactList <a name="HealthcareFhirServiceOciArtifactList" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

healthcarefhirservice.NewHealthcareFhirServiceOciArtifactList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HealthcareFhirServiceOciArtifactList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.get"></a>

```go
func Get(index *f64) HealthcareFhirServiceOciArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HealthcareFhirServiceOciArtifactOutputReference <a name="HealthcareFhirServiceOciArtifactOutputReference" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

healthcarefhirservice.NewHealthcareFhirServiceOciArtifactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HealthcareFhirServiceOciArtifactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetDigest">ResetDigest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetImageName">ResetImageName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDigest` <a name="ResetDigest" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetDigest"></a>

```go
func ResetDigest()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.resetImageName"></a>

```go
func ResetImageName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digestInput">DigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServerInput">LoginServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServer">LoginServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digestInput"></a>

```go
func DigestInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `LoginServerInput`<sup>Optional</sup> <a name="LoginServerInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServerInput"></a>

```go
func LoginServerInput() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `LoginServer`<sup>Required</sup> <a name="LoginServer" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.loginServer"></a>

```go
func LoginServer() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceOciArtifactOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HealthcareFhirServiceTimeoutsOutputReference <a name="HealthcareFhirServiceTimeoutsOutputReference" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v16/healthcarefhirservice"

healthcarefhirservice.NewHealthcareFhirServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareFhirServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.healthcareFhirService.HealthcareFhirServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



