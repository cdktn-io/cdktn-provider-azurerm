# `horizondbCluster` Submodule <a name="`horizondbCluster` Submodule" id="@cdktn/provider-azurerm.horizondbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizondbCluster <a name="HorizondbCluster" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster azurerm_horizondb_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

horizondbcluster.NewHorizondbCluster(scope Construct, id *string, config HorizondbClusterConfig) HorizondbCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig">HorizondbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig">HorizondbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore">PutPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool">PutReadWritePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPassword">ResetAdministratorPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWo">ResetAdministratorPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWoVersion">ResetAdministratorPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetBackupRetentionInDays">ResetBackupRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetGeoRedundantBackupEnabled">ResetGeoRedundantBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPointInTimeRestore">ResetPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPostgresqlVersion">ResetPostgresqlVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPublicNetworkAccess">ResetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity"></a>

```go
func PutIdentity(value HorizondbClusterIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

---

##### `PutPointInTimeRestore` <a name="PutPointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore"></a>

```go
func PutPointInTimeRestore(value HorizondbClusterPointInTimeRestore)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putPointInTimeRestore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

---

##### `PutReadWritePool` <a name="PutReadWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool"></a>

```go
func PutReadWritePool(value HorizondbClusterReadWritePool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putReadWritePool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts"></a>

```go
func PutTimeouts(value HorizondbClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

---

##### `ResetAdministratorPassword` <a name="ResetAdministratorPassword" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPassword"></a>

```go
func ResetAdministratorPassword()
```

##### `ResetAdministratorPasswordWo` <a name="ResetAdministratorPasswordWo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWo"></a>

```go
func ResetAdministratorPasswordWo()
```

##### `ResetAdministratorPasswordWoVersion` <a name="ResetAdministratorPasswordWoVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetAdministratorPasswordWoVersion"></a>

```go
func ResetAdministratorPasswordWoVersion()
```

##### `ResetBackupRetentionInDays` <a name="ResetBackupRetentionInDays" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetBackupRetentionInDays"></a>

```go
func ResetBackupRetentionInDays()
```

##### `ResetGeoRedundantBackupEnabled` <a name="ResetGeoRedundantBackupEnabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetGeoRedundantBackupEnabled"></a>

```go
func ResetGeoRedundantBackupEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetPointInTimeRestore` <a name="ResetPointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPointInTimeRestore"></a>

```go
func ResetPointInTimeRestore()
```

##### `ResetPostgresqlVersion` <a name="ResetPostgresqlVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPostgresqlVersion"></a>

```go
func ResetPostgresqlVersion()
```

##### `ResetPublicNetworkAccess` <a name="ResetPublicNetworkAccess" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetPublicNetworkAccess"></a>

```go
func ResetPublicNetworkAccess()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a HorizondbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

horizondbcluster.HorizondbCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

horizondbcluster.HorizondbCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

horizondbcluster.HorizondbCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

horizondbcluster.HorizondbCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a HorizondbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HorizondbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HorizondbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the HorizondbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference">HorizondbClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestore">PointInTimeRestore</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference">HorizondbClusterPointInTimeRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePool">ReadWritePool</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference">HorizondbClusterReadWritePoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference">HorizondbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLoginInput">AdministratorLoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordInput">AdministratorPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoInput">AdministratorPasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersionInput">AdministratorPasswordWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDaysInput">BackupRetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabledInput">GeoRedundantBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestoreInput">PointInTimeRestoreInput</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersionInput">PostgresqlVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccessInput">PublicNetworkAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePoolInput">ReadWritePoolInput</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPassword">AdministratorPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWo">AdministratorPasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersion">AdministratorPasswordWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDays">BackupRetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabled">GeoRedundantBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersion">PostgresqlVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identity"></a>

```go
func Identity() HorizondbClusterIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference">HorizondbClusterIdentityOutputReference</a>

---

##### `PointInTimeRestore`<sup>Required</sup> <a name="PointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestore"></a>

```go
func PointInTimeRestore() HorizondbClusterPointInTimeRestoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference">HorizondbClusterPointInTimeRestoreOutputReference</a>

---

##### `ReadWritePool`<sup>Required</sup> <a name="ReadWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePool"></a>

```go
func ReadWritePool() HorizondbClusterReadWritePoolOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference">HorizondbClusterReadWritePoolOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeouts"></a>

```go
func Timeouts() HorizondbClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference">HorizondbClusterTimeoutsOutputReference</a>

---

##### `AdministratorLoginInput`<sup>Optional</sup> <a name="AdministratorLoginInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLoginInput"></a>

```go
func AdministratorLoginInput() *string
```

- *Type:* *string

---

##### `AdministratorPasswordInput`<sup>Optional</sup> <a name="AdministratorPasswordInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordInput"></a>

```go
func AdministratorPasswordInput() *string
```

- *Type:* *string

---

##### `AdministratorPasswordWoInput`<sup>Optional</sup> <a name="AdministratorPasswordWoInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoInput"></a>

```go
func AdministratorPasswordWoInput() *string
```

- *Type:* *string

---

##### `AdministratorPasswordWoVersionInput`<sup>Optional</sup> <a name="AdministratorPasswordWoVersionInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersionInput"></a>

```go
func AdministratorPasswordWoVersionInput() *f64
```

- *Type:* *f64

---

##### `BackupRetentionInDaysInput`<sup>Optional</sup> <a name="BackupRetentionInDaysInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDaysInput"></a>

```go
func BackupRetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `GeoRedundantBackupEnabledInput`<sup>Optional</sup> <a name="GeoRedundantBackupEnabledInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabledInput"></a>

```go
func GeoRedundantBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.identityInput"></a>

```go
func IdentityInput() HorizondbClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PointInTimeRestoreInput`<sup>Optional</sup> <a name="PointInTimeRestoreInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.pointInTimeRestoreInput"></a>

```go
func PointInTimeRestoreInput() HorizondbClusterPointInTimeRestore
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

---

##### `PostgresqlVersionInput`<sup>Optional</sup> <a name="PostgresqlVersionInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersionInput"></a>

```go
func PostgresqlVersionInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessInput`<sup>Optional</sup> <a name="PublicNetworkAccessInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccessInput"></a>

```go
func PublicNetworkAccessInput() *string
```

- *Type:* *string

---

##### `ReadWritePoolInput`<sup>Optional</sup> <a name="ReadWritePoolInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.readWritePoolInput"></a>

```go
func ReadWritePoolInput() HorizondbClusterReadWritePool
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorLogin"></a>

```go
func AdministratorLogin() *string
```

- *Type:* *string

---

##### `AdministratorPassword`<sup>Required</sup> <a name="AdministratorPassword" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPassword"></a>

```go
func AdministratorPassword() *string
```

- *Type:* *string

---

##### ~~`AdministratorPasswordWo`~~<sup>Required</sup> <a name="AdministratorPasswordWo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func AdministratorPasswordWo() *string
```

- *Type:* *string

---

##### `AdministratorPasswordWoVersion`<sup>Required</sup> <a name="AdministratorPasswordWoVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.administratorPasswordWoVersion"></a>

```go
func AdministratorPasswordWoVersion() *f64
```

- *Type:* *f64

---

##### `BackupRetentionInDays`<sup>Required</sup> <a name="BackupRetentionInDays" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.backupRetentionInDays"></a>

```go
func BackupRetentionInDays() *f64
```

- *Type:* *f64

---

##### `GeoRedundantBackupEnabled`<sup>Required</sup> <a name="GeoRedundantBackupEnabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.geoRedundantBackupEnabled"></a>

```go
func GeoRedundantBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PostgresqlVersion`<sup>Required</sup> <a name="PostgresqlVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.postgresqlVersion"></a>

```go
func PostgresqlVersion() *string
```

- *Type:* *string

---

##### `PublicNetworkAccess`<sup>Required</sup> <a name="PublicNetworkAccess" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.publicNetworkAccess"></a>

```go
func PublicNetworkAccess() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HorizondbClusterConfig <a name="HorizondbClusterConfig" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

&horizondbcluster.HorizondbClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AdministratorLogin: *string,
	Location: *string,
	Name: *string,
	ReadWritePool: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.horizondbCluster.HorizondbClusterReadWritePool,
	ResourceGroupName: *string,
	AdministratorPassword: *string,
	AdministratorPasswordWo: *string,
	AdministratorPasswordWoVersion: *f64,
	BackupRetentionInDays: *f64,
	GeoRedundantBackupEnabled: interface{},
	Id: *string,
	Identity: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.horizondbCluster.HorizondbClusterIdentity,
	PointInTimeRestore: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.horizondbCluster.HorizondbClusterPointInTimeRestore,
	PostgresqlVersion: *string,
	PublicNetworkAccess: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.horizondbCluster.HorizondbClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorLogin">AdministratorLogin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.readWritePool">ReadWritePool</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | read_write_pool block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPassword">AdministratorPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWo">AdministratorPasswordWo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWoVersion">AdministratorPasswordWoVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.backupRetentionInDays">BackupRetentionInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.geoRedundantBackupEnabled">GeoRedundantBackupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.pointInTimeRestore">PointInTimeRestore</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | point_in_time_restore block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.postgresqlVersion">PostgresqlVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#tags HorizondbCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorLogin"></a>

```go
AdministratorLogin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_login HorizondbCluster#administrator_login}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#location HorizondbCluster#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}.

---

##### `ReadWritePool`<sup>Required</sup> <a name="ReadWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.readWritePool"></a>

```go
ReadWritePool HorizondbClusterReadWritePool
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

read_write_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read_write_pool HorizondbCluster#read_write_pool}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#resource_group_name HorizondbCluster#resource_group_name}.

---

##### `AdministratorPassword`<sup>Optional</sup> <a name="AdministratorPassword" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPassword"></a>

```go
AdministratorPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password HorizondbCluster#administrator_password}.

---

##### `AdministratorPasswordWo`<sup>Optional</sup> <a name="AdministratorPasswordWo" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWo"></a>

```go
AdministratorPasswordWo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo HorizondbCluster#administrator_password_wo}.

---

##### `AdministratorPasswordWoVersion`<sup>Optional</sup> <a name="AdministratorPasswordWoVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.administratorPasswordWoVersion"></a>

```go
AdministratorPasswordWoVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#administrator_password_wo_version HorizondbCluster#administrator_password_wo_version}.

---

##### `BackupRetentionInDays`<sup>Optional</sup> <a name="BackupRetentionInDays" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.backupRetentionInDays"></a>

```go
BackupRetentionInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#backup_retention_in_days HorizondbCluster#backup_retention_in_days}.

---

##### `GeoRedundantBackupEnabled`<sup>Optional</sup> <a name="GeoRedundantBackupEnabled" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.geoRedundantBackupEnabled"></a>

```go
GeoRedundantBackupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#geo_redundant_backup_enabled HorizondbCluster#geo_redundant_backup_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#id HorizondbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.identity"></a>

```go
Identity HorizondbClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity HorizondbCluster#identity}

---

##### `PointInTimeRestore`<sup>Optional</sup> <a name="PointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.pointInTimeRestore"></a>

```go
PointInTimeRestore HorizondbClusterPointInTimeRestore
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_restore HorizondbCluster#point_in_time_restore}

---

##### `PostgresqlVersion`<sup>Optional</sup> <a name="PostgresqlVersion" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.postgresqlVersion"></a>

```go
PostgresqlVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#postgresql_version HorizondbCluster#postgresql_version}.

---

##### `PublicNetworkAccess`<sup>Optional</sup> <a name="PublicNetworkAccess" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.publicNetworkAccess"></a>

```go
PublicNetworkAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#public_network_access HorizondbCluster#public_network_access}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#tags HorizondbCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterConfig.property.timeouts"></a>

```go
Timeouts HorizondbClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts">HorizondbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#timeouts HorizondbCluster#timeouts}

---

### HorizondbClusterIdentity <a name="HorizondbClusterIdentity" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

&horizondbcluster.HorizondbClusterIdentity {
	IdentityIds: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity_ids HorizondbCluster#identity_ids}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#type HorizondbCluster#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#identity_ids HorizondbCluster#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#type HorizondbCluster#type}.

---

### HorizondbClusterPointInTimeRestore <a name="HorizondbClusterPointInTimeRestore" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

&horizondbcluster.HorizondbClusterPointInTimeRestore {
	PointInTimeUtc: *string,
	SourceHorizondbClusterId: *string,
	SourceLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.pointInTimeUtc">PointInTimeUtc</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_utc HorizondbCluster#point_in_time_utc}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceHorizondbClusterId">SourceHorizondbClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_horizondb_cluster_id HorizondbCluster#source_horizondb_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceLocation">SourceLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_location HorizondbCluster#source_location}. |

---

##### `PointInTimeUtc`<sup>Required</sup> <a name="PointInTimeUtc" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.pointInTimeUtc"></a>

```go
PointInTimeUtc *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#point_in_time_utc HorizondbCluster#point_in_time_utc}.

---

##### `SourceHorizondbClusterId`<sup>Required</sup> <a name="SourceHorizondbClusterId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceHorizondbClusterId"></a>

```go
SourceHorizondbClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_horizondb_cluster_id HorizondbCluster#source_horizondb_cluster_id}.

---

##### `SourceLocation`<sup>Optional</sup> <a name="SourceLocation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore.property.sourceLocation"></a>

```go
SourceLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#source_location HorizondbCluster#source_location}.

---

### HorizondbClusterReadWritePool <a name="HorizondbClusterReadWritePool" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

&horizondbcluster.HorizondbClusterReadWritePool {
	Compute: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19.horizondbCluster.HorizondbClusterReadWritePoolCompute,
	HighAvailabilityMode: *string,
	Name: *string,
	NodeCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.compute">Compute</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a></code> | compute block. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.highAvailabilityMode">HighAvailabilityMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#high_availability_mode HorizondbCluster#high_availability_mode}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#node_count HorizondbCluster#node_count}. |

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.compute"></a>

```go
Compute HorizondbClusterReadWritePoolCompute
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#compute HorizondbCluster#compute}

---

##### `HighAvailabilityMode`<sup>Required</sup> <a name="HighAvailabilityMode" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.highAvailabilityMode"></a>

```go
HighAvailabilityMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#high_availability_mode HorizondbCluster#high_availability_mode}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#name HorizondbCluster#name}.

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#node_count HorizondbCluster#node_count}.

---

### HorizondbClusterReadWritePoolCompute <a name="HorizondbClusterReadWritePoolCompute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

&horizondbcluster.HorizondbClusterReadWritePoolCompute {
	Generation: *f64,
	Processor: *string,
	Vcores: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.generation">Generation</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#generation HorizondbCluster#generation}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.processor">Processor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#processor HorizondbCluster#processor}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.vcores">Vcores</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#vcores HorizondbCluster#vcores}. |

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.generation"></a>

```go
Generation *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#generation HorizondbCluster#generation}.

---

##### `Processor`<sup>Required</sup> <a name="Processor" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.processor"></a>

```go
Processor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#processor HorizondbCluster#processor}.

---

##### `Vcores`<sup>Required</sup> <a name="Vcores" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute.property.vcores"></a>

```go
Vcores *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#vcores HorizondbCluster#vcores}.

---

### HorizondbClusterTimeouts <a name="HorizondbClusterTimeouts" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

&horizondbcluster.HorizondbClusterTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#create HorizondbCluster#create}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#delete HorizondbCluster#delete}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read HorizondbCluster#read}. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#update HorizondbCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#create HorizondbCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#delete HorizondbCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#read HorizondbCluster#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/horizondb_cluster#update HorizondbCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HorizondbClusterIdentityOutputReference <a name="HorizondbClusterIdentityOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

horizondbcluster.NewHorizondbClusterIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizondbClusterIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizondbClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterIdentity">HorizondbClusterIdentity</a>

---


### HorizondbClusterPointInTimeRestoreOutputReference <a name="HorizondbClusterPointInTimeRestoreOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

horizondbcluster.NewHorizondbClusterPointInTimeRestoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizondbClusterPointInTimeRestoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resetSourceLocation">ResetSourceLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceLocation` <a name="ResetSourceLocation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.resetSourceLocation"></a>

```go
func ResetSourceLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtcInput">PointInTimeUtcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterIdInput">SourceHorizondbClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocationInput">SourceLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtc">PointInTimeUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterId">SourceHorizondbClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocation">SourceLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PointInTimeUtcInput`<sup>Optional</sup> <a name="PointInTimeUtcInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtcInput"></a>

```go
func PointInTimeUtcInput() *string
```

- *Type:* *string

---

##### `SourceHorizondbClusterIdInput`<sup>Optional</sup> <a name="SourceHorizondbClusterIdInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterIdInput"></a>

```go
func SourceHorizondbClusterIdInput() *string
```

- *Type:* *string

---

##### `SourceLocationInput`<sup>Optional</sup> <a name="SourceLocationInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocationInput"></a>

```go
func SourceLocationInput() *string
```

- *Type:* *string

---

##### `PointInTimeUtc`<sup>Required</sup> <a name="PointInTimeUtc" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.pointInTimeUtc"></a>

```go
func PointInTimeUtc() *string
```

- *Type:* *string

---

##### `SourceHorizondbClusterId`<sup>Required</sup> <a name="SourceHorizondbClusterId" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceHorizondbClusterId"></a>

```go
func SourceHorizondbClusterId() *string
```

- *Type:* *string

---

##### `SourceLocation`<sup>Required</sup> <a name="SourceLocation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.sourceLocation"></a>

```go
func SourceLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestoreOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizondbClusterPointInTimeRestore
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterPointInTimeRestore">HorizondbClusterPointInTimeRestore</a>

---


### HorizondbClusterReadWritePoolComputeOutputReference <a name="HorizondbClusterReadWritePoolComputeOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

horizondbcluster.NewHorizondbClusterReadWritePoolComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizondbClusterReadWritePoolComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generationInput">GenerationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processorInput">ProcessorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcoresInput">VcoresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processor">Processor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcores">Vcores</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generationInput"></a>

```go
func GenerationInput() *f64
```

- *Type:* *f64

---

##### `ProcessorInput`<sup>Optional</sup> <a name="ProcessorInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processorInput"></a>

```go
func ProcessorInput() *string
```

- *Type:* *string

---

##### `VcoresInput`<sup>Optional</sup> <a name="VcoresInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcoresInput"></a>

```go
func VcoresInput() *f64
```

- *Type:* *f64

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `Processor`<sup>Required</sup> <a name="Processor" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.processor"></a>

```go
func Processor() *string
```

- *Type:* *string

---

##### `Vcores`<sup>Required</sup> <a name="Vcores" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.vcores"></a>

```go
func Vcores() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizondbClusterReadWritePoolCompute
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

---


### HorizondbClusterReadWritePoolOutputReference <a name="HorizondbClusterReadWritePoolOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

horizondbcluster.NewHorizondbClusterReadWritePoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizondbClusterReadWritePoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute">PutCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompute` <a name="PutCompute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute"></a>

```go
func PutCompute(value HorizondbClusterReadWritePoolCompute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.compute">Compute</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference">HorizondbClusterReadWritePoolComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.computeInput">ComputeInput</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityModeInput">HighAvailabilityModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityMode">HighAvailabilityMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.compute"></a>

```go
func Compute() HorizondbClusterReadWritePoolComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolComputeOutputReference">HorizondbClusterReadWritePoolComputeOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ComputeInput`<sup>Optional</sup> <a name="ComputeInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.computeInput"></a>

```go
func ComputeInput() HorizondbClusterReadWritePoolCompute
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolCompute">HorizondbClusterReadWritePoolCompute</a>

---

##### `HighAvailabilityModeInput`<sup>Optional</sup> <a name="HighAvailabilityModeInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityModeInput"></a>

```go
func HighAvailabilityModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `HighAvailabilityMode`<sup>Required</sup> <a name="HighAvailabilityMode" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.highAvailabilityMode"></a>

```go
func HighAvailabilityMode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePoolOutputReference.property.internalValue"></a>

```go
func InternalValue() HorizondbClusterReadWritePool
```

- *Type:* <a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterReadWritePool">HorizondbClusterReadWritePool</a>

---


### HorizondbClusterTimeoutsOutputReference <a name="HorizondbClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v19/horizondbcluster"

horizondbcluster.NewHorizondbClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HorizondbClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.horizondbCluster.HorizondbClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



