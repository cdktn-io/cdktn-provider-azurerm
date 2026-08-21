# `netappVolumeBucket` Submodule <a name="`netappVolumeBucket` Submodule" id="@cdktn/provider-azurerm.netappVolumeBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeBucket <a name="NetappVolumeBucket" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket azurerm_netapp_volume_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/netappvolumebucket"

netappvolumebucket.NewNetappVolumeBucket(scope Construct, id *string, config NetappVolumeBucketConfig) NetappVolumeBucket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig">NetappVolumeBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig">NetappVolumeBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putFileSystemNfsUser">PutFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putKeyVault">PutKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetFileSystemCifsUsername">ResetFileSystemCifsUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetFileSystemNfsUser">ResetFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetKeyVault">ResetKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFileSystemNfsUser` <a name="PutFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putFileSystemNfsUser"></a>

```go
func PutFileSystemNfsUser(value NetappVolumeBucketFileSystemNfsUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putFileSystemNfsUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a>

---

##### `PutKeyVault` <a name="PutKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putKeyVault"></a>

```go
func PutKeyVault(value NetappVolumeBucketKeyVault)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putTimeouts"></a>

```go
func PutTimeouts(value NetappVolumeBucketTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts">NetappVolumeBucketTimeouts</a>

---

##### `ResetFileSystemCifsUsername` <a name="ResetFileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetFileSystemCifsUsername"></a>

```go
func ResetFileSystemCifsUsername()
```

##### `ResetFileSystemNfsUser` <a name="ResetFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetFileSystemNfsUser"></a>

```go
func ResetFileSystemNfsUser()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyVault` <a name="ResetKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetKeyVault"></a>

```go
func ResetKeyVault()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetappVolumeBucket resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/netappvolumebucket"

netappvolumebucket.NetappVolumeBucket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/netappvolumebucket"

netappvolumebucket.NetappVolumeBucket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/netappvolumebucket"

netappvolumebucket.NetappVolumeBucket_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/netappvolumebucket"

netappvolumebucket.NetappVolumeBucket_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetappVolumeBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetappVolumeBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetappVolumeBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetappVolumeBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemNfsUser">FileSystemNfsUser</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference">NetappVolumeBucketFileSystemNfsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.keyVault">KeyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference">NetappVolumeBucketKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.serverCertificateCommonName">ServerCertificateCommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.serverCertificateExpiryDate">ServerCertificateExpiryDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.serverIpAddress">ServerIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference">NetappVolumeBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemCifsUsernameInput">FileSystemCifsUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemNfsUserInput">FileSystemNfsUserInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.keyVaultInput">KeyVaultInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.volumeIdInput">VolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemCifsUsername">FileSystemCifsUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FileSystemNfsUser`<sup>Required</sup> <a name="FileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemNfsUser"></a>

```go
func FileSystemNfsUser() NetappVolumeBucketFileSystemNfsUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference">NetappVolumeBucketFileSystemNfsUserOutputReference</a>

---

##### `KeyVault`<sup>Required</sup> <a name="KeyVault" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.keyVault"></a>

```go
func KeyVault() NetappVolumeBucketKeyVaultOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference">NetappVolumeBucketKeyVaultOutputReference</a>

---

##### `ServerCertificateCommonName`<sup>Required</sup> <a name="ServerCertificateCommonName" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.serverCertificateCommonName"></a>

```go
func ServerCertificateCommonName() *string
```

- *Type:* *string

---

##### `ServerCertificateExpiryDate`<sup>Required</sup> <a name="ServerCertificateExpiryDate" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.serverCertificateExpiryDate"></a>

```go
func ServerCertificateExpiryDate() *string
```

- *Type:* *string

---

##### `ServerIpAddress`<sup>Required</sup> <a name="ServerIpAddress" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.serverIpAddress"></a>

```go
func ServerIpAddress() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.timeouts"></a>

```go
func Timeouts() NetappVolumeBucketTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference">NetappVolumeBucketTimeoutsOutputReference</a>

---

##### `FileSystemCifsUsernameInput`<sup>Optional</sup> <a name="FileSystemCifsUsernameInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemCifsUsernameInput"></a>

```go
func FileSystemCifsUsernameInput() *string
```

- *Type:* *string

---

