# `netappVolumeBucketWithServer` Submodule <a name="`netappVolumeBucketWithServer` Submodule" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeBucketWithServer <a name="NetappVolumeBucketWithServer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server azurerm_netapp_volume_bucket_with_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

netappvolumebucketwithserver.NewNetappVolumeBucketWithServer(scope Construct, id *string, config NetappVolumeBucketWithServerConfig) NetappVolumeBucketWithServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig">NetappVolumeBucketWithServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig">NetappVolumeBucketWithServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putFileSystemNfsUser">PutFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putKeyVault">PutKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putServer">PutServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetFileSystemCifsUsername">ResetFileSystemCifsUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetFileSystemNfsUser">ResetFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetKeyVault">ResetKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFileSystemNfsUser` <a name="PutFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putFileSystemNfsUser"></a>

```go
func PutFileSystemNfsUser(value NetappVolumeBucketWithServerFileSystemNfsUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putFileSystemNfsUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

---

##### `PutKeyVault` <a name="PutKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putKeyVault"></a>

```go
func PutKeyVault(value NetappVolumeBucketWithServerKeyVault)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

---

##### `PutServer` <a name="PutServer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putServer"></a>

```go
func PutServer(value NetappVolumeBucketWithServerServer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putServer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putTimeouts"></a>

```go
func PutTimeouts(value NetappVolumeBucketWithServerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a>

---

##### `ResetFileSystemCifsUsername` <a name="ResetFileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetFileSystemCifsUsername"></a>

```go
func ResetFileSystemCifsUsername()
```

##### `ResetFileSystemNfsUser` <a name="ResetFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetFileSystemNfsUser"></a>

```go
func ResetFileSystemNfsUser()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyVault` <a name="ResetKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetKeyVault"></a>

```go
func ResetKeyVault()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetappVolumeBucketWithServer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

netappvolumebucketwithserver.NetappVolumeBucketWithServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

netappvolumebucketwithserver.NetappVolumeBucketWithServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

netappvolumebucketwithserver.NetappVolumeBucketWithServer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

netappvolumebucketwithserver.NetappVolumeBucketWithServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetappVolumeBucketWithServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetappVolumeBucketWithServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetappVolumeBucketWithServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetappVolumeBucketWithServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemNfsUser">FileSystemNfsUser</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference">NetappVolumeBucketWithServerFileSystemNfsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.keyVault">KeyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference">NetappVolumeBucketWithServerKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.server">Server</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference">NetappVolumeBucketWithServerServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverCertificateCommonName">ServerCertificateCommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverCertificateExpiryDate">ServerCertificateExpiryDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverIpAddress">ServerIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference">NetappVolumeBucketWithServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemCifsUsernameInput">FileSystemCifsUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemNfsUserInput">FileSystemNfsUserInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.keyVaultInput">KeyVaultInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverInput">ServerInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.volumeIdInput">VolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemCifsUsername">FileSystemCifsUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FileSystemNfsUser`<sup>Required</sup> <a name="FileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemNfsUser"></a>

```go
func FileSystemNfsUser() NetappVolumeBucketWithServerFileSystemNfsUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference">NetappVolumeBucketWithServerFileSystemNfsUserOutputReference</a>

---

##### `KeyVault`<sup>Required</sup> <a name="KeyVault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.keyVault"></a>

```go
func KeyVault() NetappVolumeBucketWithServerKeyVaultOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference">NetappVolumeBucketWithServerKeyVaultOutputReference</a>

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.server"></a>

```go
func Server() NetappVolumeBucketWithServerServerOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference">NetappVolumeBucketWithServerServerOutputReference</a>

---

##### `ServerCertificateCommonName`<sup>Required</sup> <a name="ServerCertificateCommonName" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverCertificateCommonName"></a>

```go
func ServerCertificateCommonName() *string
```

- *Type:* *string

---

##### `ServerCertificateExpiryDate`<sup>Required</sup> <a name="ServerCertificateExpiryDate" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverCertificateExpiryDate"></a>

```go
func ServerCertificateExpiryDate() *string
```

- *Type:* *string

---

##### `ServerIpAddress`<sup>Required</sup> <a name="ServerIpAddress" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverIpAddress"></a>

```go
func ServerIpAddress() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.timeouts"></a>

```go
func Timeouts() NetappVolumeBucketWithServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference">NetappVolumeBucketWithServerTimeoutsOutputReference</a>

---

##### `FileSystemCifsUsernameInput`<sup>Optional</sup> <a name="FileSystemCifsUsernameInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemCifsUsernameInput"></a>

```go
func FileSystemCifsUsernameInput() *string
```

- *Type:* *string

---

##### `FileSystemNfsUserInput`<sup>Optional</sup> <a name="FileSystemNfsUserInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemNfsUserInput"></a>

```go
func FileSystemNfsUserInput() NetappVolumeBucketWithServerFileSystemNfsUser
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultInput`<sup>Optional</sup> <a name="KeyVaultInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.keyVaultInput"></a>

```go
func KeyVaultInput() NetappVolumeBucketWithServerKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.serverInput"></a>

```go
func ServerInput() NetappVolumeBucketWithServerServer
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.volumeIdInput"></a>

```go
func VolumeIdInput() *string
```

- *Type:* *string

---

##### `FileSystemCifsUsername`<sup>Required</sup> <a name="FileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.fileSystemCifsUsername"></a>

```go
func FileSystemCifsUsername() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeBucketWithServerConfig <a name="NetappVolumeBucketWithServerConfig" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

&netappvolumebucketwithserver.NetappVolumeBucketWithServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Server: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer,
	VolumeId: *string,
	FileSystemCifsUsername: *string,
	FileSystemNfsUser: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser,
	Id: *string,
	KeyVault: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault,
	Path: *string,
	Permissions: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#name NetappVolumeBucketWithServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.server">Server</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a></code> | server block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.volumeId">VolumeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#volume_id NetappVolumeBucketWithServer#volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.fileSystemCifsUsername">FileSystemCifsUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#file_system_cifs_username NetappVolumeBucketWithServer#file_system_cifs_username}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.fileSystemNfsUser">FileSystemNfsUser</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a></code> | file_system_nfs_user block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#id NetappVolumeBucketWithServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.keyVault">KeyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#path NetappVolumeBucketWithServer#path}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.permissions">Permissions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#permissions NetappVolumeBucketWithServer#permissions}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#name NetappVolumeBucketWithServer#name}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.server"></a>

```go
Server NetappVolumeBucketWithServerServer
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#server NetappVolumeBucketWithServer#server}

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.volumeId"></a>

```go
VolumeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#volume_id NetappVolumeBucketWithServer#volume_id}.

---

##### `FileSystemCifsUsername`<sup>Optional</sup> <a name="FileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.fileSystemCifsUsername"></a>

```go
FileSystemCifsUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#file_system_cifs_username NetappVolumeBucketWithServer#file_system_cifs_username}.

---

##### `FileSystemNfsUser`<sup>Optional</sup> <a name="FileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.fileSystemNfsUser"></a>

```go
FileSystemNfsUser NetappVolumeBucketWithServerFileSystemNfsUser
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

file_system_nfs_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#file_system_nfs_user NetappVolumeBucketWithServer#file_system_nfs_user}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#id NetappVolumeBucketWithServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVault`<sup>Optional</sup> <a name="KeyVault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.keyVault"></a>

```go
KeyVault NetappVolumeBucketWithServerKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#key_vault NetappVolumeBucketWithServer#key_vault}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#path NetappVolumeBucketWithServer#path}.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#permissions NetappVolumeBucketWithServer#permissions}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerConfig.property.timeouts"></a>

```go
Timeouts NetappVolumeBucketWithServerTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts">NetappVolumeBucketWithServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#timeouts NetappVolumeBucketWithServer#timeouts}

---

### NetappVolumeBucketWithServerFileSystemNfsUser <a name="NetappVolumeBucketWithServerFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

&netappvolumebucketwithserver.NetappVolumeBucketWithServerFileSystemNfsUser {
	GroupId: *f64,
	UserId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.property.groupId">GroupId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#group_id NetappVolumeBucketWithServer#group_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.property.userId">UserId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#user_id NetappVolumeBucketWithServer#user_id}. |

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.property.groupId"></a>

```go
GroupId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#group_id NetappVolumeBucketWithServer#group_id}.

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser.property.userId"></a>

```go
UserId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#user_id NetappVolumeBucketWithServer#user_id}.

---

### NetappVolumeBucketWithServerKeyVault <a name="NetappVolumeBucketWithServerKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

&netappvolumebucketwithserver.NetappVolumeBucketWithServerKeyVault {
	CertificateKeyVaultUri: *string,
	CertificateName: *string,
	CredentialsKeyVaultUri: *string,
	CredentialsSecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.certificateKeyVaultUri">CertificateKeyVaultUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_key_vault_uri NetappVolumeBucketWithServer#certificate_key_vault_uri}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.certificateName">CertificateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_name NetappVolumeBucketWithServer#certificate_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.credentialsKeyVaultUri">CredentialsKeyVaultUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#credentials_key_vault_uri NetappVolumeBucketWithServer#credentials_key_vault_uri}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.credentialsSecretName">CredentialsSecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#credentials_secret_name NetappVolumeBucketWithServer#credentials_secret_name}. |

---

##### `CertificateKeyVaultUri`<sup>Required</sup> <a name="CertificateKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.certificateKeyVaultUri"></a>

```go
CertificateKeyVaultUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_key_vault_uri NetappVolumeBucketWithServer#certificate_key_vault_uri}.

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_name NetappVolumeBucketWithServer#certificate_name}.

---

##### `CredentialsKeyVaultUri`<sup>Required</sup> <a name="CredentialsKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.credentialsKeyVaultUri"></a>

```go
CredentialsKeyVaultUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#credentials_key_vault_uri NetappVolumeBucketWithServer#credentials_key_vault_uri}.

---

##### `CredentialsSecretName`<sup>Required</sup> <a name="CredentialsSecretName" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault.property.credentialsSecretName"></a>

```go
CredentialsSecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#credentials_secret_name NetappVolumeBucketWithServer#credentials_secret_name}.

---

### NetappVolumeBucketWithServerServer <a name="NetappVolumeBucketWithServerServer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

&netappvolumebucketwithserver.NetappVolumeBucketWithServerServer {
	Fqdn: *string,
	CertificatePem: *string,
	OnCertificateConflictAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.fqdn">Fqdn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#fqdn NetappVolumeBucketWithServer#fqdn}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.certificatePem">CertificatePem</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_pem NetappVolumeBucketWithServer#certificate_pem}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.onCertificateConflictAction">OnCertificateConflictAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#on_certificate_conflict_action NetappVolumeBucketWithServer#on_certificate_conflict_action}. |

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#fqdn NetappVolumeBucketWithServer#fqdn}.

---

##### `CertificatePem`<sup>Optional</sup> <a name="CertificatePem" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.certificatePem"></a>

```go
CertificatePem *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#certificate_pem NetappVolumeBucketWithServer#certificate_pem}.

---

##### `OnCertificateConflictAction`<sup>Optional</sup> <a name="OnCertificateConflictAction" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer.property.onCertificateConflictAction"></a>

```go
OnCertificateConflictAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#on_certificate_conflict_action NetappVolumeBucketWithServer#on_certificate_conflict_action}.

---

### NetappVolumeBucketWithServerTimeouts <a name="NetappVolumeBucketWithServerTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

&netappvolumebucketwithserver.NetappVolumeBucketWithServerTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#create NetappVolumeBucketWithServer#create}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#delete NetappVolumeBucketWithServer#delete}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#read NetappVolumeBucketWithServer#read}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#update NetappVolumeBucketWithServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#create NetappVolumeBucketWithServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#delete NetappVolumeBucketWithServer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#read NetappVolumeBucketWithServer#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/netapp_volume_bucket_with_server#update NetappVolumeBucketWithServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeBucketWithServerFileSystemNfsUserOutputReference <a name="NetappVolumeBucketWithServerFileSystemNfsUserOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

netappvolumebucketwithserver.NewNetappVolumeBucketWithServerFileSystemNfsUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeBucketWithServerFileSystemNfsUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *f64
```

- *Type:* *f64

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeBucketWithServerFileSystemNfsUser
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerFileSystemNfsUser">NetappVolumeBucketWithServerFileSystemNfsUser</a>

---


### NetappVolumeBucketWithServerKeyVaultOutputReference <a name="NetappVolumeBucketWithServerKeyVaultOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

netappvolumebucketwithserver.NewNetappVolumeBucketWithServerKeyVaultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeBucketWithServerKeyVaultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUriInput">CertificateKeyVaultUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUriInput">CredentialsKeyVaultUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretNameInput">CredentialsSecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUri">CertificateKeyVaultUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUri">CredentialsKeyVaultUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretName">CredentialsSecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateKeyVaultUriInput`<sup>Optional</sup> <a name="CertificateKeyVaultUriInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUriInput"></a>

```go
func CertificateKeyVaultUriInput() *string
```

- *Type:* *string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `CredentialsKeyVaultUriInput`<sup>Optional</sup> <a name="CredentialsKeyVaultUriInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUriInput"></a>

```go
func CredentialsKeyVaultUriInput() *string
```

- *Type:* *string

---

##### `CredentialsSecretNameInput`<sup>Optional</sup> <a name="CredentialsSecretNameInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretNameInput"></a>

```go
func CredentialsSecretNameInput() *string
```

- *Type:* *string

---

##### `CertificateKeyVaultUri`<sup>Required</sup> <a name="CertificateKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUri"></a>

```go
func CertificateKeyVaultUri() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `CredentialsKeyVaultUri`<sup>Required</sup> <a name="CredentialsKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUri"></a>

```go
func CredentialsKeyVaultUri() *string
```

- *Type:* *string

---

##### `CredentialsSecretName`<sup>Required</sup> <a name="CredentialsSecretName" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretName"></a>

```go
func CredentialsSecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVaultOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeBucketWithServerKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerKeyVault">NetappVolumeBucketWithServerKeyVault</a>

---


### NetappVolumeBucketWithServerServerOutputReference <a name="NetappVolumeBucketWithServerServerOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

netappvolumebucketwithserver.NewNetappVolumeBucketWithServerServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeBucketWithServerServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resetCertificatePem">ResetCertificatePem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resetOnCertificateConflictAction">ResetOnCertificateConflictAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificatePem` <a name="ResetCertificatePem" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resetCertificatePem"></a>

```go
func ResetCertificatePem()
```

##### `ResetOnCertificateConflictAction` <a name="ResetOnCertificateConflictAction" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.resetOnCertificateConflictAction"></a>

```go
func ResetOnCertificateConflictAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.certificatePemInput">CertificatePemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictActionInput">OnCertificateConflictActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.certificatePem">CertificatePem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictAction">OnCertificateConflictAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificatePemInput`<sup>Optional</sup> <a name="CertificatePemInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.certificatePemInput"></a>

```go
func CertificatePemInput() *string
```

- *Type:* *string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `OnCertificateConflictActionInput`<sup>Optional</sup> <a name="OnCertificateConflictActionInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictActionInput"></a>

```go
func OnCertificateConflictActionInput() *string
```

- *Type:* *string

---

##### `CertificatePem`<sup>Required</sup> <a name="CertificatePem" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.certificatePem"></a>

```go
func CertificatePem() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `OnCertificateConflictAction`<sup>Required</sup> <a name="OnCertificateConflictAction" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictAction"></a>

```go
func OnCertificateConflictAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServerOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeBucketWithServerServer
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerServer">NetappVolumeBucketWithServerServer</a>

---


### NetappVolumeBucketWithServerTimeoutsOutputReference <a name="NetappVolumeBucketWithServerTimeoutsOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v17/netappvolumebucketwithserver"

netappvolumebucketwithserver.NewNetappVolumeBucketWithServerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeBucketWithServerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolumeBucketWithServer.NetappVolumeBucketWithServerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



