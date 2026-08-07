# `mssqlServer` Submodule <a name="`mssqlServer` Submodule" id="@cdktn/provider-azurerm.mssqlServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServer <a name="MssqlServer" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server azurerm_mssql_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/mssqlserver"

mssqlserver.NewMssqlServer(scope Construct, id *string, config MssqlServerConfig) MssqlServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig">MssqlServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig">MssqlServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.putAzureadAdministrator">PutAzureadAdministrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLogin">ResetAdministratorLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLoginPassword">ResetAdministratorLoginPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLoginPasswordWo">ResetAdministratorLoginPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLoginPasswordWoVersion">ResetAdministratorLoginPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetAzureadAdministrator">ResetAzureadAdministrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetConnectionPolicy">ResetConnectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetExpressVulnerabilityAssessmentEnabled">ResetExpressVulnerabilityAssessmentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetMinimumTlsVersion">ResetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetOutboundNetworkRestrictionEnabled">ResetOutboundNetworkRestrictionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetPrimaryUserAssignedIdentityId">ResetPrimaryUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetTransparentDataEncryptionKeyVaultKeyId">ResetTransparentDataEncryptionKeyVaultKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAzureadAdministrator` <a name="PutAzureadAdministrator" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.putAzureadAdministrator"></a>

```go
func PutAzureadAdministrator(value MssqlServerAzureadAdministrator)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.putAzureadAdministrator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.putIdentity"></a>