##### `FileSystemNfsUserInput`<sup>Optional</sup> <a name="FileSystemNfsUserInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemNfsUserInput"></a>

```go
func FileSystemNfsUserInput() NetappVolumeBucketFileSystemNfsUser
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultInput`<sup>Optional</sup> <a name="KeyVaultInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.keyVaultInput"></a>

```go
func KeyVaultInput() NetappVolumeBucketKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.volumeIdInput"></a>

```go
func VolumeIdInput() *string
```

- *Type:* *string

---

##### `FileSystemCifsUsername`<sup>Required</sup> <a name="FileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.fileSystemCifsUsername"></a>

```go
func FileSystemCifsUsername() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeBucketConfig <a name="NetappVolumeBucketConfig" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/netappvolumebucket"

&netappvolumebucket.NetappVolumeBucketConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	VolumeId: *string,
	FileSystemCifsUsername: *string,
	FileSystemNfsUser: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser,
	Id: *string,
	KeyVault: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.netappVolumeBucket.NetappVolumeBucketKeyVault,
	Path: *string,
	Permissions: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18.netappVolumeBucket.NetappVolumeBucketTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#name NetappVolumeBucket#name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.volumeId">VolumeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#volume_id NetappVolumeBucket#volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.fileSystemCifsUsername">FileSystemCifsUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#file_system_cifs_username NetappVolumeBucket#file_system_cifs_username}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.fileSystemNfsUser">FileSystemNfsUser</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a></code> | file_system_nfs_user block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#id NetappVolumeBucket#id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.keyVault">KeyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#path NetappVolumeBucket#path}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.permissions">Permissions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#permissions NetappVolumeBucket#permissions}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts">NetappVolumeBucketTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#name NetappVolumeBucket#name}.

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.volumeId"></a>

```go
VolumeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#volume_id NetappVolumeBucket#volume_id}.

---

##### `FileSystemCifsUsername`<sup>Optional</sup> <a name="FileSystemCifsUsername" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.fileSystemCifsUsername"></a>

```go
FileSystemCifsUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#file_system_cifs_username NetappVolumeBucket#file_system_cifs_username}.

---

##### `FileSystemNfsUser`<sup>Optional</sup> <a name="FileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.fileSystemNfsUser"></a>

```go
FileSystemNfsUser NetappVolumeBucketFileSystemNfsUser
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a>

file_system_nfs_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#file_system_nfs_user NetappVolumeBucket#file_system_nfs_user}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#id NetappVolumeBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVault`<sup>Optional</sup> <a name="KeyVault" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.keyVault"></a>

```go
KeyVault NetappVolumeBucketKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#key_vault NetappVolumeBucket#key_vault}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#path NetappVolumeBucket#path}.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#permissions NetappVolumeBucket#permissions}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketConfig.property.timeouts"></a>

```go
Timeouts NetappVolumeBucketTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts">NetappVolumeBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#timeouts NetappVolumeBucket#timeouts}

---

### NetappVolumeBucketFileSystemNfsUser <a name="NetappVolumeBucketFileSystemNfsUser" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/netappvolumebucket"

&netappvolumebucket.NetappVolumeBucketFileSystemNfsUser {
	GroupId: *f64,
	UserId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser.property.groupId">GroupId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#group_id NetappVolumeBucket#group_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser.property.userId">UserId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#user_id NetappVolumeBucket#user_id}. |

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser.property.groupId"></a>

```go
GroupId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#group_id NetappVolumeBucket#group_id}.

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser.property.userId"></a>

```go
UserId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#user_id NetappVolumeBucket#user_id}.

---

### NetappVolumeBucketKeyVault <a name="NetappVolumeBucketKeyVault" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/netappvolumebucket"

&netappvolumebucket.NetappVolumeBucketKeyVault {
	CertificateKeyVaultUri: *string,
	CertificateName: *string,
	CredentialsKeyVaultUri: *string,
	CredentialsSecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.certificateKeyVaultUri">CertificateKeyVaultUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#certificate_key_vault_uri NetappVolumeBucket#certificate_key_vault_uri}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.certificateName">CertificateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#certificate_name NetappVolumeBucket#certificate_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.credentialsKeyVaultUri">CredentialsKeyVaultUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#credentials_key_vault_uri NetappVolumeBucket#credentials_key_vault_uri}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.credentialsSecretName">CredentialsSecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#credentials_secret_name NetappVolumeBucket#credentials_secret_name}. |

---

##### `CertificateKeyVaultUri`<sup>Required</sup> <a name="CertificateKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.certificateKeyVaultUri"></a>

```go
CertificateKeyVaultUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#certificate_key_vault_uri NetappVolumeBucket#certificate_key_vault_uri}.

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#certificate_name NetappVolumeBucket#certificate_name}.

---

##### `CredentialsKeyVaultUri`<sup>Required</sup> <a name="CredentialsKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.credentialsKeyVaultUri"></a>

```go
CredentialsKeyVaultUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#credentials_key_vault_uri NetappVolumeBucket#credentials_key_vault_uri}.

---

##### `CredentialsSecretName`<sup>Required</sup> <a name="CredentialsSecretName" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault.property.credentialsSecretName"></a>

```go
CredentialsSecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#credentials_secret_name NetappVolumeBucket#credentials_secret_name}.

---

### NetappVolumeBucketTimeouts <a name="NetappVolumeBucketTimeouts" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/netappvolumebucket"

&netappvolumebucket.NetappVolumeBucketTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#create NetappVolumeBucket#create}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#delete NetappVolumeBucket#delete}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#read NetappVolumeBucket#read}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#update NetappVolumeBucket#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#create NetappVolumeBucket#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#delete NetappVolumeBucket#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#read NetappVolumeBucket#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/netapp_volume_bucket#update NetappVolumeBucket#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeBucketFileSystemNfsUserOutputReference <a name="NetappVolumeBucketFileSystemNfsUserOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/netappvolumebucket"

netappvolumebucket.NewNetappVolumeBucketFileSystemNfsUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeBucketFileSystemNfsUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *f64
```

- *Type:* *f64

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUserOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeBucketFileSystemNfsUser
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketFileSystemNfsUser">NetappVolumeBucketFileSystemNfsUser</a>

---


### NetappVolumeBucketKeyVaultOutputReference <a name="NetappVolumeBucketKeyVaultOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/netappvolumebucket"

netappvolumebucket.NewNetappVolumeBucketKeyVaultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeBucketKeyVaultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateKeyVaultUriInput">CertificateKeyVaultUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsKeyVaultUriInput">CredentialsKeyVaultUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsSecretNameInput">CredentialsSecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateKeyVaultUri">CertificateKeyVaultUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsKeyVaultUri">CredentialsKeyVaultUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsSecretName">CredentialsSecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateKeyVaultUriInput`<sup>Optional</sup> <a name="CertificateKeyVaultUriInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateKeyVaultUriInput"></a>

```go
func CertificateKeyVaultUriInput() *string
```

- *Type:* *string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `CredentialsKeyVaultUriInput`<sup>Optional</sup> <a name="CredentialsKeyVaultUriInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsKeyVaultUriInput"></a>

```go
func CredentialsKeyVaultUriInput() *string
```

- *Type:* *string

---

##### `CredentialsSecretNameInput`<sup>Optional</sup> <a name="CredentialsSecretNameInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsSecretNameInput"></a>

```go
func CredentialsSecretNameInput() *string
```

- *Type:* *string

---

##### `CertificateKeyVaultUri`<sup>Required</sup> <a name="CertificateKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateKeyVaultUri"></a>

```go
func CertificateKeyVaultUri() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `CredentialsKeyVaultUri`<sup>Required</sup> <a name="CredentialsKeyVaultUri" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsKeyVaultUri"></a>

```go
func CredentialsKeyVaultUri() *string
```

- *Type:* *string

---

##### `CredentialsSecretName`<sup>Required</sup> <a name="CredentialsSecretName" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.credentialsSecretName"></a>

```go
func CredentialsSecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVaultOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappVolumeBucketKeyVault
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketKeyVault">NetappVolumeBucketKeyVault</a>

---


### NetappVolumeBucketTimeoutsOutputReference <a name="NetappVolumeBucketTimeoutsOutputReference" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-azurerm-go/azurerm/v18/netappvolumebucket"

netappvolumebucket.NewNetappVolumeBucketTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappVolumeBucketTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolumeBucket.NetappVolumeBucketTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