```go
func PutIdentity(value MssqlServerIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.putTimeouts"></a>

```go
func PutTimeouts(value MssqlServerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts">MssqlServerTimeouts</a>

---

##### `ResetAdministratorLogin` <a name="ResetAdministratorLogin" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLogin"></a>

```go
func ResetAdministratorLogin()
```

##### `ResetAdministratorLoginPassword` <a name="ResetAdministratorLoginPassword" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLoginPassword"></a>

```go
func ResetAdministratorLoginPassword()
```

##### `ResetAdministratorLoginPasswordWo` <a name="ResetAdministratorLoginPasswordWo" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLoginPasswordWo"></a>

```go
func ResetAdministratorLoginPasswordWo()
```

##### `ResetAdministratorLoginPasswordWoVersion` <a name="ResetAdministratorLoginPasswordWoVersion" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLoginPasswordWoVersion"></a>

```go
func ResetAdministratorLoginPasswordWoVersion()
```

##### `ResetAzureadAdministrator` <a name="ResetAzureadAdministrator" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetAzureadAdministrator"></a>

```go
func ResetAzureadAdministrator()
```

##### `ResetConnectionPolicy` <a name="ResetConnectionPolicy" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetConnectionPolicy"></a>

```go
func ResetConnectionPolicy()
```

##### `ResetExpressVulnerabilityAssessmentEnabled` <a name="ResetExpressVulnerabilityAssessmentEnabled" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetExpressVulnerabilityAssessmentEnabled"></a>

```go
func ResetExpressVulnerabilityAssessmentEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetMinimumTlsVersion` <a name="ResetMinimumTlsVersion" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetMinimumTlsVersion"></a>

```go
func ResetMinimumTlsVersion()
```

##### `ResetOutboundNetworkRestrictionEnabled` <a name="ResetOutboundNetworkRestrictionEnabled" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetOutboundNetworkRestrictionEnabled"></a>

```go
func ResetOutboundNetworkRestrictionEnabled()
```

##### `ResetPrimaryUserAssignedIdentityId` <a name="ResetPrimaryUserAssignedIdentityId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetPrimaryUserAssignedIdentityId"></a>

```go
func ResetPrimaryUserAssignedIdentityId()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransparentDataEncryptionKeyVaultKeyId` <a name="ResetTransparentDataEncryptionKeyVaultKeyId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.resetTransparentDataEncryptionKeyVaultKeyId"></a>

```go
func ResetTransparentDataEncryptionKeyVaultKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MssqlServer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/mssqlserver"

mssqlserver.MssqlServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/mssqlserver"

mssqlserver.MssqlServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/mssqlserver"

mssqlserver.MssqlServer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/mssqlserver"

mssqlserver.MssqlServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MssqlServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MssqlServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MssqlServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MssqlServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.azureadAdministrator">AzureadAdministrator</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference">MssqlServerAzureadAdministratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.fullyQualifiedDomainName">FullyQualifiedDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference">MssqlServerIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.restorableDroppedDatabaseIds">RestorableDroppedDatabaseIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference">MssqlServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginInput">AdministratorLoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordInput">AdministratorLoginPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWoInput">AdministratorLoginPasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWoVersionInput">AdministratorLoginPasswordWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.azureadAdministratorInput">AzureadAdministratorInput</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.connectionPolicyInput">ConnectionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.expressVulnerabilityAssessmentEnabledInput">ExpressVulnerabilityAssessmentEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.minimumTlsVersionInput">MinimumTlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.outboundNetworkRestrictionEnabledInput">OutboundNetworkRestrictionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.primaryUserAssignedIdentityIdInput">PrimaryUserAssignedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.transparentDataEncryptionKeyVaultKeyIdInput">TransparentDataEncryptionKeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWo">AdministratorLoginPasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWoVersion">AdministratorLoginPasswordWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.connectionPolicy">ConnectionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.expressVulnerabilityAssessmentEnabled">ExpressVulnerabilityAssessmentEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.outboundNetworkRestrictionEnabled">OutboundNetworkRestrictionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.primaryUserAssignedIdentityId">PrimaryUserAssignedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.transparentDataEncryptionKeyVaultKeyId">TransparentDataEncryptionKeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AzureadAdministrator`<sup>Required</sup> <a name="AzureadAdministrator" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.azureadAdministrator"></a>

```go
func AzureadAdministrator() MssqlServerAzureadAdministratorOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference">MssqlServerAzureadAdministratorOutputReference</a>

---

##### `FullyQualifiedDomainName`<sup>Required</sup> <a name="FullyQualifiedDomainName" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.fullyQualifiedDomainName"></a>

```go
func FullyQualifiedDomainName() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.identity"></a>

```go
func Identity() MssqlServerIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference">MssqlServerIdentityOutputReference</a>

---

##### `RestorableDroppedDatabaseIds`<sup>Required</sup> <a name="RestorableDroppedDatabaseIds" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.restorableDroppedDatabaseIds"></a>

```go
func RestorableDroppedDatabaseIds() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.timeouts"></a>

```go
func Timeouts() MssqlServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference">MssqlServerTimeoutsOutputReference</a>

---

##### `AdministratorLoginInput`<sup>Optional</sup> <a name="AdministratorLoginInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginInput"></a>

```go
func AdministratorLoginInput() *string
```

- *Type:* *string

---

##### `AdministratorLoginPasswordInput`<sup>Optional</sup> <a name="AdministratorLoginPasswordInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordInput"></a>

```go
func AdministratorLoginPasswordInput() *string
```

- *Type:* *string

---

##### `AdministratorLoginPasswordWoInput`<sup>Optional</sup> <a name="AdministratorLoginPasswordWoInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWoInput"></a>

```go
func AdministratorLoginPasswordWoInput() *string
```

- *Type:* *string

---

##### `AdministratorLoginPasswordWoVersionInput`<sup>Optional</sup> <a name="AdministratorLoginPasswordWoVersionInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWoVersionInput"></a>

```go
func AdministratorLoginPasswordWoVersionInput() *f64
```

- *Type:* *f64

---

##### `AzureadAdministratorInput`<sup>Optional</sup> <a name="AzureadAdministratorInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.azureadAdministratorInput"></a>

```go
func AzureadAdministratorInput() MssqlServerAzureadAdministrator
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a>

---

##### `ConnectionPolicyInput`<sup>Optional</sup> <a name="ConnectionPolicyInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.connectionPolicyInput"></a>

```go
func ConnectionPolicyInput() *string
```

- *Type:* *string

---

##### `ExpressVulnerabilityAssessmentEnabledInput`<sup>Optional</sup> <a name="ExpressVulnerabilityAssessmentEnabledInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.expressVulnerabilityAssessmentEnabledInput"></a>

```go
func ExpressVulnerabilityAssessmentEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.identityInput"></a>

```go
func IdentityInput() MssqlServerIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MinimumTlsVersionInput`<sup>Optional</sup> <a name="MinimumTlsVersionInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.minimumTlsVersionInput"></a>

```go
func MinimumTlsVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutboundNetworkRestrictionEnabledInput`<sup>Optional</sup> <a name="OutboundNetworkRestrictionEnabledInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.outboundNetworkRestrictionEnabledInput"></a>

```go
func OutboundNetworkRestrictionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryUserAssignedIdentityIdInput`<sup>Optional</sup> <a name="PrimaryUserAssignedIdentityIdInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.primaryUserAssignedIdentityIdInput"></a>

```go
func PrimaryUserAssignedIdentityIdInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransparentDataEncryptionKeyVaultKeyIdInput`<sup>Optional</sup> <a name="TransparentDataEncryptionKeyVaultKeyIdInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.transparentDataEncryptionKeyVaultKeyIdInput"></a>

```go
func TransparentDataEncryptionKeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLogin"></a>

```go
func AdministratorLogin() *string
```

- *Type:* *string

---

##### `AdministratorLoginPassword`<sup>Required</sup> <a name="AdministratorLoginPassword" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPassword"></a>

```go
func AdministratorLoginPassword() *string
```

- *Type:* *string

---

##### ~~`AdministratorLoginPasswordWo`~~<sup>Required</sup> <a name="AdministratorLoginPasswordWo" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func AdministratorLoginPasswordWo() *string
```

- *Type:* *string

---

##### `AdministratorLoginPasswordWoVersion`<sup>Required</sup> <a name="AdministratorLoginPasswordWoVersion" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWoVersion"></a>

```go
func AdministratorLoginPasswordWoVersion() *f64
```

- *Type:* *f64

---

##### `ConnectionPolicy`<sup>Required</sup> <a name="ConnectionPolicy" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.connectionPolicy"></a>

```go
func ConnectionPolicy() *string
```

- *Type:* *string

---

##### `ExpressVulnerabilityAssessmentEnabled`<sup>Required</sup> <a name="ExpressVulnerabilityAssessmentEnabled" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.expressVulnerabilityAssessmentEnabled"></a>

```go
func ExpressVulnerabilityAssessmentEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.minimumTlsVersion"></a>

```go
func MinimumTlsVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutboundNetworkRestrictionEnabled`<sup>Required</sup> <a name="OutboundNetworkRestrictionEnabled" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.outboundNetworkRestrictionEnabled"></a>

```go
func OutboundNetworkRestrictionEnabled() interface{}
```

- *Type:* interface{}

---

##### `PrimaryUserAssignedIdentityId`<sup>Required</sup> <a name="PrimaryUserAssignedIdentityId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.primaryUserAssignedIdentityId"></a>

```go
func PrimaryUserAssignedIdentityId() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransparentDataEncryptionKeyVaultKeyId`<sup>Required</sup> <a name="TransparentDataEncryptionKeyVaultKeyId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.transparentDataEncryptionKeyVaultKeyId"></a>

```go
func TransparentDataEncryptionKeyVaultKeyId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.mssqlServer.MssqlServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerAzureadAdministrator <a name="MssqlServerAzureadAdministrator" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/mssqlserver"

&mssqlserver.MssqlServerAzureadAdministrator {
	LoginUsername: *string,
	ObjectId: *string,
	AzureadAuthenticationOnly: interface{},
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.loginUsername">LoginUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#login_username MssqlServer#login_username}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#object_id MssqlServer#object_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#azuread_authentication_only MssqlServer#azuread_authentication_only}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#tenant_id MssqlServer#tenant_id}. |

---

##### `LoginUsername`<sup>Required</sup> <a name="LoginUsername" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.loginUsername"></a>

```go
LoginUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#login_username MssqlServer#login_username}.

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#object_id MssqlServer#object_id}.

---

##### `AzureadAuthenticationOnly`<sup>Optional</sup> <a name="AzureadAuthenticationOnly" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.azureadAuthenticationOnly"></a>

```go
AzureadAuthenticationOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#azuread_authentication_only MssqlServer#azuread_authentication_only}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#tenant_id MssqlServer#tenant_id}.

---

### MssqlServerConfig <a name="MssqlServerConfig" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/mssqlserver"

&mssqlserver.MssqlServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Version: *string,
	AdministratorLogin: *string,
	AdministratorLoginPassword: *string,
	AdministratorLoginPasswordWo: *string,
	AdministratorLoginPasswordWoVersion: *f64,
	AzureadAdministrator: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.mssqlServer.MssqlServerAzureadAdministrator,
	ConnectionPolicy: *string,
	ExpressVulnerabilityAssessmentEnabled: interface{},
	Id: *string,
	Identity: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.mssqlServer.MssqlServerIdentity,
	MinimumTlsVersion: *string,
	OutboundNetworkRestrictionEnabled: interface{},
	PrimaryUserAssignedIdentityId: *string,
	PublicNetworkAccessEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.mssqlServer.MssqlServerTimeouts,
	TransparentDataEncryptionKeyVaultKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#location MssqlServer#location}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#name MssqlServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#resource_group_name MssqlServer#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#version MssqlServer#version}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#administrator_login MssqlServer#administrator_login}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#administrator_login_password MssqlServer#administrator_login_password}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLoginPasswordWo">AdministratorLoginPasswordWo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#administrator_login_password_wo MssqlServer#administrator_login_password_wo}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLoginPasswordWoVersion">AdministratorLoginPasswordWoVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#administrator_login_password_wo_version MssqlServer#administrator_login_password_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.azureadAdministrator">AzureadAdministrator</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a></code> | azuread_administrator block. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.connectionPolicy">ConnectionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#connection_policy MssqlServer#connection_policy}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.expressVulnerabilityAssessmentEnabled">ExpressVulnerabilityAssessmentEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#express_vulnerability_assessment_enabled MssqlServer#express_vulnerability_assessment_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#id MssqlServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#minimum_tls_version MssqlServer#minimum_tls_version}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.outboundNetworkRestrictionEnabled">OutboundNetworkRestrictionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#outbound_network_restriction_enabled MssqlServer#outbound_network_restriction_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.primaryUserAssignedIdentityId">PrimaryUserAssignedIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#primary_user_assigned_identity_id MssqlServer#primary_user_assigned_identity_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#public_network_access_enabled MssqlServer#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#tags MssqlServer#tags}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts">MssqlServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.transparentDataEncryptionKeyVaultKeyId">TransparentDataEncryptionKeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#transparent_data_encryption_key_vault_key_id MssqlServer#transparent_data_encryption_key_vault_key_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#location MssqlServer#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#name MssqlServer#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#resource_group_name MssqlServer#resource_group_name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#version MssqlServer#version}.

---

##### `AdministratorLogin`<sup>Optional</sup> <a name="AdministratorLogin" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLogin"></a>

```go
AdministratorLogin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#administrator_login MssqlServer#administrator_login}.

---

##### `AdministratorLoginPassword`<sup>Optional</sup> <a name="AdministratorLoginPassword" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLoginPassword"></a>

```go
AdministratorLoginPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#administrator_login_password MssqlServer#administrator_login_password}.

---

##### `AdministratorLoginPasswordWo`<sup>Optional</sup> <a name="AdministratorLoginPasswordWo" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLoginPasswordWo"></a>

```go
AdministratorLoginPasswordWo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#administrator_login_password_wo MssqlServer#administrator_login_password_wo}.

---

##### `AdministratorLoginPasswordWoVersion`<sup>Optional</sup> <a name="AdministratorLoginPasswordWoVersion" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLoginPasswordWoVersion"></a>

```go
AdministratorLoginPasswordWoVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#administrator_login_password_wo_version MssqlServer#administrator_login_password_wo_version}.

---

##### `AzureadAdministrator`<sup>Optional</sup> <a name="AzureadAdministrator" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.azureadAdministrator"></a>

```go
AzureadAdministrator MssqlServerAzureadAdministrator
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a>

azuread_administrator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#azuread_administrator MssqlServer#azuread_administrator}

---

##### `ConnectionPolicy`<sup>Optional</sup> <a name="ConnectionPolicy" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.connectionPolicy"></a>

```go
ConnectionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#connection_policy MssqlServer#connection_policy}.

---

##### `ExpressVulnerabilityAssessmentEnabled`<sup>Optional</sup> <a name="ExpressVulnerabilityAssessmentEnabled" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.expressVulnerabilityAssessmentEnabled"></a>

```go
ExpressVulnerabilityAssessmentEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#express_vulnerability_assessment_enabled MssqlServer#express_vulnerability_assessment_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#id MssqlServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.identity"></a>

```go
Identity MssqlServerIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#identity MssqlServer#identity}

---

##### `MinimumTlsVersion`<sup>Optional</sup> <a name="MinimumTlsVersion" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.minimumTlsVersion"></a>

```go
MinimumTlsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#minimum_tls_version MssqlServer#minimum_tls_version}.

---

##### `OutboundNetworkRestrictionEnabled`<sup>Optional</sup> <a name="OutboundNetworkRestrictionEnabled" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.outboundNetworkRestrictionEnabled"></a>

```go
OutboundNetworkRestrictionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#outbound_network_restriction_enabled MssqlServer#outbound_network_restriction_enabled}.

---

##### `PrimaryUserAssignedIdentityId`<sup>Optional</sup> <a name="PrimaryUserAssignedIdentityId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.primaryUserAssignedIdentityId"></a>

```go
PrimaryUserAssignedIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#primary_user_assigned_identity_id MssqlServer#primary_user_assigned_identity_id}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#public_network_access_enabled MssqlServer#public_network_access_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#tags MssqlServer#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.timeouts"></a>

```go
Timeouts MssqlServerTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts">MssqlServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#timeouts MssqlServer#timeouts}

---

##### `TransparentDataEncryptionKeyVaultKeyId`<sup>Optional</sup> <a name="TransparentDataEncryptionKeyVaultKeyId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerConfig.property.transparentDataEncryptionKeyVaultKeyId"></a>

```go
TransparentDataEncryptionKeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#transparent_data_encryption_key_vault_key_id MssqlServer#transparent_data_encryption_key_vault_key_id}.

---

### MssqlServerIdentity <a name="MssqlServerIdentity" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/mssqlserver"

&mssqlserver.MssqlServerIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#type MssqlServer#type}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#identity_ids MssqlServer#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#type MssqlServer#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#identity_ids MssqlServer#identity_ids}.

---

### MssqlServerTimeouts <a name="MssqlServerTimeouts" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/mssqlserver"

&mssqlserver.MssqlServerTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#create MssqlServer#create}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#delete MssqlServer#delete}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#read MssqlServer#read}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#update MssqlServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#create MssqlServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#delete MssqlServer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#read MssqlServer#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/mssql_server#update MssqlServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerAzureadAdministratorOutputReference <a name="MssqlServerAzureadAdministratorOutputReference" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/mssqlserver"

mssqlserver.NewMssqlServerAzureadAdministratorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlServerAzureadAdministratorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resetAzureadAuthenticationOnly">ResetAzureadAuthenticationOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureadAuthenticationOnly` <a name="ResetAzureadAuthenticationOnly" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resetAzureadAuthenticationOnly"></a>

```go
func ResetAzureadAuthenticationOnly()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.azureadAuthenticationOnlyInput">AzureadAuthenticationOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.loginUsernameInput">LoginUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.azureadAuthenticationOnly">AzureadAuthenticationOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.loginUsername">LoginUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureadAuthenticationOnlyInput`<sup>Optional</sup> <a name="AzureadAuthenticationOnlyInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.azureadAuthenticationOnlyInput"></a>

```go
func AzureadAuthenticationOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `LoginUsernameInput`<sup>Optional</sup> <a name="LoginUsernameInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.loginUsernameInput"></a>

```go
func LoginUsernameInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `AzureadAuthenticationOnly`<sup>Required</sup> <a name="AzureadAuthenticationOnly" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.azureadAuthenticationOnly"></a>

```go
func AzureadAuthenticationOnly() interface{}
```

- *Type:* interface{}

---

##### `LoginUsername`<sup>Required</sup> <a name="LoginUsername" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.loginUsername"></a>

```go
func LoginUsername() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlServerAzureadAdministrator
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a>

---


### MssqlServerIdentityOutputReference <a name="MssqlServerIdentityOutputReference" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/mssqlserver"

mssqlserver.NewMssqlServerIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlServerIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() MssqlServerIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a>

---


### MssqlServerTimeoutsOutputReference <a name="MssqlServerTimeoutsOutputReference" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/mssqlserver"

mssqlserver.NewMssqlServerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MssqlServerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



